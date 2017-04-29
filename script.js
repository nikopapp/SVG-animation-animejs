console.log("dike mou");
const body = document.getElementById('top');
let movingDivs = document.getElementsByTagName('path');
const colors = [
  "#f0caa8",
  "#d6ac8d",
  "#e9b190"
]
let x = 0;
let sine = Math.sin(x);
let cos = Math.cos(x);
var playPause;
function init(){
  playPause = anime({
    targets: movingDivs,
    loop: true,
    // style: "fill:"+ colors[Math.floor(Math.random()*(colors.length-1))],
    // translateX: [0,5500],
    // translateY: [0,400],
    translateX: [0,5,10,15,20,15,10,5,0],
    translateY: [0,-10,-20,-10,0,10,20,10,0],
    scaleX:[1,0.99,1],
    scaleY:[1,0.99,1],
    delay: function(el, i) {
      return anime.random(0,2500);
      // return i/100;
    },
    // fill: function(el,i){
    //   return colors[i%3];
    // },
    //update: moveSine,
    // elasticity: 1000,
    // loop: true,
    ease: 'linear',
    duration: 300
  });
}
init();

function moveSine(ani, otro,item){
console.log(item);
if(item){
  x++;
  sine = Math.floor(Math.sin(x)*10);
  cos = Math.floor(Math.cos(x)*10);
item.style.transform = "translate2d("+sine+","+cos+")";
}
}
function stop(){
playPause.pause();
}
function play(){
playPause.play();
}

function changeColor(item){
  console.log('el');
  // console.log("ela",item.animatables);
  // console.log(movingDivs[1]);
    movingDivs[Math.floor(Math.random()*1000)].style.fill = colors[(Math.floor(Math.random()*6))];
}
