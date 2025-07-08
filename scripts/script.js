let basket = [];




//warenkorb hinzufügen
function addBasket(index) {

    //es wird geschaut, ob schon etwas vorhanden ist, wenn nicht, dann wird es der basket variable hinzugefügt
    if (basket.length === 0) {
        basket.push(myDishes[index]);
        renderFullBasket();

        //wird ausgefürht wenn schon etwas im basket drin ist
    } else {

        //hier wird geprüft, ob der name im basket.name-array drin ist
        if (basket.some(dish => dish.name === myDishes[index].name)) {
            //zieht sich den index aus dem name-array aus dem basket und speichert ihn der variable
            let addBeverage = basket.findIndex(dish => dish.name === myDishes[index].name);
            basket[addBeverage].amount++; //zählt den amount hoch

            //wenn das dish noch nicht vorhanden ist, dannn wird es dem basket hinzugefügt
        } else {
            basket.push(myDishes[index]);

        }
    }
    renderBasket();
}

function renderFullBasket() {
    document.getElementById('empty-basket').classList.add('d-none'); //blendet den leeren warenkorb aus
    let refContentFullBasket = document.getElementById('basket');
    refContentFullBasket.classList.remove('d-none'); //blendet den warenkorb ein
    for (let index = 0; index < basket.length; index++) {
        refContentFullBasket.innerHTML = getTemplateFullBasket(index)
    }
}

function renderBasket() {
    let refContentBasket = document.getElementById('added-dish');
    refContentBasket.innerHTML = "";
    for (let index = 0; index < basket.length; index++) {
        refContentBasket.innerHTML += getTemplateBasket(index)
    }
}

//anzahl bestellung vergrößern
function additionalBasket(basketIndex) {
    basket[basketIndex].amount++;
    renderBasket()
}

//anzahl bestellung verringern
function removeBasket(basketIndex) {
    basket[basketIndex].amount--;
    if (basket[basketIndex].amount === 0) {
        basket.splice(basketIndex, 1);
        if (basket.length === 0) {
            let refContentBasket = document.getElementById('added-dish');
            refContentBasket.innerHTML = "";
            let refContentFullBasket = document.getElementById('basket');
            refContentFullBasket.classList.add('d-none'); //blendet den warenkorb wieder
            refContentFullBasket.innerHTML = "";
            document.getElementById('empty-basket').classList.remove('d-none'); //blendet den leeren warenkorb wieder aus
        }

    }
    renderBasket()
}
//bestellung löschen
function deleteBasket(basketIndex) {
    basket.splice(basketIndex, 1)
    console.log(basket.splice(basketIndex, 1));

    if (basket.length === 0) {
        let refContentBasket = document.getElementById('added-dish');
        refContentBasket.innerHTML = "";
        let refContentFullBasket = document.getElementById('basket');
        refContentFullBasket.classList.add('d-none'); //blendet den warenkorb wieder
        refContentFullBasket.innerHTML = "";
        document.getElementById('empty-basket').classList.remove('d-none'); //blendet den leeren warenkorb wieder aus
    }
    renderBasket()
}