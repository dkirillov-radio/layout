$.fancybox.defaults.closeExisting = true;
$.fancybox.defaults.autoFocus = false;
$.fancybox.defaults.touch = false;


$(document).ready(function () {

	$('input[type="tel"]').inputmask({ "mask": "+7(999) 999-9999" });

	const da = new DynamicAdapt("max");
	da.init();
	fixedHeader();
})

function fixedHeader() {
	if ($(this).scrollTop() > $('.js-header-label').outerHeight()) {
		$('.js-fixed-block').addClass('fixed');

	} else {
		$('.js-fixed-block').removeClass('fixed');

	}
}

$(window).on('scroll', function () {
	fixedHeader();

});


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
// js для мобильного меню ===============

// js для поиска в шапке ===================
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