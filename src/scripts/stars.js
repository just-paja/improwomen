var vw = window.innerWidth;
var vh = window.innerHeight;

var main = document.querySelector(".stars");
var numStars = 300;
var stars = [];
var classes = [
  'star-tiny',
  'star-small',
  'star-mid',
  'star-big'
];

// Wait for images to load
window.addEventListener("load", onLoad);

function onLoad() {
  for (var i = 0; i < numStars; i++) {
    setTimeout(createStar, i * 50);
  }
}

function createStar() {
  var classIndex = random(classes.length) | 0;
  var left = random (vw);
  var star = document.createElement('div');
  var top = random (vh);
  star.style = 'left: ' + left + 'px; top: ' + top + 'px;';
  star.className = 'star ' + classes[classIndex];
  main.appendChild(star);
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}
