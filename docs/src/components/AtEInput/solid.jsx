import { createSignal } from "solid-js";

const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

function MyComponent(props) {
  const [name, setName] = createSignal("");

  return (
    <>
      <label>This input changes arabic numbers to english numbers!</label>
      <input
        value={name()}
        onInput={(event) => setName(arabicToEnglish(event.target.value))}
      />
    </>
  );
}

export default MyComponent;
