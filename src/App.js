import Welcome from "./components/Welcome.js";
import EyeBlink from "./components/EyeBlink.js";
import Pass from "./components/Pass.js";
import Footer from "./components/Footer.js";

import { createElement } from "./utils/markup.js";

class App {
  constructor($root) {
    this.$Root = document.querySelector($root);
    this.welcome;
    this.sections;
    this.nowSection = 0;
    this.initialize();
    this.render();
    this.scroll();
  }

  initialize = () => {
    const welcome = new Welcome({ callback: this.removeComponent });
    const eyeBlink = new EyeBlink({});
    const pass = new Pass({});
    const footer = new Footer({});
    this.sections = [welcome, eyeBlink, pass, footer];
  };

  render = () => {
    const $sectionParent = createElement("div", {
      className: "root-section-parent",
    });
    this.sections.forEach((section, i) => {
      const $section = this.createTarget(i);
      section.setTarget($section);
      $sectionParent.appendChild($section);
    });
    this.$Root.appendChild($sectionParent);
  };

  scroll = () => {
    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const offsetHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY;
      console.log("현재 스크롤 위치: ", scrollPosition);
      console.log("innerHeight: ", height);
      console.log("body.offsetHeight: ", offsetHeight);
    });
  };

  createTarget = (i) => {
    const $section = createElement("section", {
      id: `section-${i}`,
      className: "root-section",
    });
    $section.setAttribute("data-index", i);
    return $section;
  };

  removeComponent = ($target) => {
    const timeout = setTimeout(() => {
      $target.remove();
      const nextSection = this.nowSection + 1;
      this.setNowSection(nextSection);
      this.sections[nextSection].setIsInView(true);
      this.sections.shift();
      clearTimeout(timeout);
    }, 500);
  };

  setNowSection = (index) => {
    this.nowSection = index;
  };
}

export default App;
