import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import OrderHeader from '../components/OrderHeader'
import MediumItem from '../components/MediumItem'
import SmallItem from '../components/SmallItem'
import BottomButton from '../components/BottomButton'

class Checkout extends Component{
  constructor(props){
    super(props)
    this.state={
      isPay: false
    }
  }

  serviceCharge(){
    return this.props.order.totalPrice * 1/10
  }

  tax(){
    let price = this.props.order.totalPrice + this.serviceCharge()
    return price * 1/10
  }

  total(){
    return this.props.order.totalPrice + this.serviceCharge() + this.tax()
  }

  render(){
    const { navigate } = this.props.navigation
    return(
        <View style={styles.container}>
          <OrderHeader
            step={3}
            title='Check Out'
          />
          <ScrollView>
            <View style={{borderBottomWidth: 0.5}}>
              <View style={{flexDirection:'row'}}>
                <MediumItem left={this.props.participants[1].icon} middle={this.props.participants[1].name} />
              </View>
              <View>
                {(this.props.order.order.map((o,i)=>
                   <SmallItem key={i} left={o.ammount} middle={o.name} right={o.price * o.ammount}/>
                ))}
              </View>
              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotal}>
                  Subtotal
                </Text>
                <View style={{flex:1}}></View>
                <Text style={styles.subtotalPrice}>
                 Rp {this.props.order.totalPrice}
                </Text>
              </View>
              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotal}>
                  Service Charge(10%)
                </Text>
                <View style={{flex:1}}></View>
                <Text style={styles.subtotalPrice}>
                 Rp {this.serviceCharge()}
                </Text>
              </View>
              <View style={styles.subtotalContainer}>
                <Text style={styles.subtotal}>
                  Tax (10%)
                </Text>
                <View style={{flex:1}}></View>
                <Text style={styles.subtotalPrice}>
                 Rp {this.tax()}
                </Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>
                  Total
                </Text>
                <View style={{flex:1}}></View>
                <Text style={styles.totalPrice}>
                 Rp {this.total()}
                </Text>
              </View>
              <View>
              </View>
            </View>
            <MediumItem
              left='https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'
              middle='Stedy Yulius'
              right='https://i.imgur.com/fRzssfv.png'
            />
            <View style={styles.totalParticipantContainer}>
              <Text style={styles.total}>
                Total
              </Text>
              <View style={{flex:1}}></View>
              <Text style={styles.totalPrice}>
               Rp {120000}
              </Text>
            </View>
          </ScrollView>
          <BottomButton
            leftTop={`Paying For 2 People`}
            leftBottom={this.total() + 120000}
            right='Pay Now'
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
  title:{
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
  debitCard:{
    marginTop: 15
  },
  subtotalContainer:{
    flexDirection: 'row',
    marginTop: 10
  },
  subtotal:{
    fontSize: 16,
    color: 'black'
  },
  subtotalPrice:{
    fontSize: 16,
    color: 'black',
    marginRight: 30
  },
  totalContainer:{
    flexDirection: 'row',
    marginTop: 15
  },
  total:{
    fontSize: 16,
    color: 'black',
    fontWeight: '500'
  },
  totalPrice:{
    fontSize: 16,
    color: 'black',
    marginRight: 30,
    fontWeight: '500'
  },
  totalParticipantContainer:{
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 150
  },
})

const mapStateToProps = (state) =>{
  return{
    participants: state.participants,
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Checkout)
