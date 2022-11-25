import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useState } from "react";

const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

export default function MyComponent(props) {
  const [number, setNumber] = useState(() => "");

  return (
    <>
      <View>
        <Text>This input changes arabic numbers to english numbers! </Text>
      </View>

      <View
        value={number}
        onInput={(event) => setNumber(arabicToEnglish(event.target.value))}
      />
    </>
  );
}
