function validateField(input) {
    const fieldContainer = input.parentElement;
    const errorMessage = fieldContainer.querySelector('.error-message');
    
    if (input.value.trim() === '') {
        fieldContainer.classList.add('error');
    } else {
        fieldContainer.classList.remove('error');
    }
}
