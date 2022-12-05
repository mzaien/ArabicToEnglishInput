import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useState } from "react";

const arabicToEnglish = (string) => {
  // removing non numeric characters
  const number = string.replace(/[^0-9٠-٩.,]+/g, "");
  // replacing arabic numbers with english numbers
  return number.replace(/[\u0660-\u0669]/g, (digit) =>
    "٠١٢٣٤٥٦٧٨٩".indexOf(digit)
  );
};

export default function MyComponent(props) {
  const [number, setNumber] = useState(() => "");

  return (
    <>
      <View>
        <Text>This input changes arabic numbers to english numbers! </Text>
      </View>

      <View />

      <View
        value={number}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
        inputMode={props.inputMode ?? "numeric"}
      />
    </>
  );
}
