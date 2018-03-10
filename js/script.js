/*
 * Open the idnav when the menu icon is clicked.
 */
var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var idnav = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
  idnav.classList.toggle('open');
  e.stopPropagation();
});
main.addEventListener('click', function() {
  idnav.classList.remove('open');
});
