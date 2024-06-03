document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formResponse = document.getElementById('form-response');

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            formResponse.style.display = 'block';
            formResponse.textContent = 'Thanks for contacting us!';
            form.reset();
        } else {
            formResponse.textContent = 'Oops! There was a problem submitting your form';
            formResponse.style.display = 'block';
        }
    }).catch(error => {
        formResponse.textContent = 'Oops! There was a problem submitting your form';
        formResponse.style.display = 'block';
    });
});