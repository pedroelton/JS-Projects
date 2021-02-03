 var oDoc, sDefTxt;

        function initDoc() {
            oDoc = document.getElementById("textBox");
            sDefTxt = oDoc.innerHTML;
            if (document.compForm.switchMode.checked) {
                setDocMode(true);
            }
        }

        function formatDoc(sCmd, sValue) {
            if (validateMode()) {
                document.execCommand(sCmd, false, sValue);
                oDoc.focus();
            }
        }

        function validateMode() {
            if (!document.compForm.switchMode.checked) {
                return true;
            }
            alert("Uncheck \"Show HTML\".");
            oDoc.focus();
            return false;
        }

        function setDocMode(bToSource) {
            var oContent;
            if (bToSource) {
                oContent = document.createTextNode(oDoc.innerHTML);
                oDoc.innerHTML = "";
                var oPre = document.createElement("pre");
                oDoc.contentEditable = false;
                oPre.id = "sourceText";
                oPre.contentEditable = true;
                oPre.appendChild(oContent);
                oDoc.appendChild(oPre);
                document.execCommand("defaultParagraphSeparator", false, "div");
            } else {
                if (document.all) {
                    oDoc.innerHTML = oDoc.innerText;
                } else {
                    oContent = document.createRange();
                    oContent.selectNodeContents(oDoc.firstChild);
                    oDoc.innerHTML = oContent.toString();
                }
                oDoc.contentEditable = true;
            }
            oDoc.focus();
        }

        function printDoc() {
            if (!validateMode()) {
                return;
            }
            var oPrntWin = window.open("", "_blank",
                "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
            oPrntWin.document.open();
            oPrntWin.document.write(
                "<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc
                .innerHTML + "<\/body><\/html>");
            oPrntWin.document.close();
        }
// Dealing with Input width
let el = document.querySelector(".input-wrap .input");
let widthMachine = document.querySelector(".input-wrap .width-machine");
el.addEventListener("keyup", () => {
  widthMachine.innerHTML = el.value;
});

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let textarea = document.querySelector(".resize-ta");
textarea.addEventListener("keyup", () => {
  textarea.style.height = calcHeight(textarea.value) + "px";
});
/*
let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++){
    friendsAtYourParty++;
}

console.log(friendsAtYourParty);
*/


/* 
let character = 'a';
const timesToRepeat = 50;
let answer = '';

for (let i = 0; i <= timesToRepeat; i++) {
    answer += character;
}

console.log(answer);
*/

// FUNCTIONS

/* 
 
function addTwo(number) {
    return number + 2;
}
 
const finalAnswer = addTwo(5);
console.log(finalAnswer);
console.log(addTwo(100));

*/






// starts with function to declare it's a functions
// than name of the function, try to be descriptive name
// add parenteces at the end to tell you are calling a function,
// if you dont put you are redeclaring the function.

/*
const myHomeCity = "Fortaleza";
const myHomeState = "Ceará";
const myHomeCountry = "Brasil";

function logOutYourHome(city, state, country) {
    console.log(`Your are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
logOutYourHome("Fukuoka-shi", "Fukuoka-ken", "Japan");

 */


//  SCOPES

 /*

 

 

const otherThing = 'something';

function addFive(number) {
     console.log(otherThing)
    const someVariable = "You can't see me outside this function";
    return number + 5;
}
 
addFive(10);
// console.log(someVariable); <--out of addFive scope



const person = {
    name: "Pedro Elton",
    livesIn: "Fukuoka",
    isFrom: "Brazil",
    favouritFood: "Pizza & Oniguiri",
    wantsToKissAsamiRightNow: true,
    numberOfKissesWanted: "100 or more"

};
console.log(person);
console.log(person.livesIn);
console.log(person.isFrom);
console.log(person.favouritFood);
console.log(person.wantsToKissAsamiRightNow);
console.log(person.numberOfKissesWanted);




const dog = {
    name: "dog",
    speak() {
        console.log("woof woof");
    }
};
dog.speak();

*/


// Arrays are an ordered list of something

/*




const cities = [
    "Fortaleza",
    "Fukuoka",
    "São Paulo",
    "Rio de Janeiro",
    "Tokyo",
    "Vancouver"
];

// Method 1

for (let i = 0; i < cities.length; i++) {
    
    const city = cities[i]
    console.log(city.toUpperCase());
    
}

// Method 2
let numberOfTimesRan = 0;
cities.forEach(function (city, index) {
    numberOfTimesRan++;
    console.log(index, city.toLowerCase());
});
console.log(numberOfTimesRan)

*/