// Change the background color to a random color
function changeBackground() {
    const colors = ["#ff00ff", "#00ffff", "#ffff00", "#111111", "#444444", "#ff5500", "#00ff88"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Fetch a random brainrot meme and display it
async function fetchRandomMeme() {
    try {
        const response = await fetch('https://api.memegen.link/images/random/brainrot.png?watermark=School+Brainrot');
        const imageUrl = response.url;
        const memeContainer = document.getElementById('memeContainer');
        memeContainer.innerHTML = `<img src="${imageUrl}" alt="Random Brainrot Meme">`;
    } catch (error) {
        console.error('Error fetching meme:', error);
    }
}

// Call the function to fetch and display a random meme when the page loads
document.addEventListener('DOMContentLoaded', fetchRandomMeme);
