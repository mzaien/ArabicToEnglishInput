// GENERATED BY MITOSIS

import { Fragment, component$, h, useStore } from "@builder.io/qwik";
const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
export const MyComponent = component$((props) => {
  const state = useStore({ number: "" });
  return (
    <Fragment>
      <label>This input changes arabic numbers to english numbers! </label>
      <input
        value={state.number}
        onInput$={(event) =>
          (state.number = arabicToEnglish(event.target.value))
        }
      ></input>
    </Fragment>
  );
});
export default MyComponent;
