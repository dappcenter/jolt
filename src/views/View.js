/**
 * Creates a view for rendering pages with.
 * @class
 * 
 * @example <caption>Creating a simple View</caption>
 * 
 * class SimpleView extends View {
 *      
 *      render() {
 *          return `
 *              <h1>Hello World</h1>
 *          `;
 *      }
 * }
 */
export class View {

    /**
     * @param {string} [id="app"] - The id of the element the view renders into.
     */
    constructor(id="app") {
        this._element = document.getElementById(id);
    }

    /**
     * Sets the element that the view should render in.
     * @param {HTMLElement} element - The element to render into.
     */
    setElement(element) {
        this._element = element;
    }

    /**
     * Sets the element that the view should render into by its id.
     * @param {string} id - The id of the element to render into.
     */
    setId(id) {
        this._element.getElementById(id);
    }

    /**
     * Load the view and do inital setup for rendering.
     * @param {Object} params - The route's paramters.
     * @abstract
     */
    load() {}

    /**
     * Render the view to the page.
     * @param {Object} params - The route's paramters.
     * @return {string} The HTML code to be rendered.
     * @abstract
     */
    render() {}

    /**
     * Do any additional setup after rendering.
     * @param {Object} params - The route's paramters.
     * @abstract
     */
    didLoad() {}

    /**
     * Renders a view with specific paramters,
     * this function is useful for rendering views outside of the {@link Router}.
     * @param {View} view - The view to render.
     * @param {Object} [params] - The parameters to pass to the view.
     */
    static async render(view, params={}) {
        await view.load(params);
        view._element.innerHTML = await view.render(params);
        view.didLoad(params);
    }
}