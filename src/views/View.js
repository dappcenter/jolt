/** View Class */
export class View {

    /**
     * @param {string} [id="app"] - the id of the element the view renders to.
     */
    constructor(id="app") {
        this._element = document.getElementById(id);
    }

    /**
     * set the element that the view should render to
     * @param {HTMLElement} element - the element to render to
     */
    setElement(element) {
        this._element = element;
    }

    /**
     * set the element that the view should render to by its id
     * @param {string} id - the id of the element to render to
     */
    setElementById(id) {
        this._element.getElementById(id);
    }

    /**
     * load the view and do inital setup for rendering
     * @param {Object} params - the route paramters
     * @abstract
     */
    async load() {}

    /**
     * render the view
     * @param {Object} params - the view paramters
     * @return {string} - the HTML code to be rendered
     * @abstract
     */
    async render() {}

    /**
     * do any additional setup after rendering
     * @param {Object} params - the route paramters
     * @abstract
     */
    async didLoad() {}

    /**
     * render a view with specific paramters,
     * this function is useful for rendering views outside of the {@link Router}
     * @param {View} view - the view to render
     * @param {Object} [params] - parameters to pass to the view
     */
    static async render(view, params={}) {
        await view.load(params);
        let html = await view.render(params);
        view._element.innerHTML = html;
        view.didLoad(params);
    }
}