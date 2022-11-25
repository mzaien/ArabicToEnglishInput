<script>
  const arabicToEnglish = (string) => {
    const x = string.replace(/[^0-9٠-٩]+/g, "");
    return x.replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
  };

  let number = "";
</script>

<label>This input changes arabic numbers to english numbers! </label>

<input
  value={number}
  on:input={(event) => {
    number = arabicToEnglish(event.target.value);
  }}
/>