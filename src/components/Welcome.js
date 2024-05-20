import { createElement } from "../utils/markup.js";

class Welcome {
  constructor({}) {
    this.$target;
  }

  setTarget = ($target) => {
    this.$target = $target;
  };
}

export default Welcome;
