document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

    if (name && email && subject && message) {
        document.getElementById('form-status').innerText = "Message sent successfully!";
        form.reset();
    } else {
        document.getElementById('form-status').innerText = "Please fill in all fields.";
    }
    });
    }
});
