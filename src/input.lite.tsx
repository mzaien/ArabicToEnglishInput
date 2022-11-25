import { useState } from "@builder.io/mitosis";

const arabicToEnglish = string => string.replace(/[٠-٩]/g, digit => '٠١٢٣٤٥٦٧٨٩'.indexOf(digit))

export default function MyComponent() {
  const [number, setNumber] = useState("");
  return (
    <>
      <label>This input changes arabic numbers to english numbers! </label>
      <input
        value={number}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
      />
    </>
  );
}