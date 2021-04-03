var items = []

document.querySelector('button[type=submit]')
    .addEventListener('click', () => {
        var productName = document.querySelector('input[name=product-name').value
        var productPrice = document.querySelector('input[name=product-price').value

        items.push({
            name: productName,
            price: productPrice
        })
        let productList = document.querySelector('.')
        items.map(function (al) {
            
        })
        
        alert(items[0].name)
})