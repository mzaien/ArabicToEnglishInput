import 'package:flutter/material.dart';

class MyComponent extends StatefulWidget {
  const MyComponent({Key? key}) : super(key: key);

  @override
  State<MyComponent> createState() => _MyComponentState();
}

class _MyComponentState extends State<MyComponent> {

  String arabicToEnglish(String input) {
    final numericValue = input.replaceAll(RegExp(r'[^٠-٩0-9.,]+'), "");

    return numericValue.replaceAllMapped(RegExp(r'[\u0660-\u0669]'),
            (match) => "٠١٢٣٤٥٦٧٨٩".indexOf(match[0].toString()).toString());
  }

  final TextEditingController _controller = TextEditingController();

//  ٠١٢٣٤٥٦٧٨٩0123456

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: SizedBox(
            width: MediaQuery.of(context).size.width / 3,
            child: TextField(
              controller: _controller,
              onChanged: (val) {
                final newInput = arabicToEnglish(_controller.text);
                _controller.value = _controller.value.copyWith(
                  text: newInput,
                  selection: TextSelection.collapsed(offset: newInput.length),
                );
              },
              decoration: const InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Enter a search term'
              ),
            ),
          ),
        ),
      ),
    );
  }
}