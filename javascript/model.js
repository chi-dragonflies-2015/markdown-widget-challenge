
  var model = {

    convertText: function(incomingText) {
      // console.log(incomingText);
      var bolded = incomingText().replace(/\*\*(.*?)\*\*/, "<strong>$1</strong>");
      var firstItal = bolded.replace(/\*(.*?)\*/, "<em>$1</em>");
      var secondItal = firstItal.replace(/\_(.*?)\_/, "<em>$1</em>");
      console.log(secondItal)
      return secondItal
    }
  };

