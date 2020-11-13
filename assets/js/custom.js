(function ($) {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function () {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function () {

		// NAV22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function (e) {

			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})


		/* ---------------------------------------------- /*
		 * Skills
		/* ---------------------------------------------- */
		//var color = $('#home').css('backgroundColor');

		$('.skills').waypoint(function () {
			$('.chart').each(function () {
				$(this).easyPieChart({
					size: 140,
					animate: 2000,
					lineCap: 'butt',
					scaleColor: false,
					barColor: 'white',
					trackColor: 'transparent',
					lineWidth: 10
				});
			});
		}, { offset: '80%' });


		/*---------------------banner----*/
		var revapi1079;
		revapi1079 = jQuery("#rev_slider_1079_1").show().revolution({
			sliderType: "standard",
			jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout: "fullscreen",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				arrows: {
					style: "uranus",
					enable: true,
					hide_onmobile: false,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "center",
						v_align: "bottom",
						h_offset: -30,
						v_offset: 60
					},
					right: {
						h_align: "center",
						v_align: "bottom",
						h_offset: 30,
						v_offset: 60
					}
				}
			},
			responsiveLevels: [1240, 1024, 778, 480],
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: [1240, 1024, 778, 480],
			gridheight: [768, 668, 960, 720],
			lazyType: "single",
			parallax: {
				type: "3D",
				origo: "slidercenter",
				speed: 400,
				levels: [50, 10, 8, 15, 20, 30, 35, 40, 0, 50, 47, 48, 49, 50, 51, 55],
				type: "3D",
				ddd_shadow: "off",
				ddd_bgfreeze: "off",
				ddd_overflow: "hidden",
				ddd_layer_overflow: "visible",
				ddd_z_correction: 65,
			},
			spinner: "off",
			stopLoop: "on",
			stopAfterLoops: 0,
			stopAtSlide: 1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});


		/* ---------------------------------------------- /*
		 * Quote Rotator
		/* ---------------------------------------------- */

		$(function () {
			/*
			- how to call the plugin:
			$( selector ).cbpQTRotator( [options] );
			- options:
			{
				// default transition speed (ms)
				speed : 700,
				// default transition easing
				easing : 'ease',
				// rotator interval (ms)
				interval : 8000
			}
			- destroy:
			$( selector ).cbpQTRotator( 'destroy' );
			*/

			$('#cbp-qtrotator').cbpQTRotator();

		});


		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function () {
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({ 'background-attachment': 'scroll' });
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};
		var bable = {
			initialised: false,
			version: 1.0,
			mobile: false,
			init: function () {
				if (!this.initialised) {
					this.initialised = true;
				} else {
					return;
				}

				;
				;
				this.Wow();
				this.Partical();
				this.Banner();
		

			},


			// Wow 
			Wow: function () {

				new WOW().init();

			},

			//122222222222222222222222222222222
			Banner: function() {
				var swiper = new Swiper('.hc_banner_slider .swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					loop: true,
					speed: 2000,
					spaceBetween: 0
				});
	
			},
	

			// Partical Effects
			Partical: function () {
				if ($('#js-particles').length > 0) {
					particlesJS(
						'js-particles', {
						'particles': {
							'number': {
								'value': 400
							},
							'color': {
								'value': ['#ff223e', '#5d1eb2', '#ff7300']
							},
							'shape': {
								'type': 'circle'
							},
							'opacity': {
								'value': 2,
								'random': false,
								'anim': {
									'enable': false
								}
							},
							'size': {
								'value': 2,
								'random': true,
								'anim': {
									'enable': false,
								}
							},
							'line_linked': {
								'enable': false
							},
							'move': {
								'enable': true,
								'speed': 1,
								'direction': 'none',
								'random': true,
								'straight': false,
								'out_mode': 'out'
							}
						},
						'interactivity': {
							'detect_on': 'canvas',
							'events': {
								'onhover': {
									'enable': false
								},
								'onclick': {
									'enable': false
								},
								'resize': true
							}
						},
						'retina_detect': true
					});
				}

			}



		};
		$(document).ready(function () {

			bable.init();

		});

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function (e) {

			e.preventDefault();

			var c_name = $('#c_name').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message ').val();
			var response = $('#contact-form .ajax-response');

			var formData = {
				'name': c_name,
				'email': c_email,
				'message': c_message
			};

			if ((c_name == '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email))) {
				response.fadeIn(500);
				response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
			}

			else {
				$.ajax({
					type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
					url: 'assets/php/contact.php', // the url where we want to POST
					data: formData, // our data object
					dataType: 'json', // what type of data do we expect back from the server
					encode: true,
					success: function (res) {
						var ret = $.parseJSON(JSON.stringify(res));
						response.html(ret.message).fadeIn(500);
					}
				});
			}
			return false;
		});

	});

})(jQuery);

