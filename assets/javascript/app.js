
// initiate the game at start...do I need this?  I see times when 
//people use it and others dont. Since I usually cant complete my work
//I havent been able to test it.
// $(document).ready( function () {


// });


//establishing my variables
var emptyDiv = 0;
var topicsArray = [cat, dog, horse, duck, pigeon, sloth];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=funny+cat" + topicsArray + "&api_key=4yRpEILyq50dh9npI0IKoifeIPUZKgdT&limit=10";



$.ajax({
url: queryURL,
method: 'GET',
}).done (function (response) {

});



//onclick button to initiate a new animal into array
$('#newAnimal').on('click', function(e){
  console.log("you clicked me");
  
  e.preventDefault();

  var animalButton = $('#...').va().trim();

  topicsArray.push(newAnimal)


});


//click newly created button to display 10 new gifs for that button...each new button
$('#animalBtn').on('click', function() {
  var x = $(this).date('search');
  console.log(x);
});


function newButtons (){

$('#imageAdd').empty();

for (i=0; 1<topicsArray.length; i++) {

}

};

//.........better option for submit???.......
document.getElementById('animalForm').addEventListener('submit', submitForm);
function submitForm(e) {
  e.reventDefault();
}

