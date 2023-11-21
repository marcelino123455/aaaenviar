import React, { useEffect } from 'react';
import './scripts.js';

const data = [
  {
    image: process.env.PUBLIC_URL + "/imagenes/inicio1.png",
  },
  {
    image: process.env.PUBLIC_URL + "/imagenes/inicio2.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/imagenes/inicio3.jpg",
  },
  {
    image: process.env.PUBLIC_URL + "/imagenes/inicio4.jpg",
  },
];

function Slider() {
  useEffect(() => {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    }

    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    }

    let refreshInterval = setInterval(() => { next.click() }, 3000);

    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';

      let last_active_dot = document.querySelector('.slider .dots li.active');
      last_active_dot.classList.remove('active');
      dots[active].classList.add('active');

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => { next.click() }, 3000);
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

    return () => {
      // Cleanup logic if needed
      clearInterval(refreshInterval);
    };
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div className="slider">
      <div className="list">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img className="img-item" src={item.image} alt={item.caption} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev">{'<'}</button>
        <button id="next">{'>'}</button>
      </div>
      <ul className="dots">
        {data.map((_, index) => (
          <li key={index} className={index === 0 ? 'active' : ''}></li>
        ))}
      </ul>
      <div className="image-overlay">
        <h1>NUESTROS MEJORES ANIMES</h1>
        <p>Disfrútalos ahora!!!</p>
        <button className="hover-button">Leer</button>
      </div>
    </div>
  );
}

export default Slider;
