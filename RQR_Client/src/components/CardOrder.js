import React , { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native'

class CardOrder extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.card}>
        <View style={{flexDirection: 'column'}}>
          <Image
            style={styles.person}
            source={{uri:this.props.icon}}
          />
          <Text style={{fontWeight: 'bold',marginBottom: 10,alignSelf:'center'}}>
            {this.props.name}
          </Text>
        </View>
        <View style={styles.menuOrdered}>
          <View style={styles.menuDetail}>
            {(this.props.order.order.map((o,i)=>
              <View key={i}>
                <Text>
                  - {o.name} : {o.ammount}
                </Text>
                <Text>
                  Rp {o.totalPrice}
                </Text>
              </View>
            ))}
            <Text style={styles.price}>
              Total: Rp {this.props.order.totalPrice}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(CardOrder)
