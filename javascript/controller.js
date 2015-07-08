


  document.addEventListener("keyup", function(event) {
    var inputText = view.getInputText;
    var convertedText = model.convertText(inputText);
    view.presentPreview(convertedText());
  });


