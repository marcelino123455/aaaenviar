document.addEventListener('DOMContentLoaded', function () {
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');

  if (!slider || !next || !prev || !dots) {
    console.error("Alguno de los elementos no fue encontrado.");
    return;
  }

  let lengthItems = items.length - 1;
  let active = 0;

  next.addEventListener('click', function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  });

  prev.addEventListener('click', function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  });

  let refreshInterval = setInterval(() => {
    next.click();
  }, 3000);

  function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
      lastActiveDot.classList.remove('active');
    }

    let currentDot = dots[active];
    if (currentDot) {
      currentDot.classList.add('active');
    }

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
      next.click();
    }, 3000);
  }

  dots.forEach((li, key) => {
    li.addEventListener('click', () => {
      active = key;
      reloadSlider();
    });
  });

  window.onresize = function (event) {
    reloadSlider();
  };
});
