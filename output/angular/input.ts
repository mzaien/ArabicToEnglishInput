import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Component, Input } from "@angular/core";

export interface MyComponentProps {
  inputMode?: "numeric" | "tel" | "decimal";
}

const arabicToEnglish = (string) => {
  // removing non numeric characters
  const number = string.replace(/[^0-9٠-٩.,]+/g, "");
  // replacing arabic numbers with english numbers
  return number.replace(/[\u0660-\u0669]/g, (digit) =>
    "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
  );
};

@Component({
  selector: "my-component, MyComponent",
  template: `
    <ng-container>
      <label>This input changes arabic numbers to english numbers!</label>

      <br />

      <input
        [attr.value]="number"
        (input)="number = arabicToEnglish($event.target.value)"
        [attr.inputMode]='inputMode ?? "numeric"'
      />
    </ng-container>
  `,
})
export class MyComponent {
  arabicToEnglish = arabicToEnglish;

  @Input() inputMode: MyComponentProps["inputMode"];

  number = "";
}

@NgModule({
  declarations: [MyComponent],
  imports: [BrowserModule],
  exports: [MyComponent],
})
export class MyComponentModule {}
