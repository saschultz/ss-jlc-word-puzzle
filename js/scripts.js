$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userWords = $("#userSentence").val().split(" ");
    var arrayWords = userWords;

    var arr = $.map(arrayWords, function(arrayWord) {
      if (arrayWord.length >= 3) {
        return arrayWord;
      } else {
      }
    });

    arr.reverse();

    $("#output").text(arr);
  event.preventDefault();
  });
});
