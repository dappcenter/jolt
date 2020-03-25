/*
    Example of creating a view that loads html and renders "Hello World!" 
*/

/* create the view and extend View */
class LoadHTMLView extends View {

    /* load the html from a file */
    async load() {
        this.loadedHTML = await loader.loadHTML("hello-world.html");
    }

    /* return an html string in the render function */
    render() {
        return this.loadedHTML;
    }
}

/* render the view without a router */
View.render(new LoadHTMLView());