document.getElementById('serviceForm').addEventListener('submit', function(event) {
    const mobileInput = document.getElementById('mobile');
    const mobileError = document.getElementById('mobileError');

    if (mobileInput.value.length !== 10 || isNaN(mobileInput.value)) {
        mobileError.textContent = 'Please enter a valid 10-digit mobile number.';
        mobileError.style.display = 'block';
        event.preventDefault(); 
    } else {
        mobileError.style.display = 'none';
    }
});
