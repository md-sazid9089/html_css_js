import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoanimation() {
    
var videoContainer = document.querySelector("#video-container");
var playBtn = document.querySelector("#play");
videoContainer.addEventListener("mouseenter",
function () {
gsap.to(playBtn,{
    scale:1,
    opacity:1,
})})
videoContainer.addEventListener("mouseleave",
function () {
gsap.to(playBtn,{
    scale:0,
    opacity:0
})})
videoContainer.addEventListener("mousemove",function(dets){
    gsap.to(playBtn,{
        left:dets.x-15,
        top:dets.y-30
})}
)
}
videoanimation();
function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadinganimation();