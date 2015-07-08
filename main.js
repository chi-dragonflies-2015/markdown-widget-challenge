$(document).ready(function() {
  new Markdowner().initialize();
});


var View = {
  inputArea: function() { return $("textarea") },
  previewArea: function () { return $("#preview") }
}


var Markdowner = function(){};

Markdowner.prototype.initialize = function(){
  View.inputArea().on("keyup", this.parseInput)
}

Markdowner.prototype.parseInput = function(){
  var text = View.inputArea().val();
  if (text.match(/\*\*\S*\*\*/gi) != null) {
    var styled_words = text.match(/\*\*\S*\*\*/gi);
    for (i=0; i < styled_words.length; i++){
      var word = styled_words[i].replace(/\*\*/, "");
          word = word.replace(/\*\*/, "");
      text = text.replace(styled_words[i], "<strong>" + word + "</strong>");
      text = text.replace("\n", "<br>")
      View.previewArea().html(text);
    }
  }

 if (text.match(/\*{1}\w+\*/gi) != null){
    console.log("here")
    var styled_words = text.match(/\*{1}\w+\*/gi);
    for (i=0; i < styled_words.length; i++){
      var word = styled_words[i].replace(/\*/, "");
          word = word.replace(/\*/, "");
      text = text.replace(styled_words[i], "<em>" + word + "</em>");
      text = text.replace("\n", "<br>")
      View.previewArea().html(text);
    }
  }
  text = text.replace("\n", "<br>")
  View.previewArea().html(text);

}





// myString.replace('username1','');
// var res = str.substring(1, 4)
//  ["ohmygah", index: 19, input: "      Standardized ohmygah"]
// # h1 Heading
//  **rendered as bold text**
// _rendered as italicized text_
