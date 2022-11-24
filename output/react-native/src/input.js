import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useState } from "react";

const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

export default function MyComponent(props) {
  const [name, setName] = useState(() => "");

  return (
    <>
      <View>
        <Text>This input changes arabic numbers to english numbers! </Text>
      </View>

      <View
        value={name}
        onInput={(event) => setName(arabicToEnglish(event.target.value))}
      />
    </>
  );
}
