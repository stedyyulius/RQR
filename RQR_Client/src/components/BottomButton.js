import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import { CreditCard } from './CreditCard'

class ButtonButton extends Component{
  render(){
    return(
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
          <View>
            {(!this.props.navigation)
              ? CreditCard('https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png','Visa')
              : null
            }
            <View style={{flexDirection:'row'}}>
              <Text style={styles.detailText}>
                {this.props.leftTop}
              </Text>
            </View>
            <Text style={styles.detailText}>
            Rp {this.props.leftBottom}
            </Text>
          </View>
        </View>
        <View style={styles.bottomRight}>
          <TouchableOpacity style={styles.button} onPress={()=>(this.props.navigation) ?this.props.navigation.navigate(this.props.navigate) :alert('Transaction Complete')}>
            <Text style={styles.buttonText}>
              {this.props.right}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center'
  },
  bottomLeft:{
    width: Dimensions.get('window').width / 2,
    backgroundColor: 'white',
    padding: 10,
  },
  bottomRight:{
    width: Dimensions.get('window').width / 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailText:{
    fontWeight: '500',
    fontSize: 16,
    color: 'black'
  },
  button:{
    borderRadius: 10,
    width: 163,
    height: 45,
    backgroundColor: '#16a187',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight: '300',
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

export default connect(mapStateToProps,mapDispatchToProps)(ButtonButton)
