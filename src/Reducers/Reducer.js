export default function Reducer(state, { type, payload } ){
    switch(type){
        case "updateName":
            return {name: payload};
        default:
            return state;
    }
}
