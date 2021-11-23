const isLoggedReducer = (state = false, action) => {
    switch(action.type){
        case false:
          return !state;
        default:
          return state
    }
}
export default isLoggedReducer