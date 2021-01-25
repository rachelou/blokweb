document.querySelector("button").addEventListener("click", menutoggle);

function menutoggle() {
  var hetmenu = document.querySelector("body > header nav");
  var noscroll = document.querySelector("body");
  hetmenu.classList.toggle("menu-open");
  noscroll.classList.toggle("noscroll");
}

document.querySelector("body.detailpagina section:nth-of-type(3) li:nth-of-type(1)").addEventListener("click", imagechange1);

function imagechange1() {
var image = document.getElementById('productpic');
image.src = "./images/iphone-12-detailpagina-graphite.jpg";
}

document.querySelector("body.detailpagina section:nth-of-type(3) li:nth-of-type(2)").addEventListener("click", imagechange2);

function imagechange2() {
var image = document.getElementById('productpic');
image.src = "./images/iphone-12-detailpagina-silver.png";
}

document.querySelector("body.detailpagina section:nth-of-type(3) li:nth-of-type(3)").addEventListener("click", imagechange3);

function imagechange3() {
var image = document.getElementById('productpic');
image.src = "./images/iphone-12-detailpagina-gold.png";
}

document.querySelector("body.detailpagina section:nth-of-type(3) li:nth-of-type(4)").addEventListener("click", imagechange4);

function imagechange4() {
var image = document.getElementById('productpic');
image.src = "./images/iphone-12-detailpagina-blue.png";
}







  // Dit is niet mijn code helaas :(

var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;


    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();
