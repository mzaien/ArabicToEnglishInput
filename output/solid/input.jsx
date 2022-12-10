import { createSignal } from "solid-js";

const arabicToEnglish = (string) => {
  // removing non numeric characters
  const number = string.replace(/[^0-9٠-٩.,]+/g, "");
  // replacing arabic numbers with english numbers
  return number.replace(/[\u0660-\u0669]/g, (digit) =>
    "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
  );
};

function MyComponent(props) {
  const [number, setNumber] = createSignal("");

  return (
    <>
      <label>This input changes arabic numbers to english numbers! </label>
      <br />
      <input
        value={number()}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
        inputMode={props.inputMode ?? "numeric"}
      />
    </>
  );
}

export default MyComponent;
