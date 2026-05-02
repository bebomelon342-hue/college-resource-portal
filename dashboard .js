document.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcomeMessage');

  if (welcome) {
    welcome.innerText = 'Welcome to your dashboard!';
  }
});