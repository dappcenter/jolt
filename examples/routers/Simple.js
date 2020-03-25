/* 
    Example of creating a router with a default and home route 
*/

/* create the view */
class HomeView extends View {

    render() {
        return `
            <h1>Home View</h1>
        `;
    }
}

/* create the router and assign routes to views */
const router = new Router({
    "/": new HomeView(),
    "/home": new HomeView()
});

/* start the router */
router.listen();