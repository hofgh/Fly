new WOW().init();

const cardButton = document.querySelector('#principe-info');
const modal = document.querySelector('.modal');
const buttonClose = document.querySelector('.close');

cardButton.addEventListener('click', function(event) {
  modal.classList.add('is-open');
});
buttonClose.addEventListener('click', function(event) {
  modal.classList.remove('is-open');
});


var wow = new WOW(
{
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
  );
wow.init();

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.projects-pagination',
    bulletClass:'projects-bullet',
    bulletActiveClass:'projects-bullet-active',
    clickable: true, },
  });