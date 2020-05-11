'use strict';
(function () {


var wizard = document.querySelector('.setup-wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var coatColorInput = document.querySelector('[name=coat-color]');
var eyesColorInput = document.querySelector('[name=eyes-color]');
var fireballColorInput = document.querySelector('[name=fireball-color]');


// создаем счетчики (надо разобраться как создать один универсальный счетчик)
var index = 0-1;

var counter = function(maxIndex) {

    index +=1;
    if(index >= maxIndex) {
        index=0-1;
        counter()
    }
    return index;
};

// выбираем  цвет мантии персонажа

wizardCoat.addEventListener('click', function () {

    counter(window.wizardOptions.arrayColor1.length);
    wizardCoat.style.fill = window.wizardOptions.arrayColor1[index];
    coatColorInput.value = window.wizardOptions.arrayColor1[index];

});

// выбираем цвет глаз персонажа

wizardEyes.addEventListener('click', function () {

    counter(window.wizardOptions.arrayColor2.length);
    wizardEyes.style.fill = window.wizardOptions.arrayColor2[index];
    eyesColorInput.value = window.wizardOptions.arrayColor2[index];

});

// выбираем цвет фаербола
fireballWrap.addEventListener('click', function () {
    counter(window.wizardOptions.fireballColors.length);
    fireballWrap.style.background = window.wizardOptions.fireballColors[index];
    fireballColorInput = window.wizardOptions.fireballColors[index];
});

}());