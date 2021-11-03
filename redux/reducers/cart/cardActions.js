export const addProductToCart = (productObj) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: productObj,
});

export const removeProductFromCart = (productId) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: productId,
});
