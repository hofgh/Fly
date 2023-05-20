const cardButton = document.querySelector('#card-button');
const urButton = document.querySelector('#ur-button');
const uslButton = document.querySelector('#usl-button');
const confButton = document.querySelector('#conf-button');
const modal = document.querySelector('.modal');
const modalSecond = document.querySelector('.modal-second');
const modalThird = document.querySelector('.modal-third');
const modalFourth = document.querySelector('.modal-fourth');
const buttonClose = document.querySelector('.close');
const buttonCloseSecond = document.querySelector('.close-second');
const buttonCloseThird = document.querySelector('.close-third');
const buttonCloseFourth = document.querySelector('.close-fourth');

cardButton.addEventListener('click', function(event) {
  modal.classList.add('is-open');
});
urButton.addEventListener('click', function(event) {
  modalSecond.classList.add('is-open');
});
uslButton.addEventListener('click', function(event) {
  modalThird.classList.add('is-open');
});
confButton.addEventListener('click', function(event) {
  modalFourth.classList.add('is-open');
});
buttonClose.addEventListener('click', function(event) {
  modal.classList.remove('is-open');
});
buttonCloseSecond.addEventListener('click', function(event) {
  modalSecond.classList.remove('is-open');
});
buttonCloseThird.addEventListener('click', function(event) {
  modalThird.classList.remove('is-open');
});
buttonCloseFourth.addEventListener('click', function(event) {
  modalFourth.classList.remove('is-open');
});
