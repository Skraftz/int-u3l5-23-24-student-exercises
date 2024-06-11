// html elements
let example1 = document.querySelector(".example-1");
let pink = document.querySelector(".pink");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let lightGreen = document.querySelector(".light-green");
let row1 = document.querySelector(".row-1");

// CHALLENGE #1 - make the rows match

// 1. Set the styling of `example1` to a background color of black.
example1.style.backgroundColor = "black";
// 2. Set the styling of `pink` to a background color of pink.
pink.style.backgroundColor = "pink";
// 3. Set the styling of `green` to a background color of green.
green.style.backgroundColor = "green";
// 4. Set the styling of `blue` to a background color of blue.
blue.style.backgroundColor = "blue";
// 5. Set the styling of `lightGreen` to a background color of lightGreen.
lightGreen.style.backgroundColor = "lightGreen";
// 6. Set the styling of `row1` to have a font color of white.
row1.style.color = "white";


// CHALLENGE #2 - style the image

let image = document.querySelector(".image");
let button = document.querySelector('.image-button');
image.style.width = "70%";
    // Get the button element

button.addEventListener('click', function() {
// Create a file input element
    let inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    // Add event listener for when a file is selected
    inputElement.addEventListener('change', function() {
        let selectedFile = this.files[0]; // Get the selected file

        // Check if the selected file is an image
        if (!selectedFile || !selectedFile.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }
        // Create a FileReader to read the selected file
        let reader = new FileReader();
        // Handle the file reading operation
        reader.onload = function(event) {
            // Return the image data URL
            let imageDataUrl = event.target.result;
            //Stuff I added :3
            image.src = imageDataUrl;
            image.style.width = "300px";
            image.style.border = "solid #42068c 5px";
            //That's it
        };
        // Read the selected file as a data URL
        reader.readAsDataURL(selectedFile);
    });
    // Trigger a click on the file input element
    inputElement.click();
});


// 7. Add an event listener to `imageButton`
// - The event type should be "click" or "dblclick"

// Include the next tasks in the body of the function.

// 8. The image is wayyyy too big and needs a border.
// - Set the width of `image` to 300px
// - Set the border of `image` so that it's:
//   - solid
//   - hex color #42068c
//   - 5 pixels
