$.fancybox.defaults.closeExisting = true;
$.fancybox.defaults.autoFocus = false;
$.fancybox.defaults.touch = false;


function offerHomeSlider() {
	let offerHomeSlider = new Swiper(".offer-home-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		pagination: {
			el: ".offer-home-slider__pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".offer-home-slider__next",
			prevEl: ".offer-home-slider__prev",
		},
	});
}



$(document).ready(function () {

	$('input[type="tel"]').inputmask({ "mask": "+7(999) 999-9999" });

	const da = new DynamicAdapt("max");
	da.init();
	fixedHeader();

	offerHomeSlider();
})



// js для фиксирования шапке ===================
function fixedHeader() {
	if ($(this).scrollTop() > $('.js-header-label').outerHeight()) {
		$('.js-fixed-block').addClass('fixed');

	} else {
		$('.js-fixed-block').removeClass('fixed');
	}
	let headerBlock = $('.js-fixed-block').outerHeight();
	$('.header').css('padding-bottom', headerBlock + 'px');
}

$(window).on('scroll', function () {
	fixedHeader();

});
$(window).on('resize', function () {
	fixedHeader();
});
// js для фиксирования шапке end ===================



// js для поиска в шапке ===================
$(document).on('click', '.js-search__btn', function () {
	$('.js-search').addClass('open');
	$('body').addClass('lock');
	fixedHeader();
});
$(document).on('click', '.js-search__close', function () {
	$(this).parents('.js-search').removeClass('open');
	$('body').removeClass('lock');
});
$(document).on('click', '.js-search', function (e) {
	if (!$(e.target).closest('.js-search__body').length && !$(e.target).closest('.js-search__btn').length) {
		$('.js-search').removeClass('open');
		$('body').removeClass('lock');
	}
});
// js для поиска в шапке end ===================


// js для мобильного меню ===============
$(document).on('click', '.js-menu__btn', function () {
	$('.js-menu').addClass('open');
	$('.js-fixed-block').addClass('fixed');
	$('body').addClass('lock');
});
$(document).on('click', '.js-menu__close', function () {
	$(this).parents('.js-menu').removeClass('open');
	fixedHeader();
	$('body').removeClass('lock');
});
// js для мобильного меню end ===============

// spoiler start ===============================================
$(document).on('click', '.js-spoiler-title', function () {
	let parents = $(this).parents('.js-spoiler');
	if (!parents.hasClass('js-spoiler-double')) {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').removeClass('active').slideUp(300);
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideDown(300);
		} else {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').slideUp(300);
		}
	} else {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler-item').addClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideDown(300);
		} else {
			$(this).parents('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler-item').find('.js-spoiler-body').slideUp(300);
		}
	}
});
// spoiler end ===============================================


// Tabs start --------------------------
$(document).on('mouseover', '.js-menu-catalog__item', function () {
	let thisValueData = $(this).data('tab');
	if (!$(this).hasClass('active')) {
		$(this).parents('.js-menu-catalog').find('.js-menu-catalog__item').removeClass('active');
		$(this).addClass('active');
	}
	let contentData = $(this).parents('.js-menu-catalog').find('.js-menu-catalog__body-item');
	contentData.each(function () {
		if ($(this).data('tab') == thisValueData) {
			contentData.removeClass('active').hide();
			$(this).addClass('active').show();
		}
	});
});
 // Tabs end --------------------------