/*
    Example of creating a component that renders a hamburger menu
    using attributes with defaults to change its style and animates when clicked
*/

/* create the hamburger menu component */
class HamburgerMenu extends Component {

    load() {
        let content = `
            #line1,
            #line2,
            #line3 {
                width: ${super.getAttribute("width") || "25px"};
                height: ${super.getAttribute("height") || "3px"};
                margin: ${super.getAttribute("margin") || "5px"};
                background-color: ${super.getAttribute("color") || "black"};
            }

            .toggled #line1 {
                transform: rotate(-45deg) translate(-5px, 6px);
            }

            .toggled #line2 {
                opacity: 0;
            }

            .toggled #line3 {
                transform: rotate(45deg) translate(-5px, -6px);
            }

            .toggled * {
                transition: transform ${super.getAttribute("speed") || "0.4s"} ease;
            }
        `;

        super.addStyle(content);
    }

    /* render an html string in the render function */
    render() {
        return `
            <div id="line-container">
                <div id="line1"></div>
                <div id="line2"></div>
                <div id="line3"></div>
            </div>
        `;
    }

    onclick() {
        let container = super.getElement("line-container");
        container.classList.toggle("toggled");
    }
}

/* register the component with the html tag "hamburger-menu" */
Component.register("hamburger-menu", HamburgerMenu);