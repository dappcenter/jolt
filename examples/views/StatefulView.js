/*
    Example of creating a stateful view that renders "Hello!" and "Goodbye!" when clicked.
*/

/* create the view and extend View */
class StatefulView extends View {

    load() {
        this.state.msg = "Hello"
    }

    /* return an html string in the render function */
    render() {
        return `
            <h1 id="message">${this.state.msg}!</h1>
        `;
    }

    didLoad() {
        let message = document.getElementById("message");

        message.addEventListener("click", () => {
            this.state.msg = "Goodbye";
        });
    }
}

/* render the view without a router */
View.render(new StatefulView());