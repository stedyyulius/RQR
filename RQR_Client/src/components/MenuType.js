import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import { filterMenu } from '../actions'

class TypeMenu extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View>
        <TouchableOpacity>
          <Text>
            {this.props.text}
          </Text>
        </TouchableOpacity>
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
    filterMenu: (text) => dispatch(filterMenu(text))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(TypeMenu)
