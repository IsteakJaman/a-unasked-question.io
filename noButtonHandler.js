// noButtonHandler.js

// Counter to keep track of button clicks or position changes
let noButtonClicks = 0;

// Function to handle the "No" button click
function handleNoButtonClick() {
    noButtonClicks++;

    if (noButtonClicks === 8) {
        showModal("You Serious? Is that what you want?");
    } else if (noButtonClicks === 14) {
        showModal("Hahaha, I won't let you click that damn button");
    } else if(noButtonClicks === 20) {
        showModal("Ok, Fine. Carry on...\nYou never listen to me...");
    } else if(noButtonClicks === 25) {
        showModal("Valo Hoye jao Mayesha...valo hoite poisa lage na");
        noButtonClicks = 0;
    } 
    // Add more conditions as needed...

    // Reset the counter if needed
    // noButtonClicks = 0;
}

// Function to update the position of the "no" button with a fade-in effect
// Function to update the position of the "no" button with a fade-in effect
function updateNoButtonPosition() {
    // Only execute the update if the screen width is greater than or equal to 600 pixels
    if (window.innerWidth >= 600) {
        noButtonClicks++;

        if (noButtonClicks === 8) {
            showModal("You Serious? Is that what you want?");
        } else if (noButtonClicks === 14) {
            showModal("Hahaha, I won't let you click that damn button");
        } else if(noButtonClicks === 20) {
            showModal("Ok, Fine. Carry on...\nYou never listen to me...");
        } else if(noButtonClicks === 25) {
            showModal("Valo Hoye jao Mayesha...valo hoite poisa lage na");
            noButtonClicks = 0;
        } 
        // Add more conditions as needed...

        // Reset the counter if needed
        // noButtonClicks = 0;
    }
}

// Function to show the modal
function showModal(message) {
    var modalContainer = document.getElementById("modalContainer");

    // Clear any existing modals
    modalContainer.innerHTML = "";

    // Create a new modal element
    var modalDiv = document.createElement("div");
    modalDiv.id = "myModal";
    modalDiv.classList.add("modal");

    // Modal content
    modalDiv.innerHTML = `
        <div class="modal-content slide-in">
            <span class="close" onclick="closeModal()">&times;</span>
            <p id="modalMessage" class="modal-message">${message}</p>
        </div>`;

    // Append the modal to the container
    modalContainer.appendChild(modalDiv);

    // Display the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modalContainer = document.getElementById("modalContainer");

    // Clear the container to close the modal
    modalContainer.innerHTML = "";
}

// Attach the handleNoButtonClick function to the "No" button click event
document.getElementById("noButton").addEventListener("click", handleNoButtonClick);

// Attach the updateNoButtonPosition function to the mouseover event
document.getElementById("noButton").addEventListener("mouseover", updateNoButtonPosition);
