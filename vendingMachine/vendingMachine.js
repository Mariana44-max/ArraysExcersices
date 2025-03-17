
const products = ["Soda", "Chips", "Candy", "Juice", "Gum"];
const stock = [3, 2, 0, 5, 1];

const updateInventory = () => {
    const list = document.getElementById("inventory-list");
    list.innerHTML = "";
    products.forEach((product, index) => {
        list.innerHTML += `<li>${index} - ${product} (Stock: ${stock[index]})</li>`;
    });
};

const suggestProduct = () => {
    const available = stock.findIndex(s => s > 0);
    return available !== -1 ? ` Try ${products[available]} instead.` : " No products available.";
};

const buyProduct = () => {
    const code = parseInt(document.getElementById("product-code").value);
    const message = document.getElementById("message");
    
    if (isNaN(code) || code < 0 || code >= products.length) {
        message.textContent = "Invalid code. Please enter a valid product code.";
        return;
    }
    
    if (stock[code] > 0) {
        stock[code]--;
        message.textContent = `You bought a ${products[code]}. Enjoy!`;
    } else {
        message.textContent = `Out of stock!${suggestProduct()}`;
    }
    
    updateInventory();
};

document.getElementById("buy-button").addEventListener("click", buyProduct);
updateInventory();