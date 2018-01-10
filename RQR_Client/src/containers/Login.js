import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { setLogin } from '../actions'

class Login extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Login`,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    header: null
  })

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.login}>
          Log In
        </Text>
        <View style={styles.image}></View>
        {/* <TouchableOpacity style={styles.signup} onPress={()=>this.props.setLogin(true)}>
          <Text style={styles.signupText}>
            Login
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.signup} onPress={()=>this.props.navigation.navigate('Signup')}>
          <Text style={styles.signupText}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1
  },
  login:{
    color: 'black',
    alignSelf: 'flex-end',
    margin: 25
  },
  signup:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#16a187',
    padding: 10,
    marginTop: 50,
    margin: 20,
    alignItems: 'center',
  },
  signupText:{
    color: '#16a187'
  },
  image:{
    marginTop: 30,
    alignSelf: 'center',
    width: 191,
    height: 143,
    backgroundColor: '#979797'
  }
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setLogin: (status) => dispatch(setLogin(status))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
