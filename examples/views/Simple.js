/*
    Example of creating a simple view that renders "Hello World!" 
*/

/* create the view and extend View */
class SimpleView extends View {

    /* return an html string in the render function */
    render() {
        return `
            <h1>Hello World!</h1>
        `;
    }
}

/* render the view without a router */
View.render(new SimpleView());



