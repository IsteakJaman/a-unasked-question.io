// Function to generate a random position within the viewport
function getRandomPosition() {
    var maxX = window.innerWidth - document.getElementById("noButton").clientWidth;
    var maxY = window.innerHeight - document.getElementById("noButton").clientHeight;
    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;
    return { x: newX, y: newY };
}

// Function to update the position of the "no" button with a fade-in effect
function updateNoButtonPosition() {
    var newPosition = getRandomPosition();
    var noButton = document.getElementById("noButton");

    noButton.style.position = "absolute";
    noButton.style.opacity = "0"; // Initially set opacity to 0

    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(function() {
        noButton.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        noButton.style.opacity = "1";
        noButton.style.transform = "translate(" + newPosition.x + "px," + newPosition.y + "px)";
    });
}

document.getElementById("noButton").addEventListener("mouseover", updateNoButtonPosition);

function redirectToLovePage() {
    window.location.href = "second_page\\lovePage.html";
}
