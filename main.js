const navbar = document.querySelector('#nav')
// Get all buttons with class="btn" inside the container
var navsLink = document.querySelectorAll(".nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navsLink.length; i++) {
    navsLink[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// add color to nav wchen scrolling down
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('active-nav')
  } else if (navbar.classList.contains('active-nav')) {
    navbar.classList.remove('active-nav')
  } else {
    navbar.classList.remove('active-nav')
  }
})
