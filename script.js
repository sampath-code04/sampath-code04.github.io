
$(window).scroll(function(){
	if(this.scrollY>500){
		$('.scroll-up-btn').addClass("show");
	}
	else{
		$('.scroll-up-btn').removeClass("show");
	}
});

$('.scroll-up-btn').click(function(){
	$('html').animate({scrollTop:0});
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.skills,.portfolio,.service,.team',{delay:200, origin:'bottom'})
