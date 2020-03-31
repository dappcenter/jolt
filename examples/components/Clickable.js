/*
    Example of creating a clickable component that renders "Clicked: 0"
    and updates whenever the element is clicked
*/

/* create the clickable component */
class ClickableComponent extends Component {

    constructor() {
        super();

        this.clicked = 0;
    }

    /* render an html string in the render function */
    render() {
        return `
            <h1>Clicked: ${this.clicked}</h1>
        `;
    }

    didLoad() {
        super.addEventListener("click", (e) => {
            e.preventDefault();
            this.clicked++;
        });

        super.addEventListener("touchstart", () => {
            e.preventDefault();
            this.clicked++;
        });
    }
}

/* register the component with the html tag "clickable-component" */
Component.register("clickable-component", ClickableComponent);