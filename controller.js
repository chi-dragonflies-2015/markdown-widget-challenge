$(document).ready(function() {
  output = new Output();
  output.textArea().on('keyup', function(event) {
    var input = output.textArea().val();
      var doubleAst = /(\*)(.+)(\*)/;
      var italicYes = doubleAst.test(input);
      if(italicYes){
        input = output.makeItalic(input)
      };
      output.outputPlain(input);
  });

});


