let basket = [];

let deliveryCharge = 5;

//add to shopping basket
function addBasket(index) {

    //it is checked whether something already exists, if not, it is added to the basket variable
    if (basket.length === 0) {
        let dish = {
            name: myDishes[index].name,
            price: myDishes[index].price,
            amount: myDishes[index].amount
        }
        basket.push(dish);
        renderFullBasket();
        price();
        document.getElementById("basket-button").classList.toggle("active", true)

        //is executed when something is already in the basket
    } else {

        //this checks whether the name is in the basket.name array
        if (basket.some(dish => dish.name === myDishes[index].name)) {
            //takes the index from the name array in the basket and saves it to the variable
            let addBeverage = basket.findIndex(dish => dish.name === myDishes[index].name);
            basket[addBeverage].amount++; //zählt den amount hoch

            //if the dish does not yet exist, it will be added to the basket
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
//renders the complete shopping basket the first time it is added
function renderFullBasket() {
    document.getElementById('empty-basket').classList.add('d-none'); //blendet den leeren warenkorb aus
    let refContentFullBasket = document.getElementById('basket');
    refContentFullBasket.classList.remove('d-none'); //blendet den warenkorb ein
    for (let index = 0; index < basket.length; index++) {
        refContentFullBasket.innerHTML = getTemplateFullBasket(index)
    }

}
//renders the shopping basket
function renderBasket() {
    let refContentBasket = document.getElementById('added-dish');
    refContentBasket.innerHTML = "";
    for (let index = 0; index < basket.length; index++) {
        refContentBasket.innerHTML += getTemplateBasket(index)
    }
}
//increase number of orders
function additionalBasket(basketIndex) {
    basket[basketIndex].amount++;
    renderBasket();
    price();
}
//reduce number of orders
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
//delete order
function deleteBasket(basketIndex) {
    basket.splice(basketIndex, 1)
    if (basket.length === 0) {
        renderEmptyBasket()
    }
    renderBasket();
    price();
}
//send order
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
//function to reset from empty shopping basket
function renderEmptyBasket() {
    let refContentBasket = document.getElementById('added-dish');
    refContentBasket.innerHTML = "";
    let refContentFullBasket = document.getElementById('basket');
    refContentFullBasket.classList.add('d-none'); //blendet den warenkorb wieder
    refContentFullBasket.innerHTML = "";
    document.getElementById('empty-basket').classList.remove('d-none'); //blendet den leeren warenkorb wieder aus
    document.getElementById("basket-button").classList.toggle("active", false)
}
//determination of the price
function price() {
    let totalSub = 0;
    for (let index = 0; index < basket.length; index++) {
        let amount = basket[index].amount;
        let price = basket[index].price;
        totalSub += amount * price;
    }
    let newTotalSub = totalSub;
    let refContentSubTotal = document.getElementById("sub-total");
    refContentSubTotal.innerHTML = `${newTotalSub.toFixed(2).replace(".", ",")} €`;
    let finalAmount = newTotalSub + deliveryCharge;
    let refContentTotal = document.getElementById("final-total");
    refContentTotal.innerHTML = `${finalAmount.toFixed(2).replace(".", ",")} €`;
}
//opens the overlay
function openOverlay() {
    let refOverlay = document.getElementById("overlay");
    let hideScrollbar = document.getElementById("body-scrollbar");
    hideScrollbar.classList.add("hide-scrollbar");
    refOverlay.classList.remove("d-none");
    refOverlay.innerHTML = getOverlayTemplate();
    document.getElementById("resp-basket").classList.toggle("active", false)
}
//closes the overlay
function closeOverlay() {
    let closeOverlay = document.getElementById("overlay");
    let hideScrollbar = document.getElementById("body-scrollbar");
    hideScrollbar.classList.remove("hide-scrollbar");
    closeOverlay.classList.add("d-none");
}
//opens the responsive basket
function openBasket() {
    document.getElementById("resp-basket").classList.toggle("active", true)
}
//opecloses the responsive basket
function closeBasket() {
    document.getElementById("resp-basket").classList.toggle("active", false)
}

