'use strict';

(function () {


// находим шаблон
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
//находим блок для вставки волшебников
var wizardsBlock = document.querySelector('.setup-similar');
var wizardsList = wizardsBlock.querySelector('.setup-similar-list');


//создаем массив для записи обьектов с характеристиками персонажа
var arrayCharacter = [];


// создаем функцию для генерации случайных имен и цветов персонажа
var generateСharacteristics = function(array1, array2, array3, array4) {
    var firstName = array1[Math.floor(Math.random()*array1.length)];
    var lastName = array2[Math.floor(Math.random()*array2.length)];
    var fullName = firstName + ' ' + lastName;

    var coatColor = array3[Math.floor(Math.random()*array3.length)];

    var coloreye = array4[Math.floor(Math.random()*array4.length)];

    return {
        name: fullName,
        color: coatColor,
        eyesColor: coloreye
    }

};

// создаем функцию для копирования шаблона и изменения параметров
var generateWizard = function (wizards) {

    var wizard = template.cloneNode(true);
    var nameWizard = wizard.querySelector('.setup-similar-label');
    var coatWizard = wizard.querySelector('.wizard-coat');
    var eyesWizard = wizard.querySelector('.wizard-eyes');

    nameWizard.textContent = wizards.name;
    coatWizard.style.fill = wizards.color;
    eyesWizard.style.fill = wizards.eyesColor;

    wizardsList.appendChild(wizard);
};

// создаем цикл для генерации и записи обьектов сгенерированных персонажей в массив и добавлением в шаблон
for (var i=0; i<4; i++) {

    arrayCharacter[i] = generateСharacteristics(window.wizardOptions.arrayNamePart1, window.wizardOptions.arrayNamePart2, window.wizardOptions.arrayColor1, window.wizardOptions.arrayColor2);
    generateWizard(arrayCharacter[i]);
 }


}());