/* 
    Example of creating a router with a parameterized route
*/

/* create the view */
class ParameterView extends View {

    render(params) {
        return `
            <h1>Hello ${params.user}</h1>
        `;
    }
}

/* create the router and assign routes to views */
const router = new Router({
    "/users/:user" : new ParamterView()
});

/* start the router */
router.listen();