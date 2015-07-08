$(document).ready(function() {

  $("#source-id").on('keypress', function(event) {
    var charCode = event.keyCode;
    var charStr = String.fromCharCode(charCode);
    console.log(charCode);
    console.log(charStr);
    $("#preview-div").append(charStr);
  });

});
