//Model

function MarkdownModel() {
  this.markdownHash = {
    '**': function(word) {return "<h2>" + word + "</h2"; }, 
    '*': function(word) { return "<h1>" + word + "</h1>";},
    '_': function(word) { return "<i>" + word + "</i>"}
  };
}

MarkdownModel.prototype.convertWordToMarkdown = function(word){
  var markdownNotation = this.checkWordForMarkdownNotation(word)
  if(markdownNotation) {
    var markdownConverter = this.markdownHash["markdownNotation"]
    return markdownConverter(word)
  } else {
    return "<p>" + word + "</p>"
  }
};

MarkdownModel.prototype.checkWordForMarkdownNotation = function(word) {
  var regex = /([*]+)/g;
  var markdown = word.replace(regex,"$1")
  return markdown
}

MarkdownModel.prototype.convertTextToMarkdown = function(textarea) {
  var words = textarea.split(' ')

  for(var i = 0; i <= words.length; i++){ 
    words[i] = this.convertWordToMarkdown(words[i])
  };

  return words.join(" ")
}



//Controller

function MarkdownController(model, view) {
  this._model = model; 
  this._view = view;

  var that = this;
};

MarkdownController.prototype.getTextFromUser = function(){
  return $('#user-text textarea').val();
};

MarkdownController.prototype.placeTextInMarkDownBox = function(html){
  $('#markdown-text').val(html);
};

MarkdownController.prototype.convertToMarkdown = function() {
  var userText = this.getTextFromUser();
  var markdownText = this._model.convertTextToMarkdown(userText);
  this.placeTextInMarkDownBox(markdownText);
}

// On Load

$(function(){
  var model = new MarkdownModel()
  var controller = new MarkdownController(model,'view')

  $('#user-text textarea').on('keyup',function(event){
    controller.convertToMarkdown();
  });
});