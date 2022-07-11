const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNavWindow = document.querySelector('.mobile-nav-window');

mobileNavButton.addEventListener('click', function(){
  mobileNavIcon.classList.toggle('active');
  mobileNavWindow.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
