'use strict';


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length>0){
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener('click', function() {
          menuArrow.parentElement.classList.toggle('_active');
        });
      }
    }
  } else {
    document.body.classList.add('_pc');
}


//menu burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
  iconMenu.addEventListener('click', function() {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


// scroll

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
console.log(menuLinks);

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    console.log(menuLink);

    //проверяет заполнен ли дата атрибут    проверяет существует ли объект на который ссылается дата атрибут 
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);

      //getBoundingClientRect - возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
      // pageYOffset cвойство окна Window , доступное только для чтения. Это то же свойство, что и scrollY и, как таковое, оно тоже возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх). 
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      

      if(iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
      
    }
  }
}





