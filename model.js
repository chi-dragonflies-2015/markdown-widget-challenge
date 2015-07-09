var MarkdownProcessor = {
    getText:    function() {
        return $("#input").val()
    }, // --> has to be a function: gives 'undefined' otherwise...

    markdownToHTML: function(text) {

        //FORMATTING "CASCADE"
        //var uList = text.replace(/\*\s/gm, '<ul></ul>');
        var newLine = text.replace(/\n/gm, '<br>');
        var italics = newLine.replace(/\_([\w\s]+)\_/gm, '<em>$1</em>');
        var bold = italics.replace(/\*\*([\w\s]+)\*\*/gm, '<strong>$1</strong>');
        var h3 = bold.replace(/\#{3}([^\s]+)/gm, '<h3>$1</h3>');
        var h2 = h3.replace(/\#{2}([^\s]+)/gm, '<h2>$1</h2>');
        var h1 = h2.replace(/\#([^\s]+)/gm, '<h1>$1</h1>');
        var rendered = h1;

        return rendered
    },

    placeText:  function(text) {
        return $("#display").html(text)
    }
};
