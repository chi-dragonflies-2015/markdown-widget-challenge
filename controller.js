$(document).ready(function() {
    $("#input").on("keyup", generate_markdown);    
});

function generate_markdown() {

    // GETS TEXT
    var text = MarkdownProcessor.getText();

    // PARSE TEXT
    var converted = MarkdownProcessor.markdownToHTML(text);

    // PLACE TEXT
    MarkdownProcessor.placeText(converted);

};
