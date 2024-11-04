// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the color box and the button
    const colorBox = document.getElementById("color-box");
    const changeColorButton = document.getElementById("change-color-btn");

    // Function to generate a random color
   
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    

    // Add event listener to the button to change color on click
    changeColorButton.addEventListener("click", function () {
        // Set a new random background color for the color box
        colorBox.style.backgroundColor = getRandomColor();
    });
});
