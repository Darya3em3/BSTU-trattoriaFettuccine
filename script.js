const halls = {
    menu: [
      
      './assets/jpg/меню1.jpg',
      './assets/jpg/меню2.jpg',
      './assets/jpg/меню3.jpg',
      './assets/jpg/меню4.jpg',
      './assets/jpg/меню5.jpg',
      './assets/jpg/меню6.jpg'
    ],
    hall: [
      './assets/jpg/1зал.jpg',
      './assets/jpg/2зал.jpg',
      './assets/jpg/3зал.jpg',
      './assets/jpg/4зал.jpg',
      './assets/jpg/5зал.jpg',
      './assets/jpg/6зал.jpg'
    ],
    veranda: [
      './assets/jpg/1веранда.jpg',
      './assets/jpg/2веранда.jpg',
      './assets/jpg/3веранда.jpg',
      './assets/jpg/4веранда.jpg',
      './assets/jpg/5веранда.jpg',
      './assets/jpg/6веранда.jpg'
    ],
    visitors: [
      './assets/jpg/1посет.jpg',
      './assets/jpg/2посет.jpg',
      './assets/jpg/3посет.jpg',
      './assets/jpg/4посет.jpg',
      './assets/jpg/5посет.jpg',
      './assets/jpg/6посет.jpg'
    ],
  }
  
  const imagesLeft = Array.from(document.querySelectorAll('.slider_left > li > img'));
  const imagesCenter = Array.from(document.querySelectorAll('.slider_center > li > img'));
  const imagesRight = Array.from(document.querySelectorAll('.slider_right > li > img'));
 
  let hall = 'menu';
  function redrawPhoto(arr) {
    arr.forEach((image, index) => image.src = halls[hall][index]);
}

  function changeImage (event) {
   hall = event.target.dataset.hall;
   redrawPhoto(imagesCenter);

   const buttons = document.querySelectorAll('.halls__button');
    console.log(buttons);
    buttons.forEach(button => {
      if (button.dataset.hall == hall) {
        button.classList.add('button_color');
    } else {
        button.classList.remove('button_color');
    };
  });
  };


  function buttonClick(event) {
    if (event.target.classList.contains('halls__button')) {
        changeImage(event);
    };
};
document.querySelector('.halls__buttons').addEventListener('click', buttonClick);
//slider


function shiftPhoto(arrow) {
  let w;
  if (window.innerWidth >= 1024){
    w = 6;
}
else if (window.innerWidth >= 768 && window.innerWidth <=1023) {
    w = 4;
}
else {
    w = 1;
}


if (arrow == 'left') {
  halls[hall] = halls[hall].slice(w).concat(halls[hall].slice(0, w));
} else if (arrow == 'right') {
  halls[hall] = halls[hall].slice(-w).concat(halls[hall].slice(0, -w));
}
}

  
const slider = document.querySelector('.slider');
    //const hallImages = document.querySelectorAll('.halls__img');
    Array.from(hallImages).forEach((image, index) => {image.src = halls[hall][index];
      console.log(image);
    });
    const buttonLeft = document.querySelector('.button_slider_left');
    const buttonRight = document.querySelector('.button_slider_right');
    function sliderLeft() {
      buttonLeft.removeEventListener('click', sliderRight);
      buttonRight.removeEventListener('click', sliderLeft);
      slider.classList.add('move_left');
      shiftPhoto('left');
      redrawPhoto(imagesRight);
  };

  function sliderRight() {
      buttonLeft.removeEventListener('click', sliderRight);
      buttonRight.removeEventListener('click', sliderLeft);
      slider.classList.add('move_right');
      shiftPhoto('right');
      redrawPhoto(imagesLeft);
  };

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});

  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);

    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
/*
        


    const buttons = document.querySelector('.halls__buttons').children;
    Array.from(buttons).forEach(halls__button => {
      if (halls__button.dataset.hall == hall) {
        halls__button.classList.add('button_color');
      } else {
        halls__button.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('halls__button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.halls__buttons').addEventListener('click', buttonClick);
        */ 