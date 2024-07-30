function validatePAN() {
    const pan = document.getElementById('pan').value;
    const message = document.getElementById('message');
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (panRegex.test(pan)) {
        message.style.display = 'block';
        message.textContent = 'PAN Card Number is valid';
        message.className = 'message success';
    } else {
        message.style.display = 'block';
        message.textContent = 'PAN Card Number is invalid';
        message.className = 'message error';
    }
}