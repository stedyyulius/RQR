import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

const defaultFontSize = 16

class Item extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View style={styles.container}>
        {(this.props.left.toString().split(':')[0] === 'https')
        ? <Image source={{uri:this.props.left}} style={styles.leftImage} />
        : <Text style={styles.leftText}>{this.props.left}</Text>
      }
      {(this.props.price)
        ? <View style={styles.middle}>
            <Text style={styles.middleText}>
              {this.props.middle}
            </Text>
            <Text style={styles.middlePrice}>
              Rp {this.props.price}
            </Text>
          </View>
        : <View style={styles.middle}>
            <Text style={styles.middleText}>
              {this.props.middle}
            </Text>
          </View>
      }
        <View style={styles.right}>
          {(this.props.right.toString().split(':')[0] === 'https')
          ? <Image source={{uri:this.props.right}} style={styles.rightImage} />
          : <Text style={styles.rightText}>Rp {this.props.right}</Text>
        }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 3
  },
  leftImage: {
    borderRadius: 40,
    width: 40,
    height: 40
  },
  leftText:{
    color: 'black',
    fontSize: defaultFontSize,
    fontWeight: '300'
  },
  middle:{
    flex: 1,
    marginLeft: 15
  },
  middleText:{
    fontSize: defaultFontSize,
    fontWeight: '300',
    color: 'black'
  },
  middlePrice:{
    fontSize: 12,
    color:'black',
  },
  right:{
    marginRight: 30,
    alignSelf: 'flex-end',
  },
  rightImage:{
    width: 30,
    height: 30,
    borderRadius: 30,
    alignSelf: 'center'
  },
  rightText:{
    fontSize: defaultFontSize,
    fontWeight: '300',
    color: 'black'
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

export default connect (mapStateToProps,mapDispatchToProps)(Item)
