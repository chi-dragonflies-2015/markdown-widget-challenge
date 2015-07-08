//Model

function MarkdownModel() {
  this.markdownHash = {
    '###': function(word) {return "<h3>" + word.replace(/###/g,"") + "</h3"; }, 
    '##': function(word) {return "<h2>" + word.replace(/##/g,"") + "</h2"; }, 
    '#': function(word) { return "<h1>" + word.replace(/#/g,"") + "</h1>";},
    '_': function(word) { return "<i>" + word.replace(/_/g,"") + "</i>"},
    '**': function(word) { return "<strong>" + word.replace(/\*\*/g,"") + "</strong>"}

  };
}

MarkdownModel.prototype.convertWordToMarkdown = function(word){
  var markdownNotation = this.checkWordForMarkdownNotation(word)
  if(markdownNotation) {
    var markdownConverter = this.markdownHash[markdownNotation[0]]
    return markdownConverter(word)
  } else {
    return word
  }
};

MarkdownModel.prototype.checkWordForMarkdownNotation = function(word) {
  var regex = /([#*_]+)/g;
  var markdown = word.match(regex);
  return markdown
}

MarkdownModel.prototype.convertTextToMarkdown = function(textarea) {
  var words = textarea.trim().split(' ')

  for(var i = 0; i <= words.length - 1; i++){ 
    words[i] = this.convertWordToMarkdown(words[i])
  };

  return words.join(" ")
}



//Controller

function MarkdownController(model) {
  this._model = model; 

  var that = this;
};

MarkdownController.prototype.getTextFromUser = function(){
  return $('#user-text textarea').val();
};

MarkdownController.prototype.placeTextInMarkDownBox = function(html){
  MarkdownView.previewArea().html(html);
};

MarkdownController.prototype.convertToMarkdown = function() {
  var userText = this.getTextFromUser();
  var markdownText = this._model.convertTextToMarkdown(userText);
  this.placeTextInMarkDownBox(markdownText);
}

// View
var MarkdownView = {
  inputArea: function() { return $('#user-text textarea'); },
  previewArea: function() { return $('#markdown-text') }
}

// On Load

$(function(){
  var model = new MarkdownModel()
  var controller = new MarkdownController(model,'view')

  MarkdownView.inputArea().on('keyup',function(event){
    controller.convertToMarkdown();
  });
});