$(document).ready(function(){
  new MarkdownWidget().initialize();
});

// View
  var MarkdownView = {
    previewArea: function(){
      return $(".output")
    },
    inputArea: function(){
      return $("#input")
    }
  };

//Controller
  function MarkdownWidget(){};

  MarkdownWidget.prototype.interpretInput = function(event){
    var text = MarkdownView.inputArea().val();
    var tag = new String();

    // if (text.match(/\**\*/)){
    //   var str1 = text.replace(/\*/, "<i>")
    //   var str2 = str1.replace(/\*/, "</i>")
    //   return str2
    // }
    var interPret = function(text){
      for (var i = 0; i <= text.length; i++){
          console.log("1");
         var one = text.replace(/(\A)[\*]/g, "a")
         var two = one.replace(/l/g, "b")
         var transformed = two.replace(/k/g, "c")
        // if (text.match(/(\A*)(\D)/)
        //   text.replace(/(\*)/, "<i>")

        // else if (text.match(/\D*[*\z]/)
        //   text.replace(/\*/, "</i>")

      }
      return transformed
    };


     // if(text.search(/\*/) != -1 ){
      // tag = "<strong>";
    // }
     // else if(text.search(/\_/) != -1 ){
      // tag = "<i>";
    // }
    // var html = tag + text

    //Track text from text area
    //Interpret
      //Determine when a *,**,_ is open and close
      //Convert the text within those to either bold or italics html tags
    //Place html in preveiw
    MarkdownView.previewArea().html(interPret(text));

  };

  MarkdownWidget.prototype.initialize = function(){
      MarkdownView.inputArea().on("keypress", this.interpretInput)
  };

