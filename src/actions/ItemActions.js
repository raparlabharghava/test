export function addItemAction(item){
    return {
        type: "addItem",
        item
    }
}
export function removeItemAction(item){
    return {
        type: "removeItem",
        item
    }
}
export function updateItemAction(item){
    return {
        type: "updateItem",
        item
    }
}