'use strict';

(function () {

// находим блок setup
var setupBlock = document.querySelector('.setup');
var setupClose = setupBlock.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open');
var UserName = document.querySelector('.setup-user-name');
var wizardsBlock = document.querySelector('.setup-similar');


// функция для закрытия окна setup по нажатию на esc и добавим ее в обработчик события keydown
var onPopupCloseEsc = function (evt) {
    if (evt.keyCode === 27) {
        popupClose();
    }
};

//функция для открытия окна setup
var popupOpen = function () {
    setupBlock.classList.remove('hidden');
    wizardsBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupCloseEsc);
};

var popupClose = function () {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupCloseEsc);
};


// открываем окно setup по клику и  нажатию enter
setupOpen.addEventListener('click', function () {
    popupOpen()
});

setupOpen.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 13) {
        popupOpen();

    }
});

// закрываем окно setup по клику и нажатию на кнопку закрытия
setupClose.addEventListener('click', function () {
    popupClose();
});
setupClose.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 13) {
        popupClose()
    }
});

UserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupCloseEsc);
});
UserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupCloseEsc);
});

}());