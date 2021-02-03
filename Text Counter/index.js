/*
The function below creates an character counter that displays
the numbner written out of 140, and also shows the characters
available until reach 140 characters.
*/

function countMyText(str) {
    let howManyLetters = str.length;
    let CharAvailable = 140 - str.length
            if (howManyLetters > 140) {
                var counter = document.getElementById ()
            }
    document.getElementById("counter").innerHTML = 'You have written ' + howManyLetters + ' characters out of 140. You still have ' + CharAvailable; 

};