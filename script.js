const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const heading = document.querySelector('h1');
const gifContainer = document.querySelector('.gif-container');

// Celebration GIF URL
const celebrationGif = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWw1M2JmOHJrcnF6M2MwdjdybXltZml6Z2hnNzJ3NzcwbHJnZnk2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JE6xHkcUPtYs0/giphy.gif";

yesButton.addEventListener('click', () => {
    // Reset the "No" button position
    noButton.style.position = 'static'; // Reset to default position
    noButton.style.left = 'auto';
    noButton.style.top = 'auto';

    // Update the heading
    heading.textContent = "Yes, I will be your valentine! 💖";

    // Change the GIF to a celebration one
    gifContainer.innerHTML = `<img src="${celebrationGif}" alt="Celebration GIF">`;

    // Display the response message
    response.textContent = "You are now Albert's valentine! 🎉";
});

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});