import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

class Checkout extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  static navigationOptions = ({ navigation }) => ({
  title: `Checkout`,
  headerTitleStyle: {
    alignSelf: 'center'
  },
})

  render(){
    return(
      <View>
        <Text>
          ini checkout
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

export default connect (mapStateToProps,mapDispatchToProps)(Checkout)
