export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    ELIMINAR_ITEM: "ELIMINAR_ITEM"
}
export const totalCompras=(basket)=>{
return basket?.reduce((acum,miItem)=> miItem.price + acum,0)
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "ELIMINAR_ITEM":
            const indice = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket];
            
            if (indice>=0){
                newBasket.splice(indice,1)
            }else{
                console.log("error")
            }

            return {
                ...state,
                basket:newBasket,
            };
        default: return state;
    }
}
export default reducer;