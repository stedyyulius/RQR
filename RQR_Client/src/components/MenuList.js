import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

import { filterMenu } from '../actions'

class MenuList extends Component{
  constructor(props){
    super(props)
    this.state={
      ammount: 0
    }
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
            <View style={styles.stretch}>
              <TouchableOpacity style={styles.buttonMinus} onPress={()=>this.setState({ammount: this.state.ammount - 1})}>
                <Image style={styles.select} source={{uri:'http://www.pvhc.net/img157/gdvtflklbitxzfjwggsm.png'}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({ammount: this.state.ammount + 1})}>
                <Image style={styles.select} source={{uri:'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//plus1600.png'}} />
              </TouchableOpacity>
            </View>
            <View style={{flex:1}}>

            </View>
            <Text style={styles.ammount}>
              {(this.state.ammount < 0)
                ? 0
                : this.state.ammount
              }
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
    flexDirection: 'row',
  },
  item:{
    width: 150,
    height: 150,
    marginRight: 20
  },
  menuDetail:{
    flexDirection: 'column',
    flex: 1,
  },
  menuDetailTitle:{
    fontWeight: 'bold',
  },
  stretch:{
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonMinus:{
    marginRight:12
  },
  select:{
    width: 20,
    height: 20
  },
  ammount:{
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 20,
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
