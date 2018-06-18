
// initiate the game at start...do I need this?  I see times when 
//people use it and others dont. Since I usually cant complete my work
//I havent been able to test it.
// $(document).ready( function () {
// });


//establishing my variables
var topicsArray = ["cat", "dog", "horse", "duck", "pigeon", "sloth"];
var searchTerm = "cat";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=4yRpEILyq50dh9npI0IKoifeIPUZKgdT&limit=10";

//going to api to 'get' gif and gif info

//creating function to get gif data and create them
var createGif = function () {
  //clears HTML element so its empty to work with
  $("#image-add").empty();
//call to API to get data
  $.ajax({
    url: queryURL,
    method: 'GET',
    //then after data is retreived do this
  }).then(function (response) {               // where did i get response (naming what the "results are") from and what does it represent??
    //for loop to make a gif 10 times
    for (i = 0; i < 10; i++) {
      console.log("worked")
      var results = response.data;            //data is coming from the api info, right?
      //get url for image
      var imgURL = results[i].images.downsized.url;  
      console.log(results);
      //make a div to hold image
      var animalDiv = $('<div>').addClass("newAnimal float");
      //make paragraph for rating
      var animalRate = $('<p>').text('Rating: ' + results[i].rating);   //is this JSON at work?

      console.log(results[i].rating)
      //put rating in div
      animalDiv.append(animalRate);
      //make image tag and fill it with the right image
      var image = $('<img>').attr('src', imgURL);    //cld i also have just made the imgURL var and included the jquery details somehow?
      //put image in div                              //and cld these have also been global and been ok?  Basically creates any
      animalDiv.append(image);                          //HTML tag, right?
      //put whole div onto page
      $("#image-add").append(animalDiv);

    }

  });
}
//call function to actually make it run
createGif();                                              


//onclick button to initiate a new animal into array        //does the order on the submit-animal impact where its placed?
$('#submit-animal').on('click', function (event) {          //do i even have to have anything in here?  Same with the one above
                                                                //named "response"?
  event.preventDefault();

  topicsArray.push($('#animalInput').val().trim());


  renderButtons();                                      //how does "renderButtons" know what to do if the function is below?


});
//create buttons
function renderButtons() {

  $('#buttons-div').empty();
  //for loop to make a button for how many animals we have
  for (i = 0; i < topicsArray.length; i++) {
    //create initial button
    var button = $('<button>');
    //give button an id
    button.attr('id', topicsArray[i]);             //am i assinging it an id here? ...if so, whats the name of it?
    //give button a value to use later
    button.attr("value", topicsArray[i]);           ///same here...whats the value? or is it the item in the topicsArray?...it is!!!!
    //give the button text
    button.text(topicsArray[i]);
    //put button on page
    $('#buttons-div').append(button);

  }

};

renderButtons();

//on click for dynamically created buttons
$("body").on("click", "button", function () {               ///why did we need this again and why here and not above?
  searchTerm = $(this).val();
  console.log(searchTerm);

  // createGif();
})

//////////////////////////////////////////////////////////////
//animating and pausing gifs
$(".gif").on("click", function () {
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

