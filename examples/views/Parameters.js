/* 
    Example of creating a parameter view that renders "Hello World!" 
*/

/* create the view and extend View */
class ParamterView extends View {

    /* return an dynamic html string based on parameters in the render function */
    render(params) {
        return `
            <h1>Hello ${params.world}!</h1>
        `;
    }
}

/* render the view without a router, and pass paramters to it */
View.render(new ParamterView(), { world: "World" });

