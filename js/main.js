/**
 * Try to manipulate the page
 * 
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 * 
 * 
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 * 
 * 
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */ 

 document.querySelector(".rover-cta").addEventListener("click", function(){
    document.querySelector(".rover-cta").style.backgroundColor = "red"; 
    document.querySelector(".rover-cta").innerText = "Thanks!";
})

document.querySelector(".rover-hero-title").addEventListener("click", function(){
  document.querySelector(".rover-hero-title").innerText = "We're the Cat People";
})

var modal = document.getElementById("myMenu");
var modal2 = document.getElementById("mySignUp");
var btn = document.querySelector(".rover-header-right-mobile");
var btn2 = document.querySelector("#active-sign-up");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



