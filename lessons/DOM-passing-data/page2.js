console.log("it works from page2.js");

let queryString = window.location.search;
console.log(queryString);

let urlParams = new URLSearchParams(queryString);

console.log(urlParams.get("product"));
console.log(urlParams.get("quantity"));

let orderElement = document.getElementById("order");
let qty = urlParams.get("quantity");
let product = urlParams.get("product");
orderElement.textContent = `Your order you placed was ${qty} ${product}. `;
