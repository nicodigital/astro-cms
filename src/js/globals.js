/* Scroll Data Markers */
function setScrollPosition() {
  const body = document.querySelector('body');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;

  if (scrollPosition < 100) {
    body.setAttribute('data-scroll', 'top');
  } else if (scrollPosition + windowHeight === bodyHeight) {
    body.setAttribute('data-scroll', 'bottom');
  } else {
    body.setAttribute('data-scroll', 'down');
  }
}

window.addEventListener('scroll', setScrollPosition);

document.addEventListener('DOMContentLoaded', function () {
  setScrollPosition();
});

document.addEventListener('astro:after-swap', function () {
  setScrollPosition();
});

