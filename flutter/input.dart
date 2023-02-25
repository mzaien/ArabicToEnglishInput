void main() {
  String input = '١٢٣٤٥٦٧٨٩0123456';

  String arabicToEnglish(String input) {
    final numericValue = input.replaceAll(RegExp(r'[^٠-٩0-9.,]+'), "");

    return numericValue.replaceAllMapped(RegExp(r'[\u0660-\u0669]'),
        (match) => "٠١٢٣٤٥٦٧٨٩".indexOf(match[0].toString()).toString());
  }
  
  print(arabicToEnglish(input));
}