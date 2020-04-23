
// находим блок setup
var setupBlock = document.querySelector('.setup');

// находим шаблон
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item')

//находим блок для вставки волшебников
var wizardsBlock = document.querySelector('.setup-similar');
var wizardsList = wizardsBlock.querySelector('.setup-similar-list');


//создаем массив имен
var arrayNamePart1 = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
]

var arrayNamePart2 = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
]

// создаем массив цветов
var arrayColor1 = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
]
var arrayColor2 = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
]

//создаем массив для записи обьектов с характеристиками персонажа
var arrayCharacter = []


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

}

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
}

// создаем цикл для генерации и записи обьектов сгенерированных персонажей в массив и добавлением в шаблон
for (var i=0; i<4; i++) {

    arrayCharacter[i] = generateСharacteristics(arrayNamePart1,arrayNamePart2,arrayColor1, arrayColor2);
    generateWizard(arrayCharacter[i]);
 }

// делаем видимым блок setup убирая класс hidden
setupBlock.classList.remove('hidden');
wizardsBlock.classList.remove('hidden');

