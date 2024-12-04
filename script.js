// FEEDBACK
function handleFeedbackClick() {
var feedback = confirm("Are you satisfied?");
Feedback(feedback);
}
        function Feedback (feedback) {
        if (feedback == true) {
            alert("Thank you!");
        } else {
            alert ("Thanks for visiting!");
        }
        }

// SLIDER SCRIPT
// Array of image sources
var images = [
    "sunscreen1.jpg",
    "sunscreen.jpg",
    "sunscreen2.jpg",
    "sunscreen3.jpg",
    "sunscreen4.jpg",
];

// Variable to track the current index
var num = 0;

// Function to update the large image and highlight the corresponding button
function updateSlider(index) {
    var slider = document.getElementById("slider");

    // Update the large image
    slider.src = images[index];

    // Update the highlighted button
    var buttons = document.querySelectorAll(".numbering button");
    buttons.forEach((btn, i) => {
        if (i === index + 1) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// Function to show a specific image
function showImage(index) {
    if (index >= 0 && index < images.length) {
        num = index; // Update the current index
        updateSlider(index);
    }
}

// Function to go to the next image
function next() {
    num++;
    if (num >= images.length) {
        num = 0; // Loop back to the first image
    }
    updateSlider(num);
}

// Function to go to the previous image
function prev() {
    num--;
    if (num < 0) {
        num = images.length - 1; // Loop to the last image
    }
    updateSlider(num);
}
