/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";

const arabicToEnglish = (string) => {
  const x = string.replace(/[^0-9٠-٩]+/g, "");
  return x.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
};

export default function MyComponent(props) {
  const [number, setNumber] = useState(() => "");

  return (
    <Fragment>
      <label>This input changes arabic numbers to english numbers! </label>

      <input
        value={number}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
      />
    </Fragment>
  );
}
