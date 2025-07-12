//adding the entire shopping basket
function getTemplateFullBasket(index) {
    return `<div id="added-dish">
                        <div class="basket-under-headline">
                            <strong>${basket[index].name}</strong>
                        </div>
                        <div class="choose-basket">
                            <div class="added-dish">
                                <div onclick="removeBasket(${index})"><img src="./assets/icons/remove_shopping_cart.svg" alt="remove"></div>
                                <div style="width: auto;"id="amount">${basket[index].amount}x</div>
                                <div onclick="additionalBasket(${index})"><img src="./assets/icons/add_shopping_cart.svg" alt="add"></div>
                            </div>
                            <div style="width: auto;">${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",")} €</div>
                            <div onclick="deleteBasket(${index})"><img src="./assets/icons/delete.svg" alt="delete"></div>
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
                            <button onclick="sendDelivery()">Bestellen <img src="./assets/icons/shopping_cart_checkout.svg"
                                    alt="checkout"></button>
                                    <div class="basket-down-btn" onclick="closeBasket()"><img src="./assets/icons/arrow_circle_down.svg"
                                    alt="down"></div>
                        </div>
                    </div>`
}
//if dish available do not add entire shopping basket
function getTemplateBasket(index) {
    return `<div class="basket-under-headline">
                            <strong>${basket[index].name}</strong>
                        </div>
                        <div class="choose-basket">
                            <div class="added-dish">
                                <div onclick="removeBasket(${index})"><img src="./assets/icons/remove_shopping_cart.svg" alt="remove"></div>
                                <div style="width: auto;"id="amount">${basket[index].amount}x</div>
                                <div onclick="additionalBasket(${index})"><img src="./assets/icons/add_shopping_cart.svg" alt="add"></div>
                            </div>
                            <div style="width: auto;">${(basket[index].price * basket[index].amount).toFixed(2).replace(".", ",")} €</div>
                            <div onclick="deleteBasket(${index})"><img src="./assets/icons/delete.svg" alt="delete"></div>
                        </div>`
}
//overlay
function getOverlayTemplate() {
    return `<div onclick="event.stopPropagation()" class="dialog">
            <strong style="margin-bottom: 8px;">Ihre Bestellung ist unterwegs!</strong>
            <div class="move">
                <img class="add-basket" src="./assets/icons/delivery_truck_speed.svg" alt="">
            </div>
            <button onclick="closeOverlay()" class="dialog-button">Schließen</button>
        </div>`;
}