import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const addtocart = (itemID) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const setCurrency = (value) => {
  return {
    type: ActionTypes.SET_CURRENCY,
    payload: {
      value,
    },
  };
};

export const removefromcart = (itemID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};
export const adjustqty = (itemID, value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
export const loadcurrentitem = (products, category) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: {
      category: category,
      items:
        category === ""
          ? products.data.category.products
          : products.data.category.products.filter(
              (a) => a.category === category
            ),
    },
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
