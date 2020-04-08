var collapsedBtn =document.getElementsByClassName('card');
var collapsedchild =document.getElementsByClassName('card-header');


console.log('dooo'+collapsedBtn.length);
for(let i=0;i<collapsedBtn.length;i++){
    collapsedBtn[i].addEventListener('click',callapse);
    function callapse(){
        var buttoncolor =collapsedBtn[i].querySelector('button');
        collapsedBtn[i].firstElementChild.classList.toggle('skyBlueBg')
        buttoncolor.classList.toggle('whitecolor');
        

    }
    
}
// Wrap every letter in a span
var letter = document.querySelector('.ask button:hover .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: letter,
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
