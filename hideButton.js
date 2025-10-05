// hidebutton.js

// Function to show buttons with a fade-in effect
function showButtons() {
    const buttonsContainer = document.querySelector(".buttons"); // select by class
    buttonsContainer.style.display = "flex"; // show the buttons

    // Adjust layout for mobile
    if (window.innerWidth < 600) {
        buttonsContainer.style.flexDirection = "column";
    } else {
        buttonsContainer.style.flexDirection = "row";
    }

    buttonsContainer.classList.add("fadeIn"); // fade-in animation
}


// Set a timeout to call the showButtons function after 10 seconds (10000 milliseconds)
setTimeout(showButtons, 20000);
