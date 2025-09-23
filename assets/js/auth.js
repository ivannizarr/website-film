function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);
  const eyeIcon = button.querySelector('.eye-icon');
  const eyeOffIcon = button.querySelector('.eye-off-icon');

  if (input.type === 'password') {
    input.type = 'text';
    eyeIcon.style.display = 'none';
    eyeOffIcon.style.display = 'block';
  } else {
    input.type = 'password';
    eyeIcon.style.display = 'block';
    eyeOffIcon.style.display = 'none';
  }
}