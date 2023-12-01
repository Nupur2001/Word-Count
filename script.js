document.getElementById('countButton').addEventListener('click', countWords);

function countWords() {
    // Get the input text from the textarea
    var inputText = document.getElementById('inputText').value;
    var words = inputText.match(/\S+/g);
    var wordCount = words ? words.length : 0;
    document.getElementById('wordCount').innerText = wordCount;
};