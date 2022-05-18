"use strict"
const START_PRISE = 30000;
const START_PERIOD = 30;
let currentSiteTypeCostCoefficient = 0,
    currentSiteTypePeriodCoefficient = 0,
    currentDesignCostCoefficient = 0,
    currentDesignPeriodCoefficient = 0,
    currentAdaptabilityCostCoefficient = 0,
    currentAdaptabilityPeriodCoefficient = 0;

function SiteType(name, costCoefficient, periodCoefficient) {
    this.name = name;
    this.costCoefficient = costCoefficient;
    this.periodCoefficient = periodCoefficient;
}

//console.log(new SiteType("Сайт услуг", 1.2));

let arrSiteType = [
    new SiteType("Сайт услуг", 1.2, 1.2),
    new SiteType("Интернет-магазин", 1.4, 1.4),
    new SiteType("Сайт-визитка", 1.7, 1.4),
    new SiteType("Лендинг", 3.2, 1.7),
    new SiteType("Сайт-визитка", 5.2, 5.2),
];

//console.log(arrSiteType);

function Design(name, costCoefficient, periodCoefficient) {
    this.name = name;
    this.costCoefficient = costCoefficient;
    this.periodCoefficient = periodCoefficient;
}

let arrDesign = [
    new Design("Минимализм", 3.2, 3.2),
    new Design("Рисованный (эскизный) стиль", 5.2, 5.2),
    new Design("Flat дизайн", 1.1, 1.1),
    new Design("Гранж", 2.7, 2.7),
    new Design("Organic & Natural", 4.2, 4.2),
];

function Adaptability(name, costCoefficient, periodCoefficient) {
    this.name = name;
    this.costCoefficient = costCoefficient;
    this.periodCoefficient = periodCoefficient;
}

let arrAdaptability = [
    new Adaptability("Адаптивный макет", 1.2, 1.2),
    new Adaptability("Отзывчивый макет", 3.2, 3.2),
    new Adaptability("Смешанный макет", 5.1, 5.1),
];
//---------------------------------------------------------------------------------------------------
let menySiteType = document.getElementById('siteType');
arrSiteType.forEach(function (item, index, array) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.name));
    li.setAttribute("value", index);
    li.setAttribute("class", "dropdown-item");
    li.setAttribute("onclick", "SetSiteType(this.innerHTML,this.value)");
    menySiteType.appendChild(li);
});

function SetSiteType(name, id) {
    document.getElementById('siteTypeChoice').innerHTML = "";
    document.getElementById('siteTypeChoice').appendChild(document.createTextNode(name));
    currentSiteTypeCostCoefficient = arrSiteType[id].costCoefficient;
    currentSiteTypePeriodCoefficient = arrSiteType[id].periodCoefficient;
    Calc(currentSiteTypeCostCoefficient,
        currentSiteTypePeriodCoefficient,
        currentDesignCostCoefficient,
        currentDesignPeriodCoefficient,
        currentAdaptabilityCostCoefficient,
        currentAdaptabilityPeriodCoefficient);
}
//---------------------------------------------------------------------------------------------------
let menyDesign = document.getElementById('design');
arrDesign.forEach(function (item, index, array) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.name));
    li.setAttribute("value", index);
    li.setAttribute("class", "dropdown-item");
    li.setAttribute("onclick", "SetDesign(this.innerHTML,this.value)");
    menyDesign.appendChild(li);
});

function SetDesign(name, id) {
    document.getElementById('designChoice').innerHTML = "";
    document.getElementById('designChoice').appendChild(document.createTextNode(name));
    currentDesignCostCoefficient = arrDesign[id].costCoefficient;
    currentDesignPeriodCoefficient = arrDesign[id].periodCoefficient;
    Calc(currentSiteTypeCostCoefficient,
        currentSiteTypePeriodCoefficient,
        currentDesignCostCoefficient,
        currentDesignPeriodCoefficient,
        currentAdaptabilityCostCoefficient,
        currentAdaptabilityPeriodCoefficient);
}
//---------------------------------------------------------------------------------------------------
let menyAdaptability = document.getElementById('adaptability');
arrAdaptability.forEach(function (item, index, array) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.name));
    li.setAttribute("value", index);
    li.setAttribute("class", "dropdown-item");
    li.setAttribute("onclick", "SetAdaptability(this.innerHTML,this.value)");
    menyAdaptability.appendChild(li);
});

function SetAdaptability(name, id) {
    document.getElementById('adaptabilityChoice').innerHTML = "";
    document.getElementById('adaptabilityChoice').appendChild(document.createTextNode(name));
    currentAdaptabilityCostCoefficient = arrAdaptability[id].costCoefficient;
    currentAdaptabilityPeriodCoefficient = arrAdaptability[id].periodCoefficient;
    Calc(currentSiteTypeCostCoefficient,
        currentSiteTypePeriodCoefficient,
        currentDesignCostCoefficient,
        currentDesignPeriodCoefficient,
        currentAdaptabilityCostCoefficient,
        currentAdaptabilityPeriodCoefficient);
}
//---------------------------------------------------------------------------------------------------

function Calc(currentSiteTypeCostCoefficient,
    currentSiteTypePeriodCoefficient,
    currentDesignCostCoefficient,
    currentDesignPeriodCoefficient,
    currentAdaptabilityCostCoefficient,
    currentAdaptabilityPeriodCoefficient) {

    //    prise = START_PRISE;
    //    period = START_PERIOD;

    let prise = START_PRISE *
        currentSiteTypeCostCoefficient *
        currentDesignCostCoefficient *
        currentAdaptabilityCostCoefficient;
    let period = START_PERIOD *
        currentSiteTypePeriodCoefficient *
        currentDesignPeriodCoefficient *
        currentAdaptabilityPeriodCoefficient;

    let cost = document.getElementById("cost");
    let period1 = document.getElementById("period");

    if ((prise != 0) && (period != 0)) {
        cost.innerHTML = "<b>" + Math.round(prise) + " &#8381;</b>";
        period1.innerHTML = Math.round(period) + " дн.";
    } else {
        cost.innerHTML = "<b>Выберите все пункты!</b>";
        period1.innerHTML = "Идет расчет...";
    };
}
