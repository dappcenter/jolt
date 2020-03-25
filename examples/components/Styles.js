/*
    Example of creating a styled component that renders "Hello World!"
    in blue text at 30px
*/

/* create the styled component */
class StyledComponent extends Component {

    load() {

        let style = `
            h1 {
                color: blue;
                font-size: 30px;
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

/* register the component with the html tag "styled-component" */
Component.register("styled-component", StyledComponent);