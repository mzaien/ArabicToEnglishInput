import { useState } from "@builder.io/mitosis";

const arabicToEnglish = string => string.replace(/[٠-٩]/g, digit => '٠١٢٣٤٥٦٧٨٩'.indexOf(digit))

export default function MyComponent() {
  const [name, setName] = useState("");

  return (
    <>
      <label>This input changes arabic numbers to english numbers! </label>
      <input
        value={name}
        onChange={(event) => setName(arabicToEnglish(event.target.value))}
      />
    </>
  );
}