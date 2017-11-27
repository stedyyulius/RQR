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
  Button
} from 'react-native'

import CardOrder from '../components/CardOrder'

const participants =[{
  name: 'Stedy',
  icon: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'
},{
  name: 'Felix',
  icon: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/12096566_10153589536696427_3240500719548235275_n.jpg?oh=5772d7971a9bc39de1bf7a789cebff84&oe=5AA6AFB2'
},{
  name: 'Yere',
  icon: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/c1.0.160.160/p160x160/17884209_10155126257713764_4432106934479397568_n.jpg?oh=caf47838346efabee7d4c76ce996ec35&oe=5A968FBA'
}]

class Order extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Review Order`,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    header:(
      <View style={{alignItems:'center',borderBottomWidth:3}}>
        <Text style={{fontWeight:'bold',fontSize:20}}>
          {navigation.state.params.restaurant}
        </Text>
        <Text>
          Table No: {navigation.state.params.table}
        </Text>
      </View>
    )
  })

  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.participantContainer}>
            {(participants.map((p,i)=>
              <Image
                key={i}
                style={styles.participant}
                source={{uri:p.icon}} />
            ))}
          </View>
          <TouchableOpacity style={styles.edit}>
            <Button
              title="Edit"
              color="black"
              onPress={()=> this.props.navigation.dispatch(NavigationActions.back())}/>
          </TouchableOpacity>
          {(participants.map((o,i)=>
            <CardOrder icon={o.icon} name={o.name} key={i}/>
          ))}
          <Text style={{fontWeight:'bold'}}>
            Total: Rp{this.props.order.totalPrice * participants.length}
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.confirmButton}>
          <Button
            title="Confirm"
            color="black"
            onPress={()=> navigate('Checkout')} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 15
  },
  participantContainer:{
    borderWidth: 2,
    borderRadius: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    marginBottom: 15
  },
  participant:{
    borderRadius: 20,
    width: 30,
    height: 30,
    marginLeft: 10
  },
  confirmButton:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  edit:{
    width: 70,
    alignSelf: 'flex-end'
  },
  space:{
    flex: 1
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

export default connect (mapStateToProps,mapDispatchToProps)(Order)
