import { useState } from "@builder.io/mitosis";

const arabicToEnglish = (string) => {
  // removing non numeric characters
  const number = string.replace(/[^0-9٠-٩.,]+/g, "");
  // replacing arabic numbers with english numbers
  return number.replace(/[\u0660-\u0669]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
};

export default function MyComponent(props: { inputMode?: "numeric" | "decimal" | "tel" }) {
  const [number, setNumber] = useState("");
  return (
    <>
      <label>This input changes arabic numbers to english numbers! </label>
      <br/>
      <input
        value={number}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
        inputMode={props.inputMode ?? "numeric"}
      />
    </>
  );
}