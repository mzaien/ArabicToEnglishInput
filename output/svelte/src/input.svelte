<script>
  const arabicToEnglish = (string) =>
    string.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));

  let name = "";
</script>

<label>This input changes arabic numbers to english numbers! </label>

<input
  value={name}
  on:change={(event) => {
    name = arabicToEnglish(event.target.value);
  }}
/>