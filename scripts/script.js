let basket = [];


console.log(basket);

//warenkorb hinzufügen
function addBasket(index) {
    document.getElementById('empty-basket').classList.add('d-none'); //blendet den leeren warenkorb aus
    let refContentFullBasket = document.getElementById('basket');
    refContentFullBasket.classList.remove('d-none'); //blendet den warenkorb ein
    let refContentBasket = document.getElementById('added-dish');
    let refContentUpdateAmount = document.getElementById('amount');
    let refContentUpdatePrice = document.getElementById('price');

    //es wird geschaut, ob schon etwas vorhanden ist, wenn nicht, dann wird es der basket variable hinzugefügt zu den jeweiligen arrays
    if (basket.length == 0) {
        basket.push(myDishes[index]);
        refContentFullBasket.innerHTML = getTemplateFullBasket(index); //template des kompletten Warenkorbs wird aufgerufen

        //wird ausgefürht wenn schon etwas im basket drin ist
    } else {

        //hier wird geprüft, ob der name im basket.name-array drin ist
        if (basket.some(dish => dish.name === myDishes[index].name)) {

            //zieht sich den index aus dem name-array aus dem basket und speichert ihn der variable
            let addBeverage = basket.findIndex(dish => dish.name === myDishes[index].name);
            basket[addBeverage].amount++; //zählt den amount hoch
            basket[addBeverage].price = myDishes[index].price * basket[addBeverage].amount; //multipliziert den ursprünglichen preis mit der anzahl
            refContentUpdateAmount.innerHTML = getTemplateUpdateAmount(addBeverage);
            refContentUpdatePrice.innerHTML = getTemplateUpdatePrice(addBeverage);

            //wenn das dish noch nicht vorhanden ist, dannn wird es dem basket hinzugefügt
        } else {
            basket.push(myDishes[index]);
            refContentBasket.innerHTML += getTemplateBasket(index);
        }
        
    }


}
//hinzufügen des ganzen warenkorbs
function getTemplateFullBasket(index) {
    return `<div id="added-dish">
                        <div class="basket-under-headline">
                            <strong>${myDishes[index].name}</strong>
                        </div>
                        <div class="choose-basket">
                            <div class="added-dish">
                                <div><img src="./assets/icons/remove_shopping_cart.png" alt="remove"></div>
                                <div style="width: 30px; text-align: center;" id="amount">${myDishes[index].amount}x
                                </div>
                                <div><img src="./assets/icons/add_shopping_cart.png" alt="add"></div>
                            </div>
                            <div id="price">${myDishes[index].price.toFixed(2).replace(".", ",")} €</div>
                            <div><img src="./assets/icons/delete.png" alt="delete"></div>
                        </div>
                    </div>
                    <div>
                        <div class="separator-container"></div>
                        <div class="costs">
                            <div>Zwischensumme:</div>
                            <div>X,XX €</div>
                        </div>
                        <div class="costs">
                            <div>Lieferkosten:</div>
                            <div>X,XX €</div>
                        </div>
                        <div class="costs">
                            <div><strong>Gesamtsumme:</strong></div>
                            <div><strong>X,XX €</strong></div>
                        </div>
                        <div class="btn-container">
                            <button>Bestellen <img src="./assets/icons/shopping_cart_checkout.png"
                                    alt="checkout"></button>
                        </div>
                    </div>`
}
//wenn dish vorhanden nicht ganzen warenkorb hinzufügen
function getTemplateBasket(index) {
    return `<div class="basket-under-headline">
                            <strong>${myDishes[index].name}</strong>
                        </div>
                        <div class="choose-basket">
                            <div class="added-dish">
                                <div><img src="./assets/icons/remove_shopping_cart.png" alt="remove"></div>
                                <div style="width: 30px; text-align: center;" id="amount">${myDishes[index].amount}x</div>
                                <div><img src="./assets/icons/add_shopping_cart.png" alt="add"></div>
                            </div>
                            <div id="price">${myDishes[index].price.toFixed(2).replace(".", ",")} €</div>
                            <div><img src="./assets/icons/delete.png" alt="delete"></div>
                        </div>`
}
//updaten der anzahl
function getTemplateUpdateAmount(addBeverage) {
    return `<div style="width: 30px; text-align: center;" id="amount">${basket[addBeverage].amount}x</div>`
}
//updaten des preises
function getTemplateUpdatePrice(addBeverage) {
    return `<div id="price">${basket[addBeverage].price.toFixed(2).replace(".", ",")} €</div>`
}



//anzahl bestellung vergrößer
//anzahl bestellung verringern
//bestellung löschen
