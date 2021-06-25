const load = document.querySelector(".load");
const car = document.querySelector("#car");
const city = document.querySelector(".city");
const plane = document.querySelector(".plane");
const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("#button");
const audio = new Audio('./assets/walking-crowd-at-subway-station.wav');

const loadTime = setTimeout(()=>{
  load.style.visibility = "hidden";
  audio.play();
  audio.loop = true;
}, 3000);

let prevData = 0;

window.addEventListener('scroll', function() {
  let scrollpx = window.scrollY;
  let totalH = $(document).height();
  let windowH = $(window).height();
  let totalV = $(document).width();
  let windowV = $(window).width();
  let value;

  totalV = totalV - 60;
  value = scrollpx * totalV;
  value = value / (totalH - windowH);
  if(prevData > value) {
    car.style.transform = "scaleX(1.5) rotateY(0deg)";
  } else {
    car.style.transform = "scaleX(1.5) rotateY(180deg)";
  }
  prevData = value;
  car.style.left = value + 'px';

  totalH = $(document).height();
  windowH = $(window).height();
  totalV = $(document).width();
  windowV = $(window).width();
  if (windowV <= 900) {
      city.style.position = "fixed";
      city.style.height = "calc(35%)";
      car.style.position = "fixed";
      car.style.top = "calc(35% - 30px)";
      plane.style.position = "fixed";
  } else {
    if (scrollpx > 120) {
      city.style.position = "fixed";
      city.style.height = "calc(50% - 100px)";
      car.style.position = "fixed";
      car.style.top = "calc(50% - 130px)";
      plane.style.position = "fixed";
    } else {
      city.style.position = "absolute";
      city.style.height = "50%";
      car.style.position = "absolute";
      car.style.top = "calc(50% - 30px)";
      plane.style.position = "absolute";
    }
  }

})
