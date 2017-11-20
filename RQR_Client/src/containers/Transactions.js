import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet
} from 'react-native'

class Transactions extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View>
        <Text>
          ini transaction
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

export default connect (mapStateToProps,mapDispatchToProps)(Transactions)
