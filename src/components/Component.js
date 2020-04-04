/* imports */
import { State } from "../common/State";

/**
 * Create custom WebComponents in a similar manner to how you create views.
 * @class
 * @extends HTMLElement
 * 
 * @example <caption>Creating a simple Component</caption>
 * 
 * class SimpleComponent extends Component {
 *      
 *      render() {
 *          return `
 *              <h1>Hello World!</h1>
 *          `;
 *      }
 * }
 * 
 * Component.register("simple-component", SimpleComponent);
 */
export class Component extends HTMLElement {

    constructor() {
        super();
        /* open the Shadow DOM */
        this.attachShadow({ mode: "open" });

        /* container for elements to be added to the page */
        this._elementsToAppend = [];

        /* load and render the component */
        this.load();
        this.shadowRoot.innerHTML = this.render();
        for (let element of this._elementsToAppend) {
            this.shadowRoot.appendChild(element);
        }
        this.didLoad();
    }

    /**
     * Adds an {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement HTMLElement} to the component.
     * @param {HTMLElement} element - The element to add to the component.
     */
    addElement(element) {
        this._elementsToAppend.push(element);
    }

    /**
     * Gets an internal element by its id.
     * @param {string} elementId - The id of the desired element.
     * @return {HTMLElement} The element containing the matching specfied id.
     */
    getElement(elementId) {
        return this.shadowRoot.getElementById(elementId);
    }

    /**
     * Adds a style element to the component.
     * @param {string} content - The css string containing the styles for the component.
     */
    addStyle(content) {
        const style = document.createElement("style");
        style.textContent = content;
        this.addElement(style);
    }

    /**
     * Load the component and do inital setup for rendering.
     * @abstract
     */
    load() { }

    /**
     * Render the component.
     * @return {string} The HTML code to be rendered.
     * @abstract
     * 
     * @example <caption>Rendering "Hello World!"</caption>
     * 
     * render() {
     *      return `
     *          <h1>Hello World!</h1>
     *      `;
     * }
     */
    render() { }

    /**
     * Do any further setup after rendering the component.
     * @abstract
     */
    didLoad() { }

    /**
     * Registers the component to make it available as an HTML tag.
     * @param {string} name - The component tag name.
     * @param {Component} component - the component.
     */
    static register(name, component) {
        window.customElements.define(name, component);
    }
}