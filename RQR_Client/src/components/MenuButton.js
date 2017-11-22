import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { filterMenu } from '../actions'

class MenuButton extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.buttonMenu}>
        <TouchableOpacity>
          <Button
            title={this.props.text}
            onPress={()=> this.props.filterMenu(this.props.text)}
            color="black" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonMenu:{
    width: 80,
    top: 112,
  }
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    filterMenu: (text) => dispatch(filterMenu(text))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(MenuButton)
