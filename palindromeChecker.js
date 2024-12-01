console.log("testing, attention, please.;")

//prompts user for input
let answer = prompt("What is the word?");
//puts string answer into array
let inputAnswer = answer.split("");
console.log(inputAnswer);
//reverses array
let reverseArray = inputAnswer.toReversed();
console.log(reverseArray);
//puts array back into string
let reverseAnswer = reverseArray.join("");
console.log(reverseAnswer);
