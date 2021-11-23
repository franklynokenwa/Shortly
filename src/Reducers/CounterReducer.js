const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
          return state + action.payLoad;
        case "DECREMENT":
          return state - 1;
        default:
          return state
    }
    /*
    if(action.type === 'INCREMENT'){
        return state + 1;
    }else if(action.type === 'DECREMENT'){
        return state - 1;
    }*/
}
export default counterReducer