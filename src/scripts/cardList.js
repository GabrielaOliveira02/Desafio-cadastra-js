
export function cardList (products){
    const listContainer = document.getElementById('listContainer');
    console.log(listContainer)
    listContainer.innerHTML = '';

    products.forEach(product => {
        const card = createCardProducts(product)

        listContainer.appendChild(card)
    });
}



function createCardProducts(products) {
    const li = document.createElement('li');
    li.classList.add("card")

    const img = document.createElement('img');
    const divImg = document.createElement('div')
    img.src = products.img;
    img.alt = '';
    divImg.appendChild(img)

    const h2 = document.createElement('h2');
    h2.textContent = products.name;

    const p = document.createElement('p');
    p.textContent = products.price;

    const span = document.createElement('span');
    span.textContent = products.sale;

    const button = document.createElement('button');
    button.classList.add('button-shop');
    button.textContent = 'COMPRAR';

    listContainer.append(li)
    li.appendChild(divImg);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);
    li.appendChild(button);

    return li;
}

















// export function cardList (products) {
//     const listContainer = document.getElementById('listContainer');
//     if (!listContainer) {
//         console.error('listContainer element not found');
//         return;
//     }
//     console.log(listContainer);
//     listContainer.innerHTML = '';

//     products.forEach(product => {
//         const card = createCardProducts(product);
//         listContainer.appendChild(card);
//     });
// }

// function createCardProducts(product) {
//     const li = document.createElement('li');
//     li.classList.add("card");

//     const img = document.createElement('img');
//     const divImg = document.createElement('div');
//     img.src = product.img;
//     img.alt = '';
//     divImg.appendChild(img);

//     const h2 = document.createElement('h2');
//     h2.textContent = product.name;

//     const p = document.createElement('p');
//     p.textContent = product.price;

//     const span = document.createElement('span');
//     span.textContent = `até 3x de R$${product.sale}`;

//     const button = document.createElement('button');
//     button.classList.add('button-shop');
//     button.textContent = 'COMPRAR';

//     li.appendChild(divImg);
//     li.appendChild(h2);
//     li.appendChild(p);
//     li.appendChild(span);
//     li.appendChild(button);

//     return li;
// }

