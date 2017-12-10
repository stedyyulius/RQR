import React , { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

import Navbar from '../components/Navbar'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <Navbar title='Profile' />
        <Image source={{uri:'https://i.imgur.com/WSXBbUp.png'}} style={styles.profile}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile:{
    flex: 1,
    width: null,
    height: null,
  }
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Profile)
