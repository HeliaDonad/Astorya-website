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

             // Voeg dit Hotjar event toe voordat je redirect
             hj('event', 'Form Submitted');
             
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