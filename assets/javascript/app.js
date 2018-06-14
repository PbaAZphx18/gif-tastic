
// initiate the game at start...do I need this?  I see times when 
//people use it and others dont. Since I usually cant complete my work
//I havent been able to test it.
// $(document).ready( function () {
// });


//establishing my variables
var topicsArray = [cat, dog, horse, duck, pigeon, sloth];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicsArray + "&api_key=4yRpEILyq50dh9npI0IKoifeIPUZKgdT&limit=10";


//going to api to 'get' gif and gif info
$.ajax({
url: queryURL,
method: 'GET',
}).done /*then*/ (function (response) {

var results = response.data;
var animalDiv = $('<div class="newAnimal">');
var animalRate = $('<p>').text('Rating: '+ rating);
animalDiv.append(animalRate);
var image = $('<img>').attr('src',imgURL);

});



//onclick button to initiate a new animal into array
$('#newAnimal').on('click', function(event){
  
  event.preventDefault();

  var animalButton = $('#...').val().trim();

  // topicsArray.push()
  // renderButtons();


});


//click newly created button to display 10 new gifs for that button...each new button
$('#newAnimal').on('click', function() {
  var x = $(this).data('search');
});


function renderButtons() {

$('#imageAdd').empty();

for (i=0; 1<topicsArray.length; i++) {

  var image = $('<button>');
  image.addClass('gif');
  image.attr('data-name', topicsArray[i]);
  image.text(topicsArray[i]);
  $('<imageAdd>').append(image);
  $('#animalInput').val();

}

};


//animating and pausing gifs
$(".gif").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

//.........better option for submit???.......
// document.getElementById('animalForm').addEventListener('submit', submitForm);
// function submitForm(e) {
//   e.reventDefault();
// }

