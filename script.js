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