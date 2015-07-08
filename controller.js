$(document).ready(function() {

  $("#source-id").on('keypress', function(event) {
    var charCode = event.keyCode;
    var charStr = String.fromCharCode(charCode);
    output = new Output(charStr);
    if(output.charStr === "*" && output.italics === false) {
      output.startItalics();
    }
    else if (output.charStr === "*" && output.italics === true){
      console.log("im here");
      output.stopItalics();
    }
    else {
      output.outputPlain();
    }
  });

});
