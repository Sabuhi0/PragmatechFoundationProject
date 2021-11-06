let swapCase = function(letters) {
    let newLetters = "";
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
        } else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}

let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

let swappedText = swapCase(text);