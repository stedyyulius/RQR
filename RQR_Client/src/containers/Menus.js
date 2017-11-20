import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native'

class Menus extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  onSuccess(e) {
  Linking.openURL(e.data).catch(err => alert('An error occured', err));
}

  render(){
    return(
      <View style={styles.container}>
        <QRCodeScanner
           onRead={this.onSuccess.bind(this)}
           topContent={(
             <Text>
               Go to <Text style={styles.link} onPress={()=> Linking.openURL('wikipedia.org/wiki/QR_code')}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
             </Text>
           )}
           bottomContent={(
             <TouchableOpacity>
               <Text>OK. Got it!</Text>
             </TouchableOpacity>
           )}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: null,
    height: null
  },
  link:{
    color: 'blue'
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

export default connect (mapStateToProps,mapDispatchToProps)(Menus)
