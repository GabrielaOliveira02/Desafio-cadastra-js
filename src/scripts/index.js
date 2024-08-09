import { productsList } from "./products.js";
import { addProducts, cardList, renderFilter } from "./cardList.js";
import { handleCart, handleOrders, handleSelectFilters, setupFilterButtons } from "./modalCart.js";

lucide.createIcons();
cardList(productsList);
renderFilter(productsList);
handleCart();
handleOrders();
handleSelectFilters();
addProducts(productsList);
setupFilterButtons();