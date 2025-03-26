function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => {
        if (response.ok) {
            form.reset();

            // Hotjar event
            if (typeof hj === 'function') {
                hj('event', 'Form Submitted');
            }

            window.location.href = 'success.html';
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
}

// ✅ Activatie van de knop als alle velden zijn ingevuld
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const button = form.querySelector('button[type="submit"]');
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');

    function checkFieldsFilled() {
        const allFilled = [...requiredFields].every(field => field.value.trim() !== '');
        button.disabled = !allFilled;
    }

    requiredFields.forEach(field => {
        field.addEventListener('input', checkFieldsFilled);
    });

    checkFieldsFilled(); // controle bij paginalaad
});
