import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Text
} from 'react-native'

class Home extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View>
        <Text>
          Halo
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Home)
