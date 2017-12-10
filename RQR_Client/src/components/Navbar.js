import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.navTitle}>
        {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#16a187',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 50/640
  },
  navTitle:{
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
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

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
