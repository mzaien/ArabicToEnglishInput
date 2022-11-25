import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Component } from "@angular/core";

const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

@Component({
  selector: "my-component, MyComponent",
  template: `
    <ng-container>
      <label>This input changes arabic numbers to english numbers!</label>

      <input
        [attr.value]="number"
        (input)="number = arabicToEnglish($event.target.value)"
      />
    </ng-container>
  `,
})
export class MyComponent {
  arabicToEnglish = arabicToEnglish;

  number = "";
}

@NgModule({
  declarations: [MyComponent],
  imports: [BrowserModule],
  exports: [MyComponent],
})
export class MyComponentModule {}
