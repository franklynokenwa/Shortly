export const Increment = (incrementBy) => {
    return({
      type:"INCREMENT",
      payLoad:incrementBy
    })
  }
  
 export const Decrement = () => {
    return({
      type:"DECREMENT"
    })
  }