import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState={
    items: [], 
    totalAmount:0
}

const cartReducer=(state, action)=>{
    if(action.type=== 'ADD'){
        const updatedItems=state.items.concat(action.item);
        const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount;
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider=props=>{

    const [cartState, dispatchartAction]=useReducer(cartReducer, defaultCartState);

    const addItemFromCartHandler=(item)=>{
        dispatchartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler=(id)=>{
        dispatchartAction({type: 'REMOVE', id: id});
    };
    
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemFromCartHandler,
        removeItem:removeItemFromCartHandler,
    };

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;
