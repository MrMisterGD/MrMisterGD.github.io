window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	if (window.scrollY > header.clientHeight) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});