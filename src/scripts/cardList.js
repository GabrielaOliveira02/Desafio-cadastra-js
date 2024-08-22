export function cardList(products) {
  const listContainer = document.getElementById("listContainer");

  listContainer.innerHTML = "";

  products.forEach((product) => {
    const card = createCardProducts(product);
    listContainer.appendChild(card);
  });
}


function showSpinner() {
  document.getElementById('spinner').classList.remove('hidden'); 
  document.getElementById('listContainer').classList.add('hidden'); 
}

function hideSpinner() {
  document.getElementById('spinner').classList.add('hidden'); 
  document.getElementById('listContainer').classList.remove('hidden'); 
}



function createCardProducts(products) {
  const li = document.createElement("li");
  li.classList.add("card");

  const img = document.createElement("img");
  const divImg = document.createElement("div");
  img.src = products.img;
  img.alt = "";
  divImg.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = products.name;

  const p = document.createElement("p");
  p.textContent = `R$ ${products.price}`;

  const span = document.createElement("span");
  span.textContent = products.sale;

  const button = document.createElement("button");
  button.classList.add("button-shop");
  button.textContent = "COMPRAR";

  listContainer.append(li);
  li.appendChild(divImg);
  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(span);
  li.appendChild(button);

  return li;
}





// export function renderFilter(products) {
//   const filterButtons = document.querySelectorAll("#filterItem, .size-option");
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   const categoryOptions = document.querySelectorAll('input[name="category"]');

//   const applyFilters = () => {
//     showSpinner(); 

//     setTimeout(() => {
//       const selectedFilters = getSelectedFilters(
//         checkboxes,
//         filterButtons,
//         categoryOptions
//       );
//       const filteredProducts = productFilter(products, selectedFilters);
//       cardList(filteredProducts);
    
//       hideSpinner(); 
//     }, 2000); 
//     // const selectedFilters = getSelectedFilters(
//     //   checkboxes,
//     //   filterButtons,
//     //   categoryOptions
//     // );
//     // const filteredProducts = productFilter(products, selectedFilters);
//     // cardList(filteredProducts);
//   };

//   filterButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       if (event.target.tagName === "BUTTON") {
//         event.target.classList.toggle("selected");
//       }
//       applyFilters();
//     });
//   });

//   checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", applyFilters);
//   });

//   categoryOptions.forEach((option) => {
//     option.addEventListener("change", applyFilters);
//   });
// }




export function renderFilter(products) {
  const filterButtons = document.querySelectorAll("#filterItem, .size-option");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const categoryOptions = document.querySelectorAll('input[name="category"]');
  const noProductsMessage = document.getElementById('no-products-message'); 
  const spinner = document.getElementById('spinner'); 

  const applyFilters = () => {
    noProductsMessage.classList.remove('show'); 
    showSpinner(); 

    setTimeout(() => {
      const selectedFilters = getSelectedFilters(
        checkboxes,
        filterButtons,
        categoryOptions
      );
      const filteredProducts = productFilter(products, selectedFilters);

      if (filteredProducts.length === 0) {
        noProductsMessage.classList.add('show'); 
        cardList([]); 
      } else {
        noProductsMessage.classList.remove('show'); 
        cardList(filteredProducts);
      }

      hideSpinner(); 
    }, 1000); 
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        event.target.classList.toggle("selected");
      }
      applyFilters();
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", applyFilters);
  });

  categoryOptions.forEach((option) => {
    option.addEventListener("change", applyFilters);
  });
}




function getSelectedFilters(checkboxes, filterButtons, categoryOptions) {
  return {
    colors: Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked && checkbox.name !== "price")
      .map((checkbox) => checkbox.name),
    prices: Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked && checkbox.name === "price")
      .map((checkbox) => ({
        min: parseFloat(checkbox.dataset.priceMin),
        max: parseFloat(checkbox.dataset.priceMax),
      })),
    sizes: Array.from(filterButtons)
      .filter(
        (button) => button.classList.contains("selected") && button.dataset.size
      )
      .map((button) => button.dataset.size),
    category:
      Array.from(categoryOptions)
        .filter((option) => option.checked)
        .map((option) => option.value)[0] || null,
  };
}

function productFilter(array, selectedFilters) {
  let filteredProducts = array;

  if (selectedFilters.colors.length) {
    filteredProducts = filteredProducts.filter((item) =>
      selectedFilters.colors.includes(item.color)
    );
  }

  if (selectedFilters.prices.length) {
    filteredProducts = filteredProducts.filter((item) => {
      const itemPrice = parseFloat(item.price.replace(",", "."));
      return selectedFilters.prices.some(
        (priceRange) =>
          itemPrice >= priceRange.min && itemPrice <= priceRange.max
      );
    });
  }

  if (selectedFilters.sizes.length) {
    filteredProducts = filteredProducts.filter((item) =>
      selectedFilters.sizes.includes(item.size)
    );
  }

  if (selectedFilters.category) {
    filteredProducts = filteredProducts.sort((a, b) => {
      if (selectedFilters.category === "mais recente") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (selectedFilters.category === "menor preço") {
        return (
          parseFloat(a.price.replace(",", ".")) -
          parseFloat(b.price.replace(",", "."))
        );
      } else if (selectedFilters.category === "maior preço") {
        return (
          parseFloat(b.price.replace(",", ".")) -
          parseFloat(a.price.replace(",", "."))
        );
      }
      return 0;
    });
  }

  return filteredProducts;
}



export function addProducts(products) {
  const buttonAdd = document.getElementById("button-add"); 
  const listContainer = document.getElementById("listContainer");
  let currentIndex = 0;
  const productsPerPage = 3;

  function loadMore() {
    const nextProducts = products.slice(currentIndex, currentIndex + productsPerPage);
    currentIndex += productsPerPage;

    nextProducts.forEach((product) => {
      const card = createCardProducts(product);
      listContainer.appendChild(card);
    });

    if (currentIndex >= products.length) {
      buttonAdd.disabled = true;
      buttonAdd.textContent = "Nenhum produto disponível";
    }
  }

  buttonAdd.addEventListener('click', () => {
    loadMore();
  });

  return loadMore();
}









