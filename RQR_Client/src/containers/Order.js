import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button
} from 'react-native'

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
    return(
      <ScrollView style={styles.container}>
        <View style={styles.participantContainer}>
          {(participants.map((p,i)=>
            <Image
              key={i}
              style={styles.participant}
              source={{uri:p.icon}} />
          ))}
        </View>
        {(participants.map((o,i)=>
          <View key={i} style={styles.card}>
            <View style={{flexDirection: 'column'}}>
              <Image
                style={styles.person}
                source={{uri:o.icon}} />
              <Text style={{fontWeight: 'bold',marginBottom: 10}}>
                {o.name}
              </Text>
            </View>
            <View style={styles.menuOrdered}>
              <View style={styles.menuDetail}>
                <Text>
                  - Rib Eye Steak : 1
                </Text>
                <Text>
                  Rp 120.000
                </Text>
                <Text style={styles.price}>
                  Total: Rp 120.000
                </Text>
              </View>
            </View>
          </View>
        ))}
        <Button
          title="Confirm"
          color="black"
          onPress={()=> navigate('Checkout')} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingBottom: 50
  },
  participantContainer:{
    borderWidth: 2,
    borderRadius: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
  },
  participant:{
    borderRadius: 20,
    width: 30,
    height: 30,
    marginLeft: 10
  },
  card:{
    borderWidth: 2,
    borderRadius: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    padding: 10,
    margin: 10
  },
  person:{
    width: 130,
    height: 130,
    marginRight: 20
  },
  menuOrdered:{
    flexDirection: 'column',
  },
  menuDetail:{
    flex: 1
  },
  price:{
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Order)
