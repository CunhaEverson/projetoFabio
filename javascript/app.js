
const loadProducts = (produtos, idDivParent) => {
    const parentDiv = document.querySelector(idDivParent)
    produtos.forEach(produto => {

        const html = `
            <article class="prato">
                <img src="${produto.image}" alt="${produto.title}">
                <h4>${produto.title}</h4>
                <h4>${produto.value}</h4>
                <p>${produto.description}</p>
                <button type="button" onclick="modalFunc(${produto.id})">Solicitar Serviço</button>
            </article>
        `
        parentDiv.insertAdjacentHTML('beforeend', html)
    })
}
const modalFunc = (productId) => {
    const modal = document.querySelector('.modal')

    if (productId != null) {
        const produto = produtos.filter(produto => produto.id == productId)[0]
        if (produto != null) {
            modal.querySelector('#title').value = produto.title
        }
    }
    modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')

}
const whatsappLinkGenerator = (phoneNumber, productTitle, productQuantity, buyerName, buyerAddress, buyerPayment) => `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá, eu quero agendar: ${productTitle}; ${productQuantity}  - Em nome de: ${buyerName} - no endereço: ${buyerAddress} - A forma de pagamento será em: ${buyerPayment}`

const checkout = phoneNumber => {
    const form = document.querySelector('#form-product')
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        

        const productTitle = form.querySelector('input#title').value
        const productQuantity = form.querySelector('select#quantity').value
        const buyerName = form.querySelector('input#name').value
        const buyerAddress = form.querySelector('input#address').value
        const buyerPayment = form.querySelector('select#payment').value

        const whatsappUrl = whatsappLinkGenerator(phoneNumber, productTitle, productQuantity, buyerName, buyerAddress, buyerPayment)
        window.open (whatsappUrl);
    })
}

const search = (products, searchTerm) => products.filter(product => product.title.includes(`${searchTerm}`) || product.description.includes(`${searchTerm}`))

const loadSearch = (form, productsDivId) => {
    const productsDiv = document.querySelector(productsDivId)
    const inputSearch = form.querySelector('#inputSearch')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (inputSearch.value != '') {
            productsDiv.querySelectorAll('.prato').forEach(prato => {
                prato.remove()
            })

            const results = search(produtos, inputSearch.value)

            results.forEach(produto => {

                const html = `
                        <article class="prato">
                            <img src="${produto.image}" alt="${produto.title}">
                            <h4>${produto.title}</h4>
                            <h4>${produto.value}</h4>
                            <p>${produto.description}</p>
                            <button type="button" onclick="modalFunc(${produto.id})">Solicitar Serviço</button>
                        </article>
                    `
                productsDiv.insertAdjacentHTML('beforeend', html)
            })

        }
    })

    


}
/* GERAÇÃO DE id

function gerarUUID() {
    return 'FxxxxxxxxxxM'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
}*/





loadProducts(produtos, '#product-div')
checkout('558195156752')
loadSearch(document.querySelector('#formSearch'), '#product-div')