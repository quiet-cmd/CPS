function modalChanger(element, selector) {
    element.classList.toggle(selector);
}

function modalReset(selector) {
    let modalActiveList = document.querySelectorAll('.' + selector);
    for(let i = 0; i < modalActiveList.length; i++) {
        modalActiveList[i].classList.remove(selector);
    }
}

function modalEvent(element, modalActive, selectorUnactive) {
    let modalUnactive = element.querySelector(selectorUnactive);

    for(let i = 0; i < modalActive.length; i++) {
        modalActive[i].addEventListener('click', function() {
            modalReset('modal');
            modalChanger(element, 'modal');
            element.style.visibility = 'visible';
            element.style.opacity = '1';
    
        });
    }

    modalUnactive.addEventListener('click', function() {
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
        modalChanger(element, 'modal');
    });

    element.addEventListener('click', function(e) {
        if(!e.target.closest('.modal > *')) {
            element.style.opacity = '0';
            element.style.visibility = 'hidden';
        }
    });
}



let modalMenu = document.querySelector('#modal-menu');
let activeMenu = document.querySelectorAll('.ico-burger');

let modalCall = document.querySelector('#modal-call');
let activeCall =document.querySelectorAll('.ico-call');

let modalFeedBack = document.querySelector('#modal-feedback');
let activeFeedBack =document.querySelectorAll('.ico-chat');


if(window.innerWidth <= 1366) {
    modalEvent(modalMenu, activeMenu, '.ico-burger-active');
}

modalEvent(modalCall, activeCall, '.ico-burger-active');
modalEvent(modalFeedBack, activeFeedBack, '.ico-burger-active');
