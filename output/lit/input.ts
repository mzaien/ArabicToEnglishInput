const arabicToEnglish = (string) => {
  const number = string.replace(/[^0-9٠-٩]+/g, "");
  return number.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
};

import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";

@customElement("my-component")
export default class MyComponent extends LitElement {
  createRenderRoot() {
    return this;
  }

  @state() number = "";

  render() {
    return html`
        
        <my-fragment>
        <label>This input changes arabic numbers to english numbers! </label>

        <input .value=${this.number} @input=${(event) =>
      (this.number = arabicToEnglish(event.target.value))} />
      </my-fragment>

      `;
  }
}
