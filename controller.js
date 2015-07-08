$(document).ready(function() {
  output = new Output();
  output.textArea().on('keyup', function(event) {
    var input = output.textArea().val();
      // var italicPattern = /\*(.+)\*/;
      // var italicYes = italicPattern.test(input);

      var boldPattern =/\*{2}.*\*{2}/;
      var boldYes = boldPattern.test(input);

      // if(italicYes){
      //   input = output.makeItalic(input)
      // };

      if(boldYes){
        input = output.makeBold(input)
      };

      output.outputPlain(input);
  });

});


