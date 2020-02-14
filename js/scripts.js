// UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var userSentence = $("#userSentence").val();
    console.log(userSentence);
    $("#output").text(userSentence);

    event.preventDefault();
  })
})