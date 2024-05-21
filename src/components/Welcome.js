import { createElement } from "../utils/markup.js";

class Welcome {
  constructor({ callback }) {
    this.$target;
    this.unmount = callback;
    this.initialize();
    this.render();
  }

  initialize = () => {};

  render = () => {
    const timeout = setTimeout(() => {
      this.$target.classList.add("fade-out");
      this.unmount(this.$target);
      clearTimeout(timeout);
    }, 3000);
  };

  setTarget = ($target) => {
    this.$target = $target;
  };
}

export default Welcome;
