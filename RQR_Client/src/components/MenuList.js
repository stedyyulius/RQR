import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

import { filterMenu } from '../actions'

class MenuList extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.itemContainer}>
        <Image
          style={styles.item}
          source={{uri:this.props.pic}} />
          <View style={styles.menuDetail}>
            <Text style={styles.menuDetailTitle}>
              {this.props.title}
            </Text>
            <Text>
              Rp 120.000
            </Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 15,
    margin: 5,
    flexDirection: 'row'
  },
  item:{
    width: 150,
    height: 150,
    marginRight: 20
  },
  menuDetail:{
    flexDirection: 'column'
  },
  menuDetailTitle:{
    fontWeight: 'bold',
    justifyContent: 'center'
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

export default connect (mapStateToProps,mapDispatchToProps)(MenuList)
