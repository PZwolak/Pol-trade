var slideList = [{
    img: "img/truck (1).jpg",
   //  text: 'Twój partner w biznesie'
   },
   {
    img: "img/truck (2).jpg",
   //  text: 'Niezawodnie do celu'
   },
   {
    img: "img/truck (3).jpg",
   //  text: 'POL - TRADE to właściwy kierunek'
   }];
   
   var image = document.querySelector('img.slider');
   var h1 = document.querySelector('h1.slider');
   // var dots = [...document.querySelectorAll('.dots span')]
   // Interfejs
   var time = 10000;
   var active = 0;
   
   // Implementacje
   
   // var changeDot = () => {
   //  var activeDot = dots.findIndex(dot => dot.classList.contains('active'));
   //  dots[activeDot].classList.remove('active');
   //  dots[active].classList.add('active');
   // }
   
   var changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active].img;
   //  h1.textContent = slideList[active].text;
   //  changeDot()
   }
   var indexInterval = setInterval(changeSlide, time);
   
   // Klawisze
//    var keyChangeSlide = (e) => {
//     console.log(e.keyCode);
//     if (e.keyCode == 37 || e.keyCode == 39) {
//      clearInterval(indexInterval)
//      e.keyCode == 37 ? active-- : active++;
//      if (active === slideList.length) {
//       active = 0;
//      } else if (active < 0) {
//       active = slideList.length - 1;
//      }
//      image.src = slideList[active].img;
//      h1.textContent = slideList[active].text;
//      changeDot();
//      indexInterval = setInterval(changeSlide, time)
//     }
//    }
   
//    window.addEventListener('keydown', keyChangeSlide)
   