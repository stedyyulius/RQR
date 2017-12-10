import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

class OrderHeader extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.step}>
          Step {this.props.step} of 3
        </Text>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <Text style={styles.restaurant}>
          Abuba Steak
        </Text>
        {(this.props.step === 3)
          ? <Text>Paying For:</Text>
          : <Text>Participants:</Text>
        }

        <View style={styles.participantContainer}>
          {(this.props.participants.map((p,i)=>
            <Image
              key={i}
              style={styles.participant}
              source={{uri:p.icon}}
            />
          ))}
          {(this.props.step === 3)
            ? <TouchableOpacity>
                <Image
                  style={styles.participant}
                  source={{uri:'https://i.imgur.com/4NuH2f6.png'}}
                />
              </TouchableOpacity>
            : null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10
  },
  step:{
    marginBottom: 2.5
  },
  title:{
    fontSize: 28,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5
  },
  restaurant:{
    color: 'black',
    fontSize: 24,
    marginBottom: 5
  },
  participantContainer:{
    borderBottomWidth: 2,
    borderColor: 'grey',
    flexDirection: 'row',
    paddingBottom: 15
  },
  participant:{
    borderRadius: 20,
    width: 30,
    height: 30,
    marginLeft: 10
  },
})

const mapStateToProps = (state) =>{
  return{
    participants: state.participants
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(OrderHeader)
