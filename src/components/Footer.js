class Footer {
  constructor() {
    this.$target;
    this.isInView = false;
  }

  setTarget = ($target) => {
    this.$target = $target;
  };

  /**
   * set this component is in view or not
   * @param {boolean} isInView
   */
  setIsInView = (isInView) => {
    this.isInView = isInView;
  };
}

export default Footer;
