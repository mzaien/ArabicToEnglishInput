<template>
  <label>This input changes arabic numbers to english numbers! </label>

  <input :value="name" @input="name = arabicToEnglish($event.target.value)" />
</template>

<script>
const arabicToEnglish = (string) =>
  string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

export default {
  name: "my-component",

  data: () => ({ name: "" }),

  methods: { arabicToEnglish },
};
</script>