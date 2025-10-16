// Get form elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const phoneError = document.getElementById('phoneError');
const successMessage = document.getElementById('successMessage');

// Email regex
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

// Real-time validation event listeners
nameInput.addEventListener('input', () => validateName());
emailInput.addEventListener('input', () => validateEmail());
passwordInput.addEventListener('input', () => validatePassword());
phoneInput.addEventListener('input', () => validatePhone());

// Validation functions
function validateName() {
  if (nameInput.value.trim() === '') {
    setError(nameInput, nameError, 'Full name is required.');
    return false;
  }
  setSuccess(nameInput, nameError);
  return true;
}

function validateEmail() {
  if (!emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, emailError, 'Please enter a valid email address.');
    return false;
  }
  setSuccess(emailInput, emailError);
  return true;
}

function validatePassword() {
  const value = passwordInput.value.trim();
  if (value.length < 6) {
    setError(passwordInput, passwordError, 'Password must be at least 6 characters.');
    return false;
  } else if (!/[!@#$%^&*]/.test(value)) {
    setError(passwordInput, passwordError, 'Include at least one special character (!@#$%^&*).');
    return false;
  }
  setSuccess(passwordInput, passwordError);
  return true;
}

function validatePhone() {
  if (!/^\\d{10}$/.test(phoneInput.value.trim())) {
    setError(phoneInput, phoneError, 'Phone number must be 10 digits.');
    return false;
  }
  setSuccess(phoneInput, phoneError);
  return true;
}

// Helper functions for feedback
function setError(input, errorElement, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorElement.textContent = '';
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form submission

  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validPhone = validatePhone();

  if (validName && validEmail && validPassword && validPhone) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();

    // remove green borders after reset
    [nameInput, emailInput, passwordInput, phoneInput].forEach(i => i.classList.remove('valid'));
  } else {
    successMessage.textContent = '';
  }
});