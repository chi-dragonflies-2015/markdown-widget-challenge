function Output(character) {
  this.charStr = character
  this.italics = false
  this.outputPlain = function() {
    $("#preview-div").append(character);
  }

  this.startItalics = function() {
    // this.italicsOn()
    $("#preview-div").append("<i>");
  }

  this.stopItalics = function() {
    // this.italicsOff()
    $("#preview-div").append("</i>");
  }
  this.italicsOn = function() {
    this.italics = true;
  }
  this.italicsOff = function(){
    this.italics = false;
  }

  this.deleteKey = function(){

  }
}


