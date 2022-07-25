import Swiper, {Pagination} from 'swiper';

let brands = document.querySelector('.brands');
let swiperBrands;
let services = document.querySelector('.services');
let swiperervices;
let prices = document.querySelector('.prices');
let swiperPrices;

function BrandSwiper() {
	if(window.innerWidth <= 767 & brands.dataset.mobaile == 'false') {
		swiperBrands = new Swiper('.brands', {
			modules: [Pagination],
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			slidesPerView: 1.2,
			spaceBetween: 16,
			slidesPerGroup: 1,
			breakpoints: {
				400: {
					slidesPerView: 1.4
				},

				500: {
					slidesPerView: 2.4
				}
			},
		});
		brands.dataset.mobaile = 'true';
	}
	if(window.innerWidth > 767 & brands.dataset.mobaile == 'true') {
		swiperBrands.destroy();
		brands.dataset.mobaile = 'false';
	}
}

function ServicesSwiper() {
	if(window.innerWidth <= 767 & services.dataset.mobaile == 'false') {
		swiperervices = new Swiper('.services', {
			modules: [Pagination],
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			slidesPerView: 1.2,
			spaceBetween: 16,
			slidesPerGroup: 1,
			breakpoints: {
				400: {
					slidesPerView: 1.6
				},

				560: {
					slidesPerView: 2.4
				}
			},
		});
		services.dataset.mobaile = 'true';
	}
	if(window.innerWidth > 767 & services.dataset.mobaile == 'true') {
		swiperervices.destroy();
		services.dataset.mobaile = 'false';
	}
}

function PricesSwiper() {
	if(window.innerWidth <= 767 & prices.dataset.mobaile == 'false') {
		swiperPrices = new Swiper('.prices', {
			modules: [Pagination],
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			slidesPerView: 1,
			spaceBetween: 16,
			slidesPerGroup: 1,
			breakpoints: {
				400: {
					slidesPerView: 1.3
				},

				500: {
					slidesPerView: 2.4
				}
			},
		});
		prices.dataset.mobaile = 'true';
	}
	if(window.innerWidth > 767 & prices.dataset.mobaile == 'true') {
		swiperPrices.destroy();
		prices.dataset.mobaile = 'false';
	}
}

BrandSwiper();
ServicesSwiper();
PricesSwiper();
window.addEventListener('resize', function(event) {
	BrandSwiper();
	ServicesSwiper();
	PricesSwiper();
}, true);
