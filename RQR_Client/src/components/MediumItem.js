import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button
} from 'react-native'

const defaultFontSize = 18

class MediumItem extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.left}>
          {(this.props.left.toString().split(':')[0] === 'https')
          ? <Image source={{uri:this.props.left}} style={styles.leftImage} />
          : <Text style={styles.leftText}>{this.props.left}</Text>
        }
        </View>
        <Text style={styles.middle}>
          {this.props.middle}
        </Text>
        <View style={styles.right}>
          {(this.props.right)
            ? <Image source={{uri:this.props.right}} style={styles.rightImage} />
            : <TouchableOpacity style={styles.edit} onPress={()=>this.props.navigation.dispatch(NavigationActions.back())}>
                <Text style={styles.editText}>
                  Edit
                </Text>
              </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flex: 1,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  left:{
    marginRight: 15
  },
  leftImage:{
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  leftText:{
    color: 'black',
    fontSize: defaultFontSize,
    fontWeight: '200',
  },
  middle:{
    color: 'black',
    fontWeight: '100',
    fontSize: defaultFontSize,
    flex: 1
  },
  right:{
    margin: 15
  },
  rightImage:{
    width: 16,
    height: 10,
  },
  edit:{
    alignSelf: 'flex-end'
  },
  editText:{
    color: 'blue',
    fontSize: 17,
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

export default connect (mapStateToProps,mapDispatchToProps)(MediumItem)
