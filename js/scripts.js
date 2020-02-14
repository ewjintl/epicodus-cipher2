// Business Logic
function firstLastToCap(string) {
  return (string.charAt(0) + string.charAt(string.length-1)).toUpperCase();
}
function reverse(string) {
  return firstLastToCap(string).split('').reverse().join();
}


// UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var userSentence = $("#userSentence").val();
    console.log(userSentence);
    $("#output").text(reverse(userSentence));

    event.preventDefault();
  })
})

//Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

//Create another function that will reverse the order of these two letters and return the result. (!)Note currently returns with a comma!

//Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.

//Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."

//Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence. For example, if "I am a sentence" is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is "s". So my final result is "sI am a sentenceEI".