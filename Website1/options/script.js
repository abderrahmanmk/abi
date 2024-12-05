// Function to change the background color of the body
function changeColor() {
    // List of possible colors
    const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#8A2BE2'];
    
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}
