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
  
  
  function changeImage (event) {
    const hall = event.target.dataset.hall;
    const hallImages = document.querySelectorAll('.halls__img');
    Array.from(hallImages).forEach((image, index) => {image.src = halls[hall][index];
      console.log(image);
    });
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
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