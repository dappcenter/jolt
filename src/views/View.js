/* imports */
import { State } from "../common/State";

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
     * @param {string} [elementId="app"] - The id of the element the view renders in.
     */
    constructor(elementId = "app") {
        this._element = document.getElementById(elementId);
        this._params = {};

        /**
         * The state of the view.
         * @type {State}
         */
        this.state = State.create(() => {
            this._element.innerHTML = this.render(this._params);
            this.didLoad(this._params);
        });
    }

    /**
     * Adds a style element to the view
     * @param {string} content - The css string containing the styles for the view.
     */
    addStyle(content) {
        const style = document.createElement("style");
        style.textContent = content;
        document.head.appendChild(style);
    }

    /**
     * Sets the element that the view should render in.
     * @param {HTMLElement} element - The element to render in.
     */
    setElement(element) {
        this._element = element;
    }

    /**
     * Sets the element that the view should render in by its id.
     * @param {string} elementId - The id of the element to render in.
     */
    setElementById(elementId) {
        this._element = document.getElementById(elementId);
    }

    /**
     * Load the view and do inital setup for rendering.
     * @param {Object} [params] - The route's paramters.
     * @abstract
     */
    load() { }

    /**
     * Render the view to the page.
     * @param {Object} [params] - The route's paramters.
     * @return {string} The HTML code to be rendered.
     * @abstract
     */
    render() { }

    /**
     * Do any additional setup after rendering.
     * @param {Object} [params] - The route's paramters.
     * @abstract
     */
    didLoad() { }

    /**
     * Renders a view.
     * @param {View} view - The view to render.
     * @param {Object} [params] - The parameters to pass to the view.
     */
    static async render(view, params = {}) {
        view._params = params;
        await view.load(params);
        view._element.innerHTML = await view.render(params);
        await view.didLoad(params);
    }
}