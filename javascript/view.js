
  var view = {

    getInputText: function() {
      return document.getElementById("type_here").value;
    },

    presentPreview: function(newPreviewText) {
      document.getElementById("preview_here").innerHTML = newPreviewText;
    }

  };


