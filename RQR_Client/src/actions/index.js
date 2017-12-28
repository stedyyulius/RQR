import firebase from '../firebase'

export const filterMenu = (text) =>{
  return{
    type: 'Menus',
    payload: 'a'
  }
}

export const setOrder = (order) =>{
  return (dispatch) =>{
    firebase.database().ref('order').set(order)
    firebase.database()
            .ref('order')
            .on('value', (snapshot) => {
              dispatch({
                type: 'Order',
                payload: snapshot.val()
              })
            });
  }
}

export const setActiveTab = (height) =>{
  return{
    type: 'ActiveTab',
    payload: height
  }
}
