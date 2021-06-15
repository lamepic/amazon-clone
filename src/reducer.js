export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET'
};

export const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case actionTypes.REMOVE_FROM_BASKET:
            let newBasket  = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0) {
                //item exist in the basket, remove it
                newBasket.splice(index, 1) 
            } else {
                console.warn (
                    `Can't remove product{id: ${action.id}} as it is not in the basket`
                );
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
};
