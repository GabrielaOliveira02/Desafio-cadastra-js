import { productsList } from "./products.js";
import { addProducts, cardList, renderFilter } from "./cardList.js";
import { handleCart, handleOrders, handleSelectFilters, initializeClearButton, setupFilterButtons, setupFilterButtonsDialog, setupToggleMenu } from "./modalCart.js";

lucide.createIcons();
cardList(productsList);
renderFilter(productsList);
handleCart();
handleOrders();
handleSelectFilters();
addProducts(productsList);
setupFilterButtons();
setupToggleMenu();
initializeClearButton();
setupFilterButtonsDialog();