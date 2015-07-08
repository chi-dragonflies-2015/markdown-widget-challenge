$(document).ready (function() {
  new KeyPress().initialize();
});

function KeyPress() {};

KeyPress.prototype.convertEnter = function() {
  this.content = this.content.replace(/(\r\n|\n|\r)/gm, '<br>');
};

KeyPress.prototype.convertItalics = function() {
  this.content = this.content.replace(/\*([\w\s]+)\*/gm, '<i>$1</i>')
  this.content = this.content.replace(/_([\w\s]+)_/gm, '<i>$1</i>')
};

KeyPress.prototype.convertBold = function() {
  this.content = this.content.replace(/\*\*([\w\s]+)\*\*/gm, '<b>$1</b>')
};


KeyPress.prototype.convertHTML = function() {
  this.convertBold();
  this.convertItalics();
  this.convertEnter();
};

KeyPress.prototype.replaceContent = function() {
  this.content = $('#markdown').val();
  this.convertHTML();
  $('#preview').empty().append(this.content);
};

KeyPress.prototype.initialize = function() {
  $('#markdown').on("keyup", this.replaceContent.bind(this));
};

// conditional for enter
// conditional for special markdown characters
