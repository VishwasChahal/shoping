// Get the modal elements
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");

// Get the button that opens the modal
var loginLink = document.getElementById("login-link");
var signupLink = document.getElementById("signup-link");

// Get the <span> element that closes the modal
var closeButtons = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
loginLink.onclick = function() {
    loginModal.style.display = "block";
}

signupLink.onclick = function() {
    signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
}
