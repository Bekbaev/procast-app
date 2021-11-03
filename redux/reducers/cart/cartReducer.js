const initialState = {
    products: {} ,
    totalPrice: 0,
    totalCount: 0,
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {
            if(state.products[action.payload.id]){
                state.products[action.payload.id].count++;
                return { ...state };
            }else {
                action.payload.count = 1;
                const newProducts = {...state.products, [action.payload.id]: action.payload};
                return {
                    ...state,
                    products: newProducts,
                };
            }
        }
        case "REMOVE_PRODUCT_FROM_CART": {
            if(state.products[action.payload].count > 1){
                state.products[action.payload].count--;
            }else {
                delete state.products[action.payload];
            }

            return { ...state };
        }

        default:
            return state;
    }
};

export default cartReducer;