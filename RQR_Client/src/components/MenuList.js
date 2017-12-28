import React, { Component } from 'react'
import { FormattedCurrency } from 'react-native-globalize';
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button
} from 'react-native'

import { filterMenu, setOrder } from '../actions'

class MenuList extends Component{
  constructor(props){
    super(props)
    this.state={
      ammount: 0,
      isAdd: false
    }
  }

  setter(status){
    if(status === 'increase'){
      this.setState({ammount: this.state.ammount + 1})
    } else{
      this.setState({ammount: this.state.ammount - 1})
    }
  }

  async ammountHandler(status){
    let newOrder   = this.props.order.order
    let totalPrice = 0
    let totalAmmount = 0
    let counter    = 0
    await this.setter(status)

    let obj = {
      name:this.props.title,
      ammount:this.state.ammount,
      price:this.props.price,
      totalPrice: this.state.ammount * this.props.price
    }
    for(let j = 0; j < newOrder.length; j++){
      if(newOrder[j].name === this.props.title){
        newOrder[j] = obj
        counter += 1
      }
    }
    if(counter === 0){
      newOrder.push(obj)
    }

    for(let i = 0; i < newOrder.length; i++){
      if(newOrder[i].totalPrice <= 0){
        newOrder.splice(i,1)
      }
    }
    for(let x = 0; x < newOrder.length; x++){
      totalPrice += newOrder[x].totalPrice
      totalAmmount += newOrder[x].ammount
    }
    let serviceCharge = totalPrice / 10
    let subTotal = totalPrice + serviceCharge
    let tax = subTotal / 10
    let order = {
      order: newOrder,
      totalPrice: totalPrice,
      totalAmmount: totalAmmount,
      serviceCharge: serviceCharge / 10,
      subTotal: subTotal,
      tax:  tax,
      grandTotal: subTotal + tax
    }
    this.props.setOrder(order)
  }

  firstAdd(){
    this.ammountHandler('increase')
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
              {/* <FormattedCurrency
               value={this.props.price}
               currency="IDR"
               style={{ color: 'red' }}
             /> */}
             Rp{this.props.price}
            </Text>
            {(!this.state.ammount <= 0)
              ? <View style={styles.stretch}>
                  <TouchableOpacity style={styles.buttonMinus} onPress={()=>this.ammountHandler('decrease')}>
                    <Image style={styles.select} source={{uri:'http://www.pvhc.net/img157/gdvtflklbitxzfjwggsm.png'}} />
                  </TouchableOpacity>
                  <Text style={styles.ammount}>{this.state.ammount}</Text>
                  <TouchableOpacity onPress={()=>this.ammountHandler('increase')}>
                    <Image style={styles.select} source={{uri:'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//plus1600.png'}} />
                  </TouchableOpacity>
                </View>
              : <TouchableOpacity style={styles.add}>
                  <Button
                  title="Add"
                  onPress={()=>this.firstAdd()}
                  color="#16a187" />
                </TouchableOpacity>
            }
            <View style={{flex:1}}>

            </View>
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
    padding: 5,
    margin: 5,
    flexDirection: 'row',
  },
  item:{
    width: 70,
    height: 70,
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
    alignSelf: 'flex-end',
  },
  buttonMinus:{
    marginRight:0
  },
  select:{
    width: 20,
    height: 20
  },
  add:{
    width: 50,
    alignSelf: 'flex-end',
  },
  ammount:{
    marginRight: 5,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 15
  }
})

const mapStateToProps = (state) =>{
  return{
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    filterMenu: (text) => dispatch(filterMenu(text)),
    setOrder: (order) => dispatch(setOrder(order))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(MenuList)
