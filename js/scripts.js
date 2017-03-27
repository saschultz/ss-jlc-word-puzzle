$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var userWords = $("#userSentence").val().split(" ");
      var arrayWords = userWords;
      arrayWords.map(function(arrayWord) {

      if (arrayWord.length >= 3) {
      console.log(arrayWord);
      }
  event.preventDefault();
  });
  });
});
