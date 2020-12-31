// вытянуть все значения из html-элементов
//id на всех активных элементах
// написать функцию getData
//получить элемент по id и сохранить данные в переменную
//всем кнопкам дать слушать события
//написать функции для каждой группы кнопок
//написать функцию подсчета данных
//написать функцию вывода данных в html
// добавить валидацию данных
//перезаписать массивы данных в объекты
/*
Что нужно реализовать:
1.При выборе производителя кнопка должна оставаться подсвеченной
2.При выборе типа секции(Глухая,поворотная и тд.) должно автоматом подсвечиваться нужное окно(нужно ли менять верстку?)
 */

const windowObject = {
    one: {
        default: {
            "800": {
                "1000": 2194,
                "1100": 2424,
                "1200": 2424,
                "1300": 2654,
                "1400": 2884,
                "1500": 3113
            },
            "900": {
                "1000": 2414,
                "1100": 2666,
                "1200": 2666,
                "1300": 2918,
                "1400": 3170,
                "1500": 3422
            },
            "1000": {
                "1000": 2636,
                "1100": 2910,
                "1200": 2910,
                "1300": 3184,
                "1400": 3458,
                "1500": 3732
            },
            "1100": {
                "1000": 2857,
                "1100": 3153,
                "1200": 3153,
                "1300": 3449,
                "1400": 3745,
                "1500": 4041
            },
            "1200": {
                "1000": 3078,
                "1100": 3096,
                "1200": 3096,
                "1300": 3714,
                "1400": 4062,
                "1500": 4350
            }

        },
        turn: {
            "800": {
                "1000": 4196,
                "1100": 4488,
                "1200": 4488,
                "1300": 4780,
                "1400": 5072,
                "1500": 5364
            },
            "900": {
                "1000": 4650,
                "1100": 4964,
                "1200": 4964,
                "1300": 5278,
                "1400": 5592,
                "1500": 5906
            },
            "1000": {
                "1000": 4914,
                "1100": 5250,
                "1200": 5250,
                "1300": 5586,
                "1400": 5922,
                "1500": 6258
            },
            "1100": {
                "1000": 5179,
                "1100": 5537,
                "1200": 5537,
                "1300": 5895,
                "1400": 6253,
                "1500": 6611
            },
            "1200": {
                "1000": 5442,
                "1100": 5822,
                "1200": 5822,
                "1300": 6202,
                "1400": 6582,
                "1500": 6962

            }
        }
    },
    two: {
        1: {
            "1100": {
                "1100": 3498,
                "1200": 3757,
                "1300": 4016,
                "1400": 4275,
                "1500": 4534,
                "1600": 4793
            },
            "1200": {
                "1100": 3737,
                "1200": 4014,
                "1300": 4291,
                "1400": 4568,
                "1500": 4845,
                "1600": 5122
            },
            "1300": {
                "1100": 3974,
                "1200": 4269,
                "1300": 4564,
                "1400": 4859,
                "1500": 5154,
                "1600": 5447
            },
            "1400": {
                "1100": 4212,
                "1200": 4524,
                "1300": 4836,
                "1400": 5148,
                "1500": 5460,
                "1600": 5771
            },
            "1500": {
                "1100": 4450,
                "1200": 4779,
                "1300": 5108,
                "1400": 5437,
                "1500": 5766,
                "1600": 6096
            },
            "1600": {
                "1100": 4688,
                "1200": 5035,
                "1300": 5382,
                "1400": 5729,
                "1500": 6067,
                "1600": 6422
            }
        },
        2: {
            "1100": {
                "1100": 5196,
                "1200": 5531,
                "1300": 5866,
                "1400": 6201,
                "1500": 6536,
                "1600": 6872
            },
            "1200": {
                "1100": 5463,
                "1200": 5814,
                "1300": 6165,
                "1400": 6516,
                "1500": 6867,
                "1600": 7220
            },
            "1300": {
                "1100": 5713,
                "1200": 6034,
                "1300": 6355,
                "1400": 6676,
                "1500": 6997,
                "1600": 7318
            },
            "1400": {
                "1100": 5914,
                "1200": 6314,
                "1300": 6714,
                "1400": 7114,
                "1500": 7514,
                "1600": 7912
            },
            "1500": {
                "1100": 6459,
                "1200": 6854,
                "1300": 7249,
                "1400": 7644,
                "1500": 8039,
                "1600": 8435
            },
            "1600": {
                "1100": 6906,
                "1200": 7319,
                "1300": 7732,
                "1400": 8145,
                "1500": 8558,
                "1600": 8971
            }
        },
        3: {
            "1100": {
                "1100": 7355,
                "1200": 7755,
                "1300": 8155,
                "1400": 8555,
                "1500": 8955,
                "1600": 9355
            },
            "1200": {
                "1100": 7654,
                "1200": 8068,
                "1300": 8482,
                "1400": 8896,
                "1500": 9310,
                "1600": 9726
            },
            "1300": {
                "1100": 7951,
                "1200": 8379,
                "1300": 8807,
                "1400": 9235,
                "1500": 9663,
                "1600": 10093
            },
            "1400": {
                "1100": 8019,
                "1200": 8495,
                "1300": 8971,
                "1400": 9447,
                "1500": 9923,
                "1600": 10397
            },
            "1500": {
                "1100": 8692,
                "1200": 9163,
                "1300": 9634,
                "1400": 10105,
                "1500": 10576,
                "1600": 11047

            },
            "1600": {
                "1100": 9349,
                "1200": 9839,
                "1300": 10329,
                "1400": 10819,
                "1500": 11309,
                "1600": 11794
            }
        }
    },
    three: {
        default: {
            "1700": {
                "1500": 9265,
                "1600": 9789,
                "1700": 10313,
                "1800": 10836
            },
            "1800": {
                "1500": 9587,
                "1600": 10129,
                "1700": 10671,
                "1800": 11211
            },
            "1900": {
                "1500": 9907,
                "1600": 10467,
                "1700": 11027,
                "1800": 11588
            },
            "2000": {
                "1500": 10230,
                "1600": 10808,
                "1700": 11386,
                "1800": 11963
            },
            "2100": {
                "1500": 10510,
                "1600": 11104,
                "1700": 11698,
                "1800": 12291
            },
            "2200": {
                "1500": 10935,
                "1600": 11541,
                "1700": 12147,
                "1800": 12754
            }
        }
    }
};
const coeffs = {
    1: {
        1: 1,
        2: 1.4
    },
    1.4: {
        1: 1,
        2: 1.5
    },
    1.5: {
        1: 1,
        2: 1.4
    }
}
//______Ключи для объекта__________//
let windowCountKey = null;
let windowTypeKey = null;
let windowTypeKey1 = "default";
let windowTypeKey2 = null;
let windowTypeKey3 = null;
let widthKey = null;
let heightKey = null;

//___Ввод данных о размере окна___//
let inputHeight = document.getElementById('input-height');
let inputWidth = document.getElementById('input-width');

//___Выбор производителя___//
let kbe = document.getElementById('kbe');
let rehau = document.getElementById('rehau');
let montblanc = document.getElementById('montblanc');

//___Выбор профиля окна___//
let typeProfile = document.getElementById('type-of-profile');
let typeProfileValue = 1;

//___Выбор количества секции___//
let oneWindow = document.getElementById('one');
let twoWindows = document.getElementById('two');
let threeWindows = document.getElementById('three');

//___Виды секций(select и option)___//
let oneTypeSelector = document.getElementById('one-type-selector');
let oneSelectorArray = oneTypeSelector.querySelectorAll('option')
let twoTypeFirst = document.getElementById('two-type-first');
let twoTypeSecond = document.getElementById('two-type-second');
let firstArrayOption = twoTypeFirst.querySelectorAll('option');
let secondArrayOption = twoTypeSecond.querySelectorAll('option');
let selectPowerFirst = 1;
let selectPowerSecond = 1;
let mostPowerSelect = 1;

//___Вывод данных___//
let result = 0;
let totalResult = 0;
let k = 0;
let b = 0;
let totalCoeff = 0;
let outputValue = document.getElementById('output');
let outputMoscowValue = document.getElementById('output-moscow');
let checkWidth = 0;
let checkHeight = 0;

//___Запускаторы___//
let brand = document.querySelector('.brand');
document.addEventListener('click', getData);
document.addEventListener('click', renderResult);
document.addEventListener("DOMContentLoaded", configPrice);
brand.addEventListener("click", getCoeff);
typeProfile.addEventListener("click", getCoeff)

//___Функции___//
let notification = document.getElementById('notification');


function configPrice() {
    //___Ширина и высота___//
    inputWidth.addEventListener('change', (e) => {
        if (typeof e.target.value !== "string") {
            return;
        }
        let eCheck = Math.round(e.target.value / 100) * 100;
        widthKey = String(eCheck);
        console.log(widthKey)
    });
    inputHeight.addEventListener('change', (b) => {
            if (typeof b.target.value !== "string") {
                return;
            }
            let bCheck = Math.round(b.target.value / 100) * 100;
            if (windowCountKey === 'one' && b.target.value >= 1000 && b.target.value <= 1099) {
                bCheck = 1000;
            }
            heightKey = String(bCheck);
            console.log(heightKey);
        }
    );

    //___Выбор производителя___//
    kbe.addEventListener('click', () => {
        k = kbe.dataset.coeff;
    });
    rehau.addEventListener('click', () => {
        k = rehau.dataset.coeff;
    });
    montblanc.addEventListener('click', () => {
        k = montblanc.dataset.coeff;
    });

    //___Тип профиля___//
    typeProfile.addEventListener('change', (e) => {
        typeProfileValue = e.target.value;

    });

    //___Количество секций___//
    oneWindow.addEventListener('click', () => {
        windowCountKey = oneWindow.dataset.count;
    });
    twoWindows.addEventListener('click', () => {
        windowCountKey = twoWindows.dataset.count;
    });
    threeWindows.addEventListener('click', () => {
        windowCountKey = threeWindows.dataset.count;
    });

    //___Тип секций___//
    oneTypeSelector.addEventListener('change', (e) => {
        windowTypeKey1 = e.target.value;
        console.log(windowTypeKey1);

    });
    twoTypeFirst.addEventListener('change', (e) => {
        windowTypeKey2 = e.target.value;
        console.log(windowTypeKey2)

        if (firstArrayOption[1].value === windowTypeKey2) {
            secondArrayOption[1].disabled = true;
            secondArrayOption[0].selected = true;
            secondArrayOption[0].removeAttribute("disabled");
            secondArrayOption[2].removeAttribute("disabled");
            selectPowerFirst = firstArrayOption[1].dataset.power;
        }
        if (firstArrayOption[0].value === windowTypeKey2) {
            selectPowerFirst = firstArrayOption[0].dataset.power;
            for (let i = 0; i < secondArrayOption.length; i++) {
                secondArrayOption[i].removeAttribute("disabled");
            }
            secondArrayOption[1].removeAttribute("disabled");
            secondArrayOption[2].removeAttribute("disabled");
        }
        if (firstArrayOption[2].value === windowTypeKey2) {
            selectPowerFirst = firstArrayOption[2].dataset.power;
            secondArrayOption[0].disabled = true;
            secondArrayOption[1].selected = true;
            secondArrayOption[2].disabled = true;
            secondArrayOption[1].removeAttribute("disabled");
        }


    });
    twoTypeSecond.addEventListener('change', (e) => {
        windowTypeKey3 = e.target.value;
        console.log(windowTypeKey3)

        if (secondArrayOption[1].value === windowTypeKey3) {
            firstArrayOption[1].disabled = true;
            firstArrayOption[0].selected = true;
            firstArrayOption[0].removeAttribute("disabled");
            firstArrayOption[2].removeAttribute("disabled");
            selectPowerSecond = secondArrayOption[1].dataset.power;
        }
        if (secondArrayOption[0].value === windowTypeKey3) {
            selectPowerSecond = secondArrayOption[0].dataset.power;
            firstArrayOption[0].removeAttribute("disabled")

            for (let i = 0; i < secondArrayOption.length; i++) {
                secondArrayOption[i].removeAttribute("disabled");
            }
            firstArrayOption[1].removeAttribute("disabled");
            firstArrayOption[2].removeAttribute("disabled");
        }
        if (secondArrayOption[2].value === windowTypeKey3) {
            firstArrayOption[0].disabled = true;
            firstArrayOption[1].selected = true;
            firstArrayOption[2].disabled = true;
            firstArrayOption[1].removeAttribute("disabled");
            selectPowerSecond = secondArrayOption[2].dataset.power;
        }
    });
}

function getData() {
    if (windowCountKey === 'one') {
        windowTypeKey = windowTypeKey1;
        checkWidth = Number(widthKey);
        checkHeight = Number(heightKey);
        if (checkWidth < 800) {
            inputWidth.value = '800';
            checkWidth = 800;
            widthKey = String(checkWidth);

        }
        if (checkWidth > 1200) {
            notification.style.color = "#f26c4f";

        }
        if (checkHeight < 1000) {
            inputHeight.value = '1000';
            checkHeight = 1000;
            heightKey = String(checkHeight);
        }
        if (checkHeight > 1500) {
            notification.style.color = "#f26c4f";
        }
    }

    if (windowCountKey === 'two') {
        mostPowerSelect = Math.max(selectPowerFirst, selectPowerSecond);
        windowTypeKey = mostPowerSelect;
        checkWidth = Number(widthKey);
        checkHeight = Number(heightKey);
        if (checkWidth < 1100) {
            inputWidth.value = '1100';
            checkWidth = 1100;
            widthKey = String(checkWidth);

        }
        if (checkWidth > 1600) {
            notification.style.color = "#f26c4f";

        }
        if (checkHeight < 1100) {
            inputHeight.value = '1100';
            checkHeight = 1100;
            heightKey = String(checkHeight);
        }
        if (checkHeight > 1600) {
            notification.style.color = "#f26c4f";
        }

    }
    if (windowCountKey === 'three') {
        windowTypeKey === "default";
        checkWidth = Number(widthKey);
        checkHeight = Number(heightKey);
        if (checkWidth < 1700) {
            inputWidth.value = '1700';
            checkWidth = 1700;
            widthKey = String(checkWidth);

        }
        if (checkWidth > 2200) {
            notification.style.color = "#f26c4f";

        }
        if (checkHeight < 1500) {
            inputHeight.value = '1500';
            checkHeight = 1500;
            heightKey = String(checkHeight);
        }
        if (checkHeight > 1800) {
            notification.style.color = "#f26c4f";
        }
    }
    console.log('Ключ количества секций - ' + windowCountKey);
    console.log('Ключ типа секций - ' + windowTypeKey);
    console.log('Ключ ширины - ' + widthKey);
    console.log('Ключ высоты - ' + heightKey);
    result = windowObject[windowCountKey][windowTypeKey][widthKey][heightKey];
    console.log(result + ' - цена размера окна')
}

function getCoeff() {
    b = coeffs[k][typeProfileValue];
    console.log(k + ' - коэфф фирмы')
    console.log(b + ' - коэфф')
    totalCoeff = b * k;
    console.log(totalCoeff + ' - итоговый коэфф');
}

function renderResult() {

    totalResult = Math.round(totalCoeff * result);
    console.log(totalResult + ' - итоговая цена')
    outputValue.textContent = totalResult + ' руб';
    outputMoscowValue.textContent = Math.round(totalResult * 1.7) + ' руб';
    if (isNaN(totalResult) || result === undefined) {
        outputValue.textContent = '0 руб';
        outputMoscowValue.textContent = '0 руб';
    }
    if (windowCountKey === 'one' && checkWidth > 1200 || windowCountKey === 'one' && checkHeight > 1500) {
        outputValue.textContent = '0 руб';
        outputMoscowValue.textContent = '0 руб';
    }
    if (windowCountKey === 'two' && checkWidth > 1600 || windowCountKey === 'two' && checkHeight > 1600) {
        outputValue.textContent = '0 руб';
        outputMoscowValue.textContent = '0 руб';
    }
    if (windowCountKey === 'three' && checkWidth > 2200 || windowCountKey === 'three' && checkHeight > 1800) {
        outputValue.textContent = '0 руб';
        outputMoscowValue.textContent = '0 руб';
    }
    if (outputValue.textContent !== '0 руб') {
        notification.style.color = "white";
    }

}
