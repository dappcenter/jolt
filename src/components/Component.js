/**
 * Create custom web components in a similar manner to how you create views.
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
        
        this.attachShadow({ mode: "open" });

        this._elementsToAppend = [];

        /* load the component */
        this.load();
        this.shadowRoot.innerHTML = this.render();
        for (let element of this._elementsToAppend) {
            this.shadowRoot.appendChild(element);
        }
        this.didLoad();

        /* register the onclick response */
        this.shadowRoot.addEventListener("click", this.onclick.bind(this));
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
     * @param {string} id - The id of the desired element.
     * @return {HTMLElement} The element containing the matching specfied id.
     */
    getElement(id) {
        return this.shadowRoot.getElementById(id);
    }

    /**
     * Adds a style element to the component.
     * @param {string} content - The css string containing the styles for the component.
     */
    addStyle(content) {
        let tag = document.createElement("style")
        tag.textContent = content;
        this.addElement(tag);
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
     * Add a click event listener to the component.
     * @param {MouseEvent} event - The click event that occured.
     * @abstract
     */
    onclick() { }

    /**
     * Registers the component to make it available as an HTML tag.
     * @param {string} name - The component tag name.
     * @param {Component} component - the component.
     */
    static register(name, component) {
        window.customElements.define(name, component);
    }
}