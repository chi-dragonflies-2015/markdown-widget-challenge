$(document).ready(function() {
  new Markdowner().initialize();
});


var View = {
  inputArea: function() { return $("textarea") },
  previewArea: function () { return $("#preview") }
}


var Markdowner = function(){};

Markdowner.prototype.initialize = function(){
  View.inputArea().on("keypress", this.parseInput)
}

Markdowner.prototype.parseInput = function(){
  var text = View.inputArea().val()
  View.previewArea().html(text)
}

// # h1 Heading
//  **rendered as bold text**
// _rendered as italicized text_
