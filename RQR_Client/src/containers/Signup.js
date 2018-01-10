import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { setLogin } from '../actions'

class Signup extends Component{
  constructor(props){
    super(props)
    this.state={
      step: 1
    }
  }
  render(){
    return(
            <View style={styles.container}>
      {(this.state.step === 1)
      ? <View style={styles.credential}>
          <View style={styles.credentialInput}>
            <Text>
              First Name
            </Text>
            <TextInput />
          </View>
          <View style={styles.credentialInput}>
            <Text>
              Last Name
            </Text>
            <TextInput />
          </View>
          <TouchableOpacity style={styles.next} onPress={()=> this.setState({step:2})}>
            <Text style={styles.nextText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      : <View style={styles.credential}>
          <View style={styles.credentialInput}>
            <Text>
              Email Address
            </Text>
            <TextInput />
          </View>
          <View style={styles.credentialInput}>
            <Text>
              Create Password
            </Text>
            <TextInput />
          </View>
          <TouchableOpacity style={styles.next} onPress={()=> this.props.setLogin(true)}>
            <Text style={styles.nextText}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
    }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  credential:{
    padding: 10
  },
  credentialInput:{
    marginBottom: 20
  },
  next:{
    backgroundColor: '#16a187',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  nextText:{
    color: 'white'
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

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
