import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Dimensions
} from 'react-native'

import OrderHeader from '../components/OrderHeader'
import SmallItem from '../components/SmallItem'
import MediumItem from '../components/MediumItem'
import BottomButton from '../components/BottomButton'

class Order extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <OrderHeader
          step={1}
          title={'Confirm Order'}
          />
        <ScrollView>
          <View style={{flexDirection:'row'}}>
            <MediumItem left={this.props.participants[1].icon} middle={this.props.participants[1].name} navigation={this.props.navigation} />
          </View>
          {(this.props.order.order.map((o,i)=>
             <SmallItem key={i} left={o.ammount} middle={o.name} right={o.price * o.ammount}/>
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotal}>
              Subtotal
            </Text>
            <View style={{flex:1}}></View>
            <Text style={styles.subtotalPrice}>
             Rp {this.props.order.totalPrice}
            </Text>
          </View>
          <View style={styles.confirmContainer}>
            <View style={styles.confirm}>
              <Text style={styles.confirmText}>
                Confirm
              </Text>
            </View>
          </View>
        </ScrollView>
        <BottomButton
          leftTop={`${this.props.order.order.length} Items`}
          leftBottom={this.props.order.totalPrice}
          right='Next'
          navigate='Assign'
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: 'white',
    flex: 1
  },
  confirmContainer:{
    padding: 15,
    justifyContent: 'center',
    borderTopWidth: 0.5
  },
  confirm:{
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 4/9,
    height: Dimensions.get('window').height * 1/14,
    backgroundColor: '#16a187',
  },
  confirmText:{
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  subtotalContainer:{
    flexDirection: 'row',
    marginTop: 10
  },
  subtotal:{
    fontWeight: '500',
    fontSize: 16,
    color: 'black'
  },
  subtotalPrice:{
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    marginRight: 30
  }
})

const mapStateToProps = (state) =>{
  return{
    order: state.order,
    participants: state.participants
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Order)
