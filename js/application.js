$(document).ready(function(){
  new MarkdownWidget().initialize();
});

var widget = {
  input: function(){ return $('textarea') },
  output: function(){ return $('#input') }
}

function MarkdownWidget(){}

MarkdownWidget.prototype.parseInput = function(){
  var originalText = widget.input().val();
  var newText = markdown.toHTML( originalText );
  widget.output().html('<pre>' + newText + '</pre>');
}

MarkdownWidget.prototype.initialize = function(){
  widget.input().on("keypress", this.parseInput);
}


