/**
 * Disable button on form submit
 */
export function disableButton(button) {
  if (!button) {
    throw new Error("form without button");
  }

  button.removeAttribute("disabled", true);
  button.addEventListener("htmx:beforeRequest", function () {
    button.toggleAttribute("disabled", true);
  });

  button.addEventListener("htmx:beforeSwap", function () {
    button.toggleAttribute("disabled", true);
  });
}
