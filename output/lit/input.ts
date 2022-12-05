const arabicToEnglish = (string) => {
  // removing non numeric characters
  const number = string.replace(/[^0-9٠-٩.,]+/g, "");
  // replacing arabic numbers with english numbers
  return number.replace(/[\u0660-\u0669]/g, (digit) =>
    "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
  );
};

import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";

export interface MyComponentProps {
  inputMode?: "numeric" | "tel" | "decimal";
}

@customElement("my-component")
export default class MyComponent extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property() inputMode: any;

  @state() number = "";

  render() {
    return html`
        
        <my-fragment>
        <label>This input changes arabic numbers to english numbers! </label>

        <br />

        <input .value=${this.number} @input=${(event) =>
      (this.number = arabicToEnglish(event.target.value))} .inputMode=${
      this.inputMode ?? "numeric"
    }
        />
      </my-fragment>

      `;
  }
}
