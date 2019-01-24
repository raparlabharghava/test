export default function ItemReducer(state, { type, item } ){
    switch(type){
        case "addItem":
            return {
                ...state,
                items: [...state.items, item]
            }
        case "removeItem":
            return {
                ...state,
                items: state.items.filter(listItem => item.id !== listItem.id)
            } 
            
        case "updateItem":
            return {
                ...state,
                items: state.items.map(li => li.id === item.id ? item : li)
            }
            
        default:
            return state;
    }
}