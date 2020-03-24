/* imports */
import { Component } from "./Component";

/**
 * HamburgerMenu Component </br>
 * </br>
 * Attributes: </br>
 * - (optional) width : string (default: "25px") </br>
 * - (optional) height : string (default: "3px") </br>
 * - (optional) margin : string (default: "5px") </br>
 * - (optional) color : string (default: "black") </br>
 * - (optional) speed : string (default: "0.4s") </br>
 * 
 * @example <caption>Example usage of registering the HamburgerMenu Component</caption>
 * import { Component, HamburgerMenu } from "@outwalk/willow";
 * Component.register("hamburger-menu", HamburgerMenu);
 * 
 * @example <caption>Example usage of the HamburgerMenu Component</caption>
 * <hamburger-menu width="25px" height="3px" margin="5px" color="black" speed="0.4s" />
 * 
 */
export class HamburgerMenu extends Component {

    load() {
        let tag = document.createElement("style");
        tag.textContent = `
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

        super.append(tag);
    }

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