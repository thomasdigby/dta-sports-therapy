
$('html').removeClass('no_js');
$('html').addClass('js');

var Main = {
	run: function () {
		Carousel.init();
		Expander.init();
		Utils.smoothScroll();
	}
};

var Carousel = {

	init: function() {
		this.launch();
	},

	launch: function() {
		$('.flexslider').flexslider({
			animation: "fade",
			animationLoop: true,
			slideshow: true,
			pauseOnHover: true,
			selector: ".slides > li"
		});
	}

};

var Expander = {

	expanderWrapper: '.exp',
	expanderLink: '.exp_link',
	expanderBody: '.exp_body',

	init: function() {
		this.setUp();
		this.bindClick();
	},
	setUp: function() {
		$(Expander.expanderWrapper).each(function() {
			if ($(this).parents('header').length) {
				$(this).find(Expander.expanderBody).height(100);
			} else {
				$(this).find(Expander.expanderBody).height($(this).find(Expander.expanderBody).outerHeight() + 18);
			}
			$(this).find(Expander.expanderBody).hide();
		});
	},
	bindClick: function() {
		$(Expander.expanderLink).on('click', function(e) {
			if ($(this).hasClass('open')) {
				$(this).parents(Expander.expanderWrapper).find(Expander.expanderBody).slideUp(200, 'easeInOutQuad');
				$(this).removeClass('open');
				$(this).html('Read more');
			} else {
				$(this).parents(Expander.expanderWrapper).find(Expander.expanderBody).slideDown(200, 'easeInOutQuad');
				$(this).addClass('open');
				$(this).html('Read less');
			}
			e.preventDefault();
		});
	}

};

var Utils = {

	smoothScroll: function() {

		$('.link-anchor').on('click', function (e) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20
			}, 800, 'easeInOutQuad');
			e.preventDefault();
		});

		if (window.location.hash) {
			var urlHash = window.location.href.split("#")[1];
			$('html, body').stop().animate({
				scrollTop: $('#' + urlHash).offset().top - 30
			}, 150);
		}

	}

}

$(document).ready(Main.run());

jQuery.extend(jQuery.easing, {
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	}
});