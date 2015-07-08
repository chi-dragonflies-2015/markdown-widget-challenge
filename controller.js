$(document).ready(function() {
  output = new Output();
  output.textArea().on('keyup', function(event) {
    var input = output.textArea().val();
      output.outputPlain(input);
  });

});
