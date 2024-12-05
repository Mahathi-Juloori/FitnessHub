function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' '); // Split categories by space
        if (category === 'all' || categories.includes(category)) {
            card.style.display = 'flex'; // Show the card if it matches the selected category
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });
}


// Function to navigate to the video URL
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = card.getAttribute('data-url');
    });
});


// Function to go back to the home page
function goBack() {
    console.log("goBack function called");
    window.location.href = 'index.html';
}