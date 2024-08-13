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
    const buttonApplication = document.getElementById("button-application")
    const modalContainer = document.querySelector("#container-modal-filters")

    buttonApplication.addEventListener('click', () => {
        modalContainer.close()
    })
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

export function setupToggleMenu() {
    const toggleButton = document.getElementById('selected-options-desktop');
    const hiddenDiv = document.querySelector('.hidden-selected');

    toggleButton.addEventListener('click', () => {
        hiddenDiv.classList.toggle('hidden-selected');
    });
}


export function initializeClearButton() {
    document.addEventListener('DOMContentLoaded', () => {
        const clearButton = document.getElementById('false-checked');
        
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                const checkboxes = document.querySelectorAll('#container-modal-filters input[type="checkbox"]');
                
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
                
                window.location.reload();
            });
        }
    });
}



export function setupFilterButtonsDialog() {
    const inputs = document.querySelectorAll('#container-modal-filters input[type="checkbox"]');
    const applyButton = document.getElementById('button-application');
    const clearButton = document.getElementById('false-checked');

    function updateButtonVisibility() {
        const anyChecked = Array.from(inputs).some(input => input.checked);
        if (anyChecked) {
            applyButton.classList.remove('hidden');
            clearButton.classList.remove('hidden');
        } else {
            applyButton.classList.add('hidden');
            clearButton.classList.add('hidden');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('change', updateButtonVisibility);
    });

    updateButtonVisibility();
}