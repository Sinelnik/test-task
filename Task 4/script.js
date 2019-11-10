document.addEventListener("DOMContentLoaded", function() {
    function showProductsList() {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET','http://54.39.188.42/',true);
        xhttp.send();
        xhttp.addEventListener('readystatechange', function() {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                const result = atob(xhttp.responseText);
                const productsList = JSON.parse(result);
                const body = document.body;
                for (var i = 0; i < productsList.length; i++) {
                    const displayProduct = document.createElement('div');
                    displayProduct.style.textAlign = 'center';
                    body.appendChild(displayProduct);
                    displayProduct.innerHTML = 
                    `<span>\#${productsList[i].id}</span></br>
                    <span>${productsList[i].title}</span></br>
                    <span>${productsList[i].sku}</span></br>
                    <img src="${productsList[i].image}" alt="" /></br>
                    <p>PRODUCT OPTIONS:</p>
                    <span>Metal type: ${productsList[i].options[0].metal_type}</span></br>
                    <span>Metal color: ${productsList[i].options[0].metal_color}</span></br>
                    <span>Stone shape: ${productsList[i].options[0].stone_shape}</span></br>
                    <span>Gemstone color: ${productsList[i].options[0].gemstone_color}</span>
                    <h3><span>${productsList[i].price.toString().substring(0,6)}</span>
                    </span>${productsList[i].currency}</span></h3>`
                }
            }
        })
    }
    showProductsList()
});