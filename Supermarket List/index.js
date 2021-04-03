var items = []

document.querySelector('button[type=submit]')
    .addEventListener('click', () => {
        var productName = document.querySelector('input[name=product-name')
        var productPrice = document.querySelector('input[name=product-price')

        items.push({
            name: productName.value,
            price: productPrice.value
        })
        let productList = document.querySelector('.products-list')
        let sum = 0
        productList.innerHTML=""
        items.map(function (val) {
            sum+=parseFloat(val.value)
            productList.innerHTML+= `
            
                        <div class="single-products-list">
                <h3 class="product-name">`+val.name+`</h3>
                <h3 class="product-price"><span>$`+val.price+`</span></h3>
            </div>          
            `            
        })
        alert(sum)
        sum = sum.toFixed(2)
        productName.value = ""
        productPrice.value = ""
        let sumElement = document.querySelector('.total-product-sum h2')
        sumElement.innerHTML = 'R$'+sum
})