export let initialState = {
    cart: []
}


export function cartReducer(state = initialState, action) {
  
    switch (action.type) {

        case 'addToCart': {
            const existingItem = state.cart.find((item) => item.name === action.payload.name);
          
            if (existingItem) {
              return {
                ...state,
                cart: state.cart.map((item) =>
                  item.name === action.payload.name
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              };
            } else {
              return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
              };
            }
          }
          
        case 'removeFromCart': {
            const existingItem = state.cart.find((item) => item.name === action.payload.name);
          
            if (existingItem.quantity != 1) {
              return {
                ...state,
                cart: state.cart.map((item) =>
                  item.name === action.payload.name
                    ? { ...item, quantity: item.quantity - 1  }
                    : item
                ),
              };
            } else {
            return { ...state, cart: state.cart.filter(element => element.name !== action.payload.name) }}
        }
        default: return state
    }
}

export const addToCart = (payload) => {
    console.log(payload)
    return {
        type: 'addToCart',
        payload: payload
    }
}
export const removeFromCart = (payload) => {
    return {
        type: 'removeFromCart',
        payload: payload
    }
}
