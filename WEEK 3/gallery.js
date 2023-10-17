var currentSlide = 1;  //initial value of current slide is 1 as the first slide is displayed upon loading page

//updates counter value when action performed
function imgUpdateCount(direction) { 
  var slides = document.querySelectorAll(".mySlides"); // Gets all the slides from class mySlides and stores them in variable slides to get total no.of slides

  if (direction === "prev") {    //if prev clicked
    if (currentSlide > 1) {   //handles border case by not letting slide counter go below 1
      currentSlide--;   //if counter greater than 1, reduces by 1
    }
  } else if (direction === "next") {  //else if next clicked
    if (currentSlide < slides.length) {  //handles border case by not letting slide counter go above total no.of slides
      currentSlide++;  //if counter lesser than total slides, increases by 1
    }
  }
  slideShow();    //calls function with updated value of currentSlide
}

//updates the image and number when called
function slideShow() {
  var slides = document.querySelectorAll(".mySlides");   // Gets all the slides from class mySlides and stores them in variable slides to update the image

  for (var i = 0; i < slides.length; i++) {  //loops through all slides 
    slides[i].style.display = "none";     //hides all the slides from user
  }

  slides[currentSlide - 1].style.display = "block";  //makes apropriate slide visible //logic for [currentSlide - 1]: array index starts with 0, while initial currentSlide value is 1, so to display the correct slide and not the one after it, 1 is subtracted
}
