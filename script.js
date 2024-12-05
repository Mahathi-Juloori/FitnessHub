// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
}

// Function to go back to the home page
function goBack() {
    console.log("goBack function called");
    window.location.href = 'index.html';
}

// Example form validation for contact form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Attaching form validation to the contact form's submit event
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission for demo
            if (validateForm()) {
                // You can handle form submission here (e.g., send the data via AJAX)
                console.log("Form is valid and ready to be submitted.");
            }
        });
    }
});
