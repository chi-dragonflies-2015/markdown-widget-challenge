$(document).ready(function(){
  new MarkdownWidget().initialize();
});

var MarkdownView = {
  outputArea: function() { return $("#output") },
  inputArea: function() { return $("#input") }
};


function MarkdownWidget() {
}

MarkdownWidget.prototype.parseInput = function(event) {
  console.log(event.keyCode);
  text = MarkdownView.inputArea().val();
  MarkdownView.outputArea().html("<pre>" + markdown.toHTML(text) + "</pre>");
}

MarkdownWidget.prototype.initialize = function(source, destination){
  MarkdownView.inputArea().on("keyup", this.parseInput)
};