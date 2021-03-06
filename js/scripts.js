// Business Logic
function firstLastToCap(string) {
  return (string.charAt(0) + string.charAt(string.length-1)).toUpperCase();
}
function reverse(string) {
  return firstLastToCap(string).split('').reverse().join('');
}
function concatReverse(string) {
  return string.concat(reverse(string));
}
function concatMiddleChar(string) {
  return string.charAt(Math.round((string.length/2)-1)).concat(concatReverse(string));
}
function totalReverse(string) {
  return concatMiddleChar(string).split('').reverse().join('');
}

// UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var userSentence = $("#userSentence").val();
    $("#output").text(userSentence);
    event.preventDefault();
      $("button#firstLastToCap").click(function() {
        $("#output").text(firstLastToCap(userSentence));
      });
      $("button#concatReverse").click(function() {
        $("#output").text(concatReverse(userSentence));
      });
      $("button#concatMiddleChar").click(function() {
        $("#output").text(concatMiddleChar(userSentence));
      });
      $("button#totalReverse").click(function() {
        $("#output").text(totalReverse(userSentence));
      });
  });
});