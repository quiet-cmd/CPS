function displayChanger(arr, display) {
	for(let i = 0; i < arr.length; i++) {
		arr[i].style.display = display;
	}
}

function btnEvent(selectorBtn, itemsSelector, mobailFilter, tabletFilter, deckFilter, display='flex') {
	let btn = document.querySelector(selectorBtn);
	let items = document.querySelectorAll(itemsSelector);
	btn.addEventListener('click', function() {

		let hide;
		let btnSelectors = btn.classList;
		btn.classList.toggle('full-button--active');
	
		if(!btnSelectors.contains('full-button--active')) return displayChanger(items, display);
		
		
		let userWidth = window.innerWidth;
		if(768 > userWidth) {
			hide = document.querySelectorAll(mobailFilter);
		}
		else if (768 <= userWidth & userWidth <= 1119) {
			hide = document.querySelectorAll(tabletFilter);
		} else {
			hide = document.querySelectorAll(deckFilter);
		}
	
		displayChanger(hide, 'none');
	
	});
}

btnEvent('.brands-btn', '.brands__brand', null, '.brands__device--tablet ~ .brands__brand', '.brands__device--deck ~ .brands__brand');
btnEvent('.services-btn', '.services__service', null, '.services__device--tablet ~ .services__service', '.services__device--deck ~ .services__service');
btnEvent('.about-btn', '.about__info', '.about__hide', '.about__hide', '.about__hide', 'block');