import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Animated
} from 'react-native'

import CardOrder from '../components/CardOrder'
import { CreditCard } from '../components/CreditCard'

class Checkout extends Component{
  constructor(props){
    super(props)
    this.state={
      isPay: false
    }
  }
  static navigationOptions = ({ navigation }) => ({
  title: `Checkout`,
  headerTitleStyle: {
    alignSelf: 'center'
  },
})

  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <CardOrder
          icon={'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/12096566_10153589536696427_3240500719548235275_n.jpg?oh=5772d7971a9bc39de1bf7a789cebff84&oe=5AA6AFB2'}
          name="Felix"
        />
        <Button
          title="Pay for Myself"
          color="black"
          onPress={()=> this.setState({isPay: true})} />
        <View>
          {(this.state.isPay)
            ? <View>
                <View style={{marginTop: 30}}>
                  <Text style={styles.title}>
                    Payment Method
                  </Text>
                  <View>
                    <Text style={{fontWeight:'bold',borderBottomWidth:2}}>
                      Credit Card
                    </Text>
                    {CreditCard('https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png','Master Card')}
                    {CreditCard('https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png','Visa')}
                  </View>
                  <View>
                    <Text style={{fontWeight:'bold',borderBottomWidth:2}}>
                      Debit Card
                    </Text>
                    {CreditCard('http://sp.beritasatu.com/media/images/original/20111221144834840.jpg','BCA')}
                    {CreditCard('http://indowarta.com/wp-content/uploads/2017/05/logo.jpg','Mandiri')}
                  </View>
                </View>
              </View>
            : null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center'
  },
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
