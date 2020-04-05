/* imports */
import { State } from "../common/State";

/**
 * Creates a view for rendering pages with.
 * @class
 * 
 * @example <caption>Creating a simple view</caption>
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
     * If no container element is specified it looks for an element with the id "app".
     * @param {HTMLElement} [container] - The element the view container element.
     */
    constructor(container = document.querySelector("#app")) {
        this._container = container;
        this._params = {};

        /**
         * The state of the view.
         * @type {State}
         */
        this.state = State.create(() => {
            this._updateContainer(this.render(this._params));
        });
    }

    /**
     * Sets the view's container element.
     * @param {HTMLElement} container - The view's new container element.
     */
    setContainer(container) {
        this._container = container;
    }

    /**
     * Adds a style element to the view.
     * @param {string} content - The css string containing the styles for the view.
     */
    addStyle(content) {
        const style = document.createElement("style");
        style.textContent = content;
        document.head.appendChild(style);
    }

    /**
     * Loads the view and does initial setup for rendering.
     * @param {Object} [params] - The view's paramters.
     * @abstract
     */
    load() { }

    /**
     * Renders the view to the container element.
     * @param {Object} [params] - The view's paramters.
     */
    render() { }

    /**
     * Does any additional setup after rendering.
     * @param {Object} [params] - The view's paramters. 
     */
    didLoad() { }

    /**
     * Updates the container with the content to render.
     * @param {string} - The content to update the container with.
     * @private
     */
    _updateContainer(content) {
        this._container.innerHTML = content;
        this._handleEventBinding();
    }

    /**
     * Parses the container's elements and handles all event binding attributes.
     * @private
     */
    _handleEventBinding() {
        const elements = this._container.querySelectorAll("*");

        for (let element of elements) {
            for (let attribute of element.attributes) {
                if (attribute.localName.startsWith("@")) {
                    const eventName = attribute.localName.substring(1);
                    element.addEventListener(eventName, this[attribute.value].bind(this));
                }
            }
        }
    }

    /**
     * Renders a view.
     * @param {View} view - The view to render.
     * @param {Object} [params] - The view's parameters.
     */
    static async render(view, params = {}) {
        view._params = params;
        await view.load(params);
        view._updateContainer(view.render(params));
        view.didLoad(params);
    }
}