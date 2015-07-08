function Output() {
  this.preview = function(){return $("#preview-div");}
  this.textArea = function(){return $("textarea");}
  this.outputPlain = function(input) {
    this.preview().html(input);
  }
}


