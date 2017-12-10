import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  View
} from 'react-native'

import OrderHeader from '../components/OrderHeader'
import SmallItem from '../components/SmallItem'
import BottomButton from '../components/BottomButton'

class Assign extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.container}>
        <OrderHeader
          step={2}
          title={'Assign Orders'}
        />
        <View style={styles.divideButton}>
          <Text style={styles.divideText}>
            Divide All items Equally
          </Text>
        </View>
        <View style={styles.tabContainer}>
          <Text style={styles.tabText}>
            Items
          </Text>
          <Text style={styles.tabText}>
            Assign
          </Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          <View style={{padding: 10,marginBottom: 50}}>
            {(this.props.order.order).map((o,i)=>
              <SmallItem
                key={i}
                left={o.ammount}
                middle={o.name}
                right={'https://i.imgur.com/1fnQxDJ.png'}
                price={o.price * o.ammount}/>
            )}
            <SmallItem left={2} middle={'Extreme Berry Juice'} right={'https://i.imgur.com/3oo5D6a.png'} price={150000}/>
            <SmallItem left={1} middle={'Roast Chicken'} right={'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'} price={125000}/>
            <SmallItem left={1} middle={'Breakfast Grandslam'} right={'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'} price={75000}/>
            <SmallItem left={1} middle={'Blueberry French Toast'} right={'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'} price={75000}/>
          </View>
        </ScrollView>
        <BottomButton
          leftTop={`${this.props.order.order.length + 7} Items`}
          leftBottom={this.props.order.totalPrice + 425000}
          right={'Next'}
          navigate='Checkout'
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10,
    flex: 1
  },
  contentContainer:{
    padding: 10,
    marginBottom: 20
  },
  divideButton:{
    width: Dimensions.get('window').width * 7/9,
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  divideText:{
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    alignSelf: 'center'
  },
  tabContainer:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 40
  },
  tabText:{
    color: '#16a187'
  }
})

const mapStateToProps = (state) =>{
  return{
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Assign)
