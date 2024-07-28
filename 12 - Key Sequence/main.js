/** @type {Array<string>} */
const pressed = [];

const code = "wesbos";

window.addEventListener(
  "keyup",
  /** @type {KeyboardEvent} */ (e) => {
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);

    if (pressed.join("").includes(code)) cornify_add();
  }
);
