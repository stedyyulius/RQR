const initialState = 45

export default (state = initialState,action) =>{
    if(action.type === 'ActiveTab'){
      return action.payload
    }
    else{
      return state
    }
}
