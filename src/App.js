export default class App {
  constructor($target) {
    const $app = document.createElement("div");
    $app.className = "App";
    $target.appendChild($app);
    this.$app = $app;
  }
}
