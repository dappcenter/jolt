/** Component Class */
export class Component extends HTMLElement {

    constructor() {
        super();

        this._elementsToAppend = [];

        this.attachShadow({ mode: "open" });

        this.load();
        this.shadowRoot.innerHTML = this.render();

        for (let element of this._elementsToAppend) {
            this.shadowRoot.appendChild(element);
        }
        this.didLoad();

        this.shadowRoot.addEventListener("click", this.onclick.bind(this));
    }

    /**
     * appends an element to the component
     * @param {HTMLElement} element - the element to append
     */
    append(element) {
        this._elementsToAppend.push(element);
    }

    /**
     * get an internal component element by its id
     * @param {string} id - id of the desired element
     * @return {HTMLElement} - element containing the matching specfied id
     */
    getElement(id) {
        return this.shadowRoot.getElementById(id);
    }

    /**
     * adds a style element to the component
     * @param {string} content - the css string containing the styles for the component
     */
    addStyle(content) {
        let tag = document.createElement("style")
        tag.textContent = content;
        this.append(tag);
    }

    /**
     * load the component and do inital setup for rendering
     * @abstract
     */
    load() { }

    /**
     * render the component
     * @return {string} - the HTML code to be rendered
     * @abstract
     */
    render() { }

    /**
     * do further setup after rendering the component
     * @abstract
     */
    didLoad() { }

    /**
     * add a click event listener to the component
     * @param {MouseEvent} event - the click event that occured
     * @abstract
     */
    onclick() { }

    /**
     * register the component to make it available as an HTML tag
     * @param {string} name 
     * @param {Component} component
     * @param {Object} [params]
     */
    static register(name, component, params = {}) {
        window.customElements.define(name, component);
    }
}