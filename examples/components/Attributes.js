/*
    Example of creating a component that renders "Hello World!"
    using attributes to change its style

    Attributes are used the same as HTML element attributes
*/

/* create the attribute component */
class AttributeComponent extends Component {

    load() {

        let style = `
            h1 {
                color: ${super.getAttribute("color")};
                font-size: ${super.getAttribute("size")};
            }
        `;

        super.addStyle(style);
    }

    /* render an html string in the render function */
    render() {
        return `
            <h1>Hello World!</h1>
        `;
    }
}

/* register the component with the html tag "attribute-component" */
Component.register("attribute-component", AttributeComponent);