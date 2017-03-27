$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var userWords = $("#userSentence").val().split(" ");
      var newArray = userWords;
      console.log(userWords);
  event.preventDefault();
  });
});
