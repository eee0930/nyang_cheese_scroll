import { createElement } from "../utils/markup.js";

class Welcome {
  constructor({ callback }) {
    this.$target;
    this.$container;
    this.unmount = callback;
    this.initialize();
    this.render();
  }

  initialize = () => {
    this.$container = createElement("div", { className: "container" });
    const body = this.craeteBody();
    this.$container.append(...body);
  };

  render = () => {
    setTimeout(() => {
      this.$container.classList.add("smile");
      this.$container.classList.add("nyang");
    }, 3500);
    const timeout = setTimeout(() => {
      // this.$target.classList.add("fade-out");
      // this.unmount(this.$target);
      // clearTimeout(timeout);
    }, 5000);
  };

  createEyes = () => {
    const $eyes = createElement("div", { className: "eyes-container" });
    const $leftEye = createElement("div", { className: "eye left" });
    const $rightEye = createElement("div", { className: "eye right" });
    $eyes.append($leftEye, $rightEye);
    return $eyes;
  };

  createMouse = () => {
    const $mouseContainer = createElement("div", {
      className: "mouse-countainer",
    });
    const $in = createElement("div", { className: "mouse in" });
    const $top = createElement("div", { className: "mouse top" });
    const $left = createElement("div", { className: "mouse left" });
    const $right = createElement("div", { className: "mouse right" });
    $mouseContainer.append($in, $top, $left, $right);
    return $mouseContainer;
  };

  craeteBody = () => {
    const $body = createElement("div", { className: "duck body" });
    const $head = createElement("div", { className: "duck head" });
    $head.append(this.createMouse(), this.createEyes());
    return [$head, $body];
  };

  setTarget = ($target) => {
    this.$target = $target;
    this.$target.append(this.$container);
  };
}

export default Welcome;
