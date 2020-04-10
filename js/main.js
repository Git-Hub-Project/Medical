var collapsedBtn = document.getElementsByClassName('card');
var collapsedchild = document.getElementsByClassName('card-header');
console.log('dooo' + collapsedBtn.length);
for (let i = 0; i < collapsedBtn.length; i++) {
    collapsedBtn[i].addEventListener('click', callapse);
    function callapse() {
        var buttoncolor = collapsedBtn[i].querySelector('button');
        collapsedBtn[i].firstElementChild.classList.toggle('skyBlueBg')
        buttoncolor.classList.toggle('whitecolor');
    }
}
// Wrap every letter in a span
var btnHover = document.getElementById('submit');
btnHover.addEventListener('mouseenter', function () {
    var letter = btnHover.querySelectorAll('.letter');
    anime.timeline({}).add({
        targets: letter,
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    });
});



$(document).ready(function(){
    $('.slickslider').slick({
    // autoplay:true,
    // autoplayspeed:3000,
    // centerMode: true,
    // slidesToShow: 4,
    // slidesToScroll: 1

    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: false,
	    dots: false,
	    cssEase: 'linear',
	    pauseOnHover: true,
	    responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
			}
		}]
	
    });
});
