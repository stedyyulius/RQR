import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

class Friends extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={{flex:1}}>
        <Image source={{uri:'https://i.imgur.com/eiwaRLX.png'}} style={styles.friends} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  friends:{
    flex: 1,
    width: null,
    height: null
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

export default connect (mapStateToProps,mapDispatchToProps)(Friends)
