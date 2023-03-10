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
		speed: 1000,
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
function blockProductSlider() {
	let prev, next;
	$(".slider-product.swiper-container").each(function (index, value) {
		prev = $(value).parents('.block-product-slider').find('.slider-product__prev')[0];
		next = $(value).parents('.block-product-slider').find('.slider-product__next')[0];
		let blockProductSlider = new Swiper(value, {
			slidesPerView: 1.20,
			spaceBetween: 20,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			pagination: {
				el: ".slider-product__pagination",
				type: 'progressbar'
			},
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 16,
				}
			}
		});
	});
}
function reviewsSlider() {
	let prev, next;
	$(".reviews-slider.swiper-container").each(function (index, value) {
		prev = $(value).parents('.reviews-home').find('.reviews-slider__prev')[0];
		next = $(value).parents('.reviews-home').find('.reviews-slider__next')[0];
		let reviewsSlider = new Swiper(value, {
			slidesPerView: 1.25,
			spaceBetween: 16,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 16,
				}
			}
		});
	});
}
function colectionSlider() {
	let prev, next;
	$(".colection-slider.swiper-container").each(function (index, value) {
		prev = $(value).parents('.colection-block').find('.colection-slider__prev')[0];
		next = $(value).parents('.colection-block').find('.colection-slider__next')[0];
		let colectionSlider = new Swiper(value, {
			slidesPerView: 1.5,
			spaceBetween: 8,
			loop: false,
			observer: true,
			observeParents: true,
			watchOverflow: true,
			touchReleaseOnEdges: true,
			navigation: {
				nextEl: next,
				prevEl: prev,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			}
		});
	});
}


function cardSlider() {

	if ($('.card-slider').length) {
		let cardSlider = undefined;
		function initSwiper() {
			var screenWidth = $(window).width();
			if (screenWidth < 992 && cardSlider == undefined) {
				cardSlider = new Swiper(".card-slider.swiper-container", {
					slidesPerView: 1,
					spaceBetween: 15,
					loop: true,
					observer: true,
					observeParents: true,
					watchOverflow: true,
					touchReleaseOnEdges: true,
					pagination: {
						el: ".card-slider__pagination",
						clickable: true
					}
				});
			} else if (screenWidth > 991 && cardSlider != undefined) {
				cardSlider.destroy();
				cardSlider = undefined;
				$('.card-slider').find('.swiper-wrapper').removeAttr('style');
				$('.card-slider').find('.swiper-slide').removeAttr('style');
			}
		}
		initSwiper();
		$(window).resize(function () {
			initSwiper();
		});
	}
}

function galleryPopup() {
	let galleryPopupSliderThumbs = new Swiper(".gallery-popup-slider-thumbs.swiper-container", {
		spaceBetween: 20,
		slidesPerView: 5,
		freeMode: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		loop: false,
		direction: 'vertical',
		breakpoints: {
			1200: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 7,
				spaceBetween: 20,
			},
			1700: {
				slidesPerView: 8,
				spaceBetween: 20,
			}
		}

	});
	let galleryPopupSlider = new Swiper(".gallery-popup-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: false,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		navigation: {
			nextEl: ".gallery-popup-slider__next",
			prevEl: ".gallery-popup-slider__prev",
		},
		thumbs: {
			swiper: galleryPopupSliderThumbs,
			autoScrollOffset: 1
		},
	});
}
function colectionDetailSlider() {
	let colectionDetailSlider = new Swiper(".colection-detail-slider.swiper-container", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		touchReleaseOnEdges: true,
		pagination: {
			el: ".colection-detail-slider__pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".colection-detail-slider__next",
			prevEl: ".colection-detail-slider__prev",
		},
	});
}




function colorsBlock(item) {
	let name = item.data('name');
	let items = item.parents('.js-color-block').find('.js-color-block__item');
	item.parents('.js-color-block').find('.js-color-block__text').text(name)
}
$(document).on('change', '.js-color-block__item', function () {
	colorsBlock($(this));
});

function auto_grow(element) {
	element.style.height = "5px";
	element.style.height = (element.scrollHeight) + "px";
}


$(document).ready(function () {


	let sticky = new Sticky('.js-sticky-block');

	$(document).on('click', '.js-spoiler-title', function () {
		if ($('.js-sticky-block').length) {
			setTimeout(function () {
				sticky.update();
			}, 400);
		}
	});

	$('input[type="tel"]').inputmask({ "mask": "+7(999) 999-9999" });

	const da = new DynamicAdapt("max");
	da.init();
	fixedHeader();

	offerHomeSlider();
	blockProductSlider();
	reviewsSlider();
	colectionSlider();
	cardSlider();
	galleryPopup();
	colectionDetailSlider();
	fixedCardInfo();
})



// js ?????? ???????????????????????? ?????????? ===================
function fixedHeader() {
	if ($(this).scrollTop() > $('.js-header-label').outerHeight()) {
		$('.js-fixed-block').addClass('fixed');

	} else {
		$('.js-fixed-block').removeClass('fixed');
	}
	let headerBlock = $('.js-fixed-block').outerHeight();
	$('.header').css('padding-bottom', headerBlock + 'px');
}
// js ?????? ???????????????????????? ?????????? end ===================

// js ?????? ???????????????????????? ???????????????????? ?? ???????????????? ???????????? ===================
function fixedCardInfo() {
	if ($('.js-card-info').length) {
		let positionTop = $('.header-center').outerHeight() - 1;
		let positionBottom = $('.main-card').offset().top + $('.main-card').outerHeight();
		let descPosition = $('.js-card-desc').offset().top - $('.js-fixed-block').outerHeight() - 20;
		if ($(window).scrollTop() > descPosition) {
			$('.js-card-info').addClass('open').css('top', positionTop + 'px')
		} else {
			$('.js-card-info').removeClass('open').css('top', 0);
		}
	}

}
// js ?????? ???????????????????????? ???????????????????? ?? ???????????????? ???????????? end ===================


$(window).on('scroll', function () {
	fixedHeader();
	fixedCardInfo();
});
$(window).on('resize', function () {
	fixedHeader();
	fixedCardInfo();
});




// js ?????? ???????????? ?? ?????????? ===================
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
// js ?????? ???????????? ?? ?????????? end ===================


// js ?????? ???????????????????? ???????? ===============
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
// js ?????? ???????????????????? ???????? end ===============


// js ?????? ???????? ???????????????? ===============
$(document).on('click', '.js-catalog-menu__btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$(this).parents('.js-catalog-menu').find('.js-catalog-menu__body').addClass('open');
	} else {
		$(this).removeClass('open');
		$(this).parents('.js-catalog-menu').find('.js-catalog-menu__body').removeClass('open');
	}
});
$(document).on('click', function (e) {
	if (!$(e.target).closest('.js-catalog-menu').length && !$(e.target).closest('.js-catalog-menu__btn').length) {
		$('.js-catalog-menu__btn').removeClass('open');
		$('.js-catalog-menu__body').removeClass('open');
	}
});
// js ?????? ???????? ???????????????? end ===============

// spoiler start ===============================================
$(document).on('click', '.js-spoiler-title', function () {
	let parents = $(this).parents('.js-spoiler');
	if (!parents.hasClass('js-spoiler-double')) {
		if (!$(this).parents('.js-spoiler-item').hasClass('active')) {
			$(this).parents('.js-spoiler').find('.js-spoiler-item').removeClass('active');
			$(this).parents('.js-spoiler').find('.js-spoiler-body').slideUp(300);
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

// ???????? ???????????????????????????? ?? ???????????????? ???????????? start --------------------------
$(document).on('click', '.js-characteristics-block__btn', function () {
	if (!$(this).parents('.js-characteristics-block').hasClass('open')) {
		$(this).parents('.js-characteristics-block').addClass('open');
	} else {
		$(this).parents('.js-characteristics-block').removeClass('open');
	}
});
// ???????? ???????????????????????????? ?? ???????????????? ???????????? end --------------------------



// popup ?????????? ?????????????? start --------------------------
$(document).on('click', '.js-small-basket__btn', function () {
	$('.js-small-basket').addClass('open');
	$('body').addClass('lock');
});
$(document).on('click', '.js-small-basket__close', function () {
	$(this).parents('.js-small-basket').removeClass('open');
	$('body').removeClass('lock');
});
$(document).on('click', '.js-small-basket', function (e) {
	if (!$(e.target).closest('.js-small-basket__body').length && !$(e.target).closest('.js-small-basket__btn').length) {
		$('.js-small-basket').removeClass('open');
		$('body').removeClass('lock');
	}
});
// popup ?????????? ?????????????? end --------------------------


// popup ?????????????? ?? ???????????????? ???????????? start --------------------------
$(document).on('click', '.js-gallery-popup__btn', function () {
	$('.js-gallery-popup').addClass('open');
	$('body').addClass('lock');
});
$(document).on('click', '.js-gallery-popup__close', function () {
	$(this).parents('.js-gallery-popup').removeClass('open');
	$('body').removeClass('lock');
});
// popup ?????????????? ?? ???????????????? ???????????? end --------------------------

// popup ?????????? ?? ???????????????? ???????????? start --------------------------
$(document).on('click', '.js-video-popup__btn', function () {
	$('.js-video-popup').addClass('open');
	$('body').addClass('lock');
});
$(document).on('click', '.js-video-popup__close', function () {
	$(this).parents('.js-video-popup').removeClass('open');
	$('body').removeClass('lock');
});
// popup ?????????? ?? ???????????????? ???????????? end --------------------------



$(document).on('click', '.js-block-btn', function () {
	if (!$(this).hasClass('open')) {
		$('.js-block-body').removeClass('open');
		$('.js-block-btn').removeClass('open');
		$(this).addClass('open');
		$(this).parents('.js-block').find('.js-block-body').addClass('open');
	} else {
		$(this).removeClass('open');
		$(this).parents('.js-block').find('.js-block-body').removeClass('open');
	}
});

$(document).on('click', '.js-block-close', function () {
	$(this).parents('.js-block').find('.js-block-btn').removeClass('open');
	$(this).parents('.js-block').find('.js-block-body').removeClass('open');
});

// ???????????? ?????? ?????????????????? ?? ???????????????? --------------------------
if ($('.js-slider-noui-slider').length) {
	$('.js-slider-noui-slider').each(function (index, value) {
		let from = $(value).parents('.js-slider-noui').find('.js-slider-noui-from');
		let to = $(value).parents('.js-slider-noui').find('.js-slider-noui-to');
		let min = $(value).data('min');
		let max = $(value).data('max');
		noUiSlider.create(value, {
			start: [min, max],
			connect: true,
			step: 1,
			range: {
				'min': min,
				'max': max
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
			}),
		}).on('update', function (values, handle, unencoded) {
			$(value).parents('.js-slider-noui').find('.js-slider-noui-from').val(values[0]);
			$(value).parents('.js-slider-noui').find('.js-slider-noui-to').val(values[1]);
		});

		$(from).on('change', function () {
			let parent = $(this).parents('.js-slider-noui');
			let to = $(value).find('.js-slider-noui-to').val();
			value.noUiSlider.set([$(this).val(), to]);
		});
		$(to).on('change', function () {
			let parent = $(this).parents('.js-slider-noui');
			let from = $(parent).find('.js-slider-noui-from').val();
			value.noUiSlider.set([from, $(this).val()]);
		});
	});
}
// ???????????? ?????? ?????????????????? ?? ???????????????? end --------------------------

// popup ?????????????? start --------------------------
$(document).on('click', '.js-popup-filter__btn', function () {
	$('.js-popup-filter').addClass('open');
	$('body').addClass('lock');
});
$(document).on('click', '.js-popup-filter__close', function () {
	$(this).parents('.js-popup-filter').removeClass('open');
	$('body').removeClass('lock');
});
$(document).on('click', '.js-popup-filter', function (e) {
	if (!$(e.target).closest('.js-popup-filter__body').length && !$(e.target).closest('.js-popup-filter__btn').length) {
		$('.js-popup-filter').removeClass('open');
		$('body').removeClass('lock');
	}
});
// popup ?????????????? end --------------------------

$(document).on('click', '.js-block-filter__btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$(this).parents('.js-block-filter').addClass('open');
	} else {
		$(this).removeClass('open');
		$(this).parents('.js-block-filter').removeClass('open');
	}
});


// ?????????? ?????????? ?????? ???????????????? ???????????? ?????????????????? start --------------------------
$(document).on('click', '.js-map-block__btn', function () {
	if (!$(this).hasClass('open')) {
		$(this).addClass('open');
		$(this).parents('.js-map-block').addClass('open');
	} else {
		$(this).removeClass('open');
		$(this).parents('.js-map-block').removeClass('open');
	}
});
// ?????????? ?????????? ?????? ???????????????? ???????????? ?????????????????? end --------------------------


// ?????????????????? ???????????????? ???????????? start --------------------------
$(document).on('click', '.js-item-order__btn', function () {
	if (!$(this).parents('.js-item-order').hasClass('open')) {
		$(this).parents('.js-item-order').addClass('open');
	} else {
		$(this).parents('.js-item-order').removeClass('open');
	}
});
// ?????????????????? ???????????????? ???????????? end --------------------------



// ???????????????? ???????????? (???????????????? ?? ??????????????) ?? ???????????????? ????????????
function stickyBlock() {
	if ($(".js-sticky-button").length) {
		let stickyBlock = $(".js-sticky-button");
		let stickyBlockHeight = $(".js-sticky-button").outerHeight();
		let heightWindow = $(window).height();
		let positionBlock = $('.js-sticky-button').offset().top + 16 + stickyBlockHeight;
		if ($(window).width() < 991.98) {
			if ($(window).scrollTop() + heightWindow < positionBlock) {
				$(stickyBlock).addClass('fixed');
			} else {
				$(stickyBlock).removeClass('fixed');
			}
		} else {
			$(stickyBlock).removeClass('fixed');
		}
	}
}
$(document).ready(function () {
	stickyBlock();
})
$(window).scroll(function () {
	stickyBlock();
});
$(window).on('resize', function () {
	stickyBlock();
});
// ???????????????? ???????????? (???????????????? ?? ??????????????) ?? ???????????????? ???????????? end


$(document).on('click', 'a.card-spoiler__title', function () {
	var el = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(`${el}`).offset().top - $('.header').outerHeight()
	}, 500);
});