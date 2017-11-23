const initialState = {
  order: [],
  totalPrice: 0
}

export default (state = initialState,action) =>{
    if(action.type === 'Order'){
      if(!action.payload){
        return initialState
      }
      return action.payload
    }
    else{
      return state
    }
}
