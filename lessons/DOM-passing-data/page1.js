console.log("it works from page 1");

function gotoPage2() {
  let product = document.getElementById("product");

  let quantity = document.getElementById("quantity");

  window.location.href = `./page2.html?product=${product.value}&quantity=${quantity.value}`;
}
