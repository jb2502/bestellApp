let basket = [];

let deliveryCharge = 5;

//warenkorb hinzufügen
function addBasket(index) {

    //es wird geschaut, ob schon etwas vorhanden ist, wenn nicht, dann wird es der basket variable hinzugefügt
    if (basket.length === 0) {
        let dish = {
            name: myDishes[index].name,
            price: myDishes[index].price,
            amount: myDishes[index].amount
        }
        basket.push(dish);
        renderFullBasket();
        subTotal();
        finalPrice();

        //wird ausgefürht wenn schon etwas im basket drin ist
    } else {

        //hier wird geprüft, ob der name im basket.name-array drin ist
        if (basket.some(dish => dish.name === myDishes[index].name)) {
            //zieht sich den index aus dem name-array aus dem basket und speichert ihn der variable
            let addBeverage = basket.findIndex(dish => dish.name === myDishes[index].name);
            basket[addBeverage].amount++; //zählt den amount hoch

            //wenn das dish noch nicht vorhanden ist, dannn wird es dem basket hinzugefügt
        } else {
            let dish = {
                name: myDishes[index].name,
                price: myDishes[index].price,
                amount: myDishes[index].amount
            }
            basket.push(dish);
        }
    }
    renderBasket();
    price();
}
//rendert beim ersten hinzufügen den kompletten warenkorb
function renderFullBasket() {
    document.getElementById('empty-basket').classList.add('d-none'); //blendet den leeren warenkorb aus
    document.getElementById('empty-resp-basket').classList.add('d-none'); //blendet den leeren warenkorb aus
    let refContentFullBasket = document.getElementById('basket');
    refContentFullBasket.classList.remove('d-none'); //blendet den warenkorb ein
    document.getElementById('empty-basket').classList.add('d-none'); //blendet den leeren warenkorb aus
    let refContentFullRespBasket = document.getElementById('resp-basket');
    refContentFullRespBasket.classList.remove('d-none'); //blendet den warenkorb ein
    for (let index = 0; index < basket.length; index++) {
        refContentFullBasket.innerHTML = getTemplateFullBasket(index)
        refContentFullRespBasket.innerHTML = getTemplateFullRespBasket(index)
    }

}
//rendert den warenkorb
function renderBasket() {
    let refContentBasket = document.getElementById('added-dish');
    refContentBasket.innerHTML = "";
    let refContentRespBasket = document.getElementById('added-dish-resp');
    refContentRespBasket.innerHTML = "";
    for (let index = 0; index < basket.length; index++) {
        refContentBasket.innerHTML += getTemplateBasket(index)
        refContentRespBasket.innerHTML += getTemplateBasket(index)
    }
}
//anzahl bestellung vergrößern
function additionalBasket(basketIndex) {
    basket[basketIndex].amount++;
    renderBasket();
    price();
}
//anzahl bestellung verringern
function removeBasket(basketIndex) {
    basket[basketIndex].amount--;
    if (basket[basketIndex].amount === 0) {
        basket.splice(basketIndex, 1);
        if (basket.length === 0) {
            renderEmptyBasket()
        }

    }
    renderBasket();
    price();
}
//bestellung löschen
function deleteBasket(basketIndex) {
    basket.splice(basketIndex, 1)
    if (basket.length === 0) {
        renderEmptyBasket()
    }
    renderBasket();
    price();
}
//bestellung abschicken
function sendDelivery() {
    while (basket.length > 0) {
        basket.pop();
        renderBasket()
        if (basket.length === 0) {
            renderEmptyBasket()
        }
    }
    openOverlay()
}
//funktion zum zurückstellen aus leeren warenkorb
function renderEmptyBasket() {
    let refContentBasket = document.getElementById('added-dish');
    refContentBasket.innerHTML = "";
    let refContentFullBasket = document.getElementById('basket');
    refContentFullBasket.classList.add('d-none'); //blendet den warenkorb wieder
    refContentFullBasket.innerHTML = "";
    document.getElementById('empty-basket').classList.remove('d-none'); //blendet den leeren warenkorb wieder aus

    let refContentRespBasket = document.getElementById('added-dish-resp');
    refContentRespBasket.innerHTML = "";
    let refContentFullRespBasket = document.getElementById('resp-basket');
    refContentFullRespBasket.classList.remove('d-none'); //blendet den warenkorb ein
    refContentFullRespBasket.innerHTML = "";
    document.getElementById('empty-resp-basket').classList.remove('d-none'); //blendet den leeren warenkorb aus
}
//führt alle funktionen zur preiserrechnung zusammen
function price() {
    subTotal();
    finalPrice();
}
//errechnen zwischensumme
function subTotal() {
    let totalSub = 0;
    for (let index = 0; index < basket.length; index++) {
        let amount = basket[index].amount;
        let price = basket[index].price;

        totalSub += amount * price;
    }
    let newTotalSub = totalSub;
    let refContentSubTotal = document.getElementById("sub-total");
    refContentSubTotal.innerHTML = `${newTotalSub.toFixed(2).replace(".", ",")} €`;
    let refContentRespSubTotal = document.getElementById("sub-total-resp");
    refContentRespSubTotal.innerHTML = `${newTotalSub.toFixed(2).replace(".", ",")} €`;
    return
}
//errechnen gesamtpreis
function finalPrice() {
    let totalSub = 0;
    for (let index = 0; index < basket.length; index++) {
        let amount = basket[index].amount;
        let price = basket[index].price;

        totalSub += amount * price;
    }
    let finalAmount = totalSub + deliveryCharge;
    let refContentSubTotal = document.getElementById("final-total");
    refContentSubTotal.innerHTML = `${finalAmount.toFixed(2).replace(".", ",")} €`;
    let refContentRespSubTotal = document.getElementById("final-total-resp");
    refContentRespSubTotal.innerHTML = `${finalAmount.toFixed(2).replace(".", ",")} €`;
    return
}
//öffnet das overlay
function openOverlay() {
    let refOverlay = document.getElementById("overlay");
    let hideScrollbar = document.getElementById("body-scrollbar");
    hideScrollbar.classList.add("hide-scrollbar");
    refOverlay.classList.remove("d-none");
    refOverlay.innerHTML = getOverlayTemplate();

}
//schließt das overlay
function closeOverlay() {
    let closeOverlay = document.getElementById("overlay");
    let hideScrollbar = document.getElementById("body-scrollbar");
    hideScrollbar.classList.remove("hide-scrollbar");
    closeOverlay.classList.add("d-none");
}
//zeigt den warenkorb im responsive
function showBasket() {
    let showHideBasket = document.getElementById("respon-basket");
    showHideBasket.classList.toggle("d-none")
}
