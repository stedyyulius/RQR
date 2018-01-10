const initialState = null

export default (state = initialState,action) =>{
    if(action.type === 'Login'){
      return action.payload
    }
    else{
      return state
    }
}
