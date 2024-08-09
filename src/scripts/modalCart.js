export function handleCart(){
    const button = document.querySelector("#show-modal")
    const modalContainer = document.querySelector("#modal-container")

    button.addEventListener('click', () => {
        modalContainer.showModal()
        
    closeCart();
    })
}


function closeCart(){
    const button = document.querySelector("#close-modal");
    const modalContainer = document.querySelector("#modal-container")

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}


export function handleOrders(){
    const button = document.querySelector("#button-select-modal")
    const modalContainer = document.querySelector("#container-modal-orders")

    button.addEventListener('click', () => {
        modalContainer.showModal()
        
        closeModalOrders();
    })
}


function closeModalOrders(){
    const button = document.querySelector("#close-modal-orders");
    const modalContainer = document.querySelector("#container-modal-orders")

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}


export function handleSelectFilters(){
    const button = document.querySelector("#button-filters-modal")
    const modalContainer = document.querySelector("#container-modal-filters")

    button.addEventListener('click', () => {
        modalContainer.showModal()
        
        closeModalFilters();
    })
}


function closeModalFilters(){
    const button = document.querySelector("#close-modal-filters");
    const modalContainer = document.querySelector("#container-modal-filters")

    button.addEventListener('click', () => {
        modalContainer.close()
    })
}

export function setupFilterButtons() {
    const colorButton = document.getElementById('color-button');
    const sizeButton = document.getElementById('size-button');
    const priceButton = document.getElementById('price-button');
    const colorOptions = document.getElementById('color-options');
    const sizeOptions = document.getElementById('size-options');
    const priceOptions = document.getElementById('price-options');

    colorButton.addEventListener('click', () => {
        colorOptions.classList.toggle('hidden');
    });

    sizeButton.addEventListener('click', () => {
        sizeOptions.classList.toggle('hidden');
    });

    priceButton.addEventListener('click', () => {
        priceOptions.classList.toggle('hidden');
    });

}
