/** Router Class */
export class Router {

    /**
     * @param {Object.<string, View>} routes - the routes to handle routing for
     */
    constructor(routes) {
        this._routes = routes;

        /* parse the routes into usable data for routing */
        this._parsedRoutes = this._parseRoutes();
    }

    /**
     * add a route to the router's route mapping
     * @param {string} route - the route to add
     * @param {View} view - the view to render when the route is requested
     */
    on(route, view) {
        this._routes[route] = view;
        this._parsedRoutes = this._parseRoutes();
    }

    /**
     * navigate to the desired route (not applicable when using hash routing)
     * @param {string} pathname - the pathname to navigate to
     */
    navigate(pathname) {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        this._matchUrlToRoute(pathname);
    }

    /**
     * start the router
     * @param {boolean} [useHashRouting=false] - should the router use the hash routing method
     */
    listen(useHashRouting = false) {
        this.useHashRouting = useHashRouting;

        if (this.useHashRouting) {
            /* hash routing setup */
            window.addEventListener("hashchange", () => {
                this._matchUrlToRoute(this._getCurrentUrl());
            });
        } else {
            /* history api routing setup */
            window.addEventListener("popstate", () => {
                this._matchUrlToRoute(this._getCurrentUrl());
            });
        }

        /* render the current urls view */
        this._matchUrlToRoute(this._getCurrentUrl());
    }

    /**
     * set the view to be rendered when the router can not find a matching route
     * @param {View} view - the view to be rendered
     */
    setRouteNotFound(view) {
        this._routes["ERROR_404"] = view;
    }

    /**
     * get the current url to determine the route with 
     * this function parses the hash based url and history url to match the route url patterns
     * @private
     */
    _getCurrentUrl() {
        /* if hash routing is being used, grab the hash pathname, if not, get the url pathname */
        let url = (this.useHashRouting ? (window.location.hash.slice(1) || "/") : (window.location.pathname || "/")).toLowerCase();

        /* if the url ends with '/' but has a pathname, trim the '/' off the end */
        if (url.endsWith("/") && url.length > 1) {
            return url.slice(0, -1);
        }

        return url;

    }

    /**
     * parse the routes into data that can be used for routing
     * @private
     */
    _parseRoutes() {
        return Object.keys(this._routes)
            .sort((a, b) => { return b.length - a.length; })
            .map((path) => {
                return {
                    url: new RegExp("^" + path.replace(/:[^\s/]+/g, '([\\w-]+)') + "$"),
                    view: this._routes[path],
                    routepath: path
                };
            });
    }

    /**
     * get the url parameters from the current route
     * @param {Object} route - the route to get the parameters from
     * @param {RegExp} regex - the regex containing the parameter values
     * @private 
     */
    _getUrlParameters(route, regex) {
        let params = {};
        let fragments = route.routepath.split("/");
        let index = 1;

        /* if the fragment starts with ':' record its value as a paramater */
        for (let fragment of fragments) {
            if (fragment.startsWith(":")) {
                params[fragment.substring(1)] = regex[index];
                index++;
            }
        }

        return params;
    }

    /**
     * match a specified url to a route and render the matching route
     * @param {string} url - the url to match to a route
     * @private
     */
    async _matchUrlToRoute(url) {
        let regex = null;

        for (let route of this._parsedRoutes) {
            regex = url.match(route.url);
            if (regex) {

                /* render the view */
                let params = this._getUrlParameters(route, regex);
                let view = this._routes[route.routepath];

                await view.load(params);
                view._element.innerHTML = await view.render(params);
                view.didLoad(params);

                return;
            }
        }

        /* handle 404 errors */
        if (!regex) {
            let view = this._routes["ERROR_404"];

            /* if no error view is defined, just write the error text to the page */
            if (!view) {
                document.write(`Error 404: ${url} not found!`);
                return;
            }

            /* render the error view */
            let params = { url: window.location.href };

            await view.load(params);
            view._element.innerHTML = await view.render(params);
            view.didLoad(params);
        }
    }
}