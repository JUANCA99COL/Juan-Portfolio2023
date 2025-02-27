import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { eventListeners } from "@popperjs/core";

const hamMenu = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("is-active");
  offScreenMenu.classList.toggle("active");
});

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
