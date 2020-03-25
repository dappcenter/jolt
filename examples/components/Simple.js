/*
    Example of creating a simple component that renders "Hello World!"
*/

/* create the simple component */
class SimpleComponent extends Component {

    /* render an html string in the render function */
    render() {
        return `
            <h1>Hello World!</h1>
        `;
    }
}

/* register the component with the html tag "simple-component" */
Component.register("simple-component", SimpleComponent);