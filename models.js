function Output() {
  this.preview = function(){return $("#preview-div");}
  this.textArea = function(){return $("textarea");}
  this.outputPlain = function(input) {
    this.preview().html(input);
  }
  this.makeItalic = function(input){
    var step1 = input.replace( /\*/,"<i>");
    var step2 = step1.replace(/\*/,"</i>");
    return step2;

  }
}


