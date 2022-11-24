import * as React from "react";
import { useState } from "react";

const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

export default function MyComponent(props) {
  const [name, setName] = useState(() => "");

  return (
    <>
      <label>This input changes arabic numbers to english numbers! </label>

      <input
        value={name}
        onInput={(event) => setName(arabicToEnglish(event.target.value))}
      />
    </>
  );
}
