//hinzufügen des ganzen warenkorbs
function getTemplateFullBasket(index) {
    return `<div id="added-dish">
                        <div class="basket-under-headline">
                            <strong>${basket[index].name}</strong>
                        </div>
                        <div class="choose-basket">
                            <div class="added-dish">
                                <div onclick="removeBasket(${index})"><img src="./assets/icons/remove_shopping_cart.png" alt="remove"></div>
                                <div style="width: auto;"id="amount">${basket[index].amount}x</div>
                                <div onclick="additionalBasket(${index})"><img src="./assets/icons/add_shopping_cart.png" alt="add"></div>
                            </div>
                            <div style="width: auto;">${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",")} €</div>
                            <div onclick="deleteBasket(${index})"><img src="./assets/icons/delete.png" alt="delete"></div>
                        </div>
                    </div>
                    <div>
                        <div class="separator-container"></div>
                        <div class="costs">
                            <div>Zwischensumme:</div>
                            <div id="sub-total">X,XX €</div>
                        </div>
                        <div class="costs">
                            <div>Lieferkosten:</div>
                            <div>${deliveryCharge.toFixed(2).replace(".", ",")} €</div>
                        </div>
                        <div class="costs">
                            <div><strong>Gesamtsumme:</strong></div>
                            <div><strong id="final-total">X,XX €</strong></div>
                        </div>
                        <div class="btn-container">
                            <button onclick="sendDelivery()">Bestellen <img src="./assets/icons/shopping_cart_checkout.png"
                                    alt="checkout"></button>
                                    <div class="basket-down-btn" onclick="closeBasket()"><img src="./assets/icons/arrow_circle_down.svg"
                                    alt="down"></div>
                        </div>
                    </div>`
}
//wenn dish vorhanden nicht ganzen warenkorb hinzufügen
function getTemplateBasket(index) {
    return `<div class="basket-under-headline">
                            <strong>${basket[index].name}</strong>
                        </div>
                        <div class="choose-basket">
                            <div class="added-dish">
                                <div onclick="removeBasket(${index})"><img src="./assets/icons/remove_shopping_cart.png" alt="remove"></div>
                                <div style="width: auto;"id="amount">${basket[index].amount}x</div>
                                <div onclick="additionalBasket(${index})"><img src="./assets/icons/add_shopping_cart.png" alt="add"></div>
                            </div>
                            <div style="width: auto;">${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",")} €</div>
                            <div onclick="deleteBasket(${index})"><img src="./assets/icons/delete.png" alt="delete"></div>
                        </div>`
}
//overlay
function getOverlayTemplate() {
    return `<div onclick="event.stopPropagation()" class="dialog">
            <strong style="margin-bottom: 8px;">Ihre Bestellung ist unterwegs!</strong>
            <div class="move">
                <img class="add-basket" src="./assets/icons/delivery_truck_speed.png" alt="">
            </div>
            <button onclick="closeOverlay()" class="pop-up-button">Schließen</button>
        </div>`;
}