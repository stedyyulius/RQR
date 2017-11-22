import React, { Component } from 'react'
import { connect } from 'react-redux'
import Camera from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import{
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  NavigatorAndroid,
  Image,
  Button,
  ScrollView
} from 'react-native'

import MenuButton from '../components/MenuButton'
import MenuType from '../components/MenuType'
import MenuList from '../components/MenuList'

class Menus extends Component{
  constructor(props){
    super(props)
    this.state={
      menus: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
  title: `Menus`,
  headerTitleStyle: {
    alignSelf: 'center'
  },
  header: null
})

  onSuccess(e) {
    this.setState({
      menus:true
    })
 }

  // takePicture() {
  //   const options = {};
  //   //options.location = ...
  //   this.camera.capture({metadata: options})
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }

  render(){
    const { navigate } = this.props.navigation
    return(
      <ScrollView style={styles.container}>
        {(this.state.menus)
          ? <QRCodeScanner
               onRead={(e)=>this.onSuccess(e)}
               topContent={(
                 <Text style={styles.centerText}>
                   Scan Qr to display Menus
                 </Text>
               )}
              //  bottomContent={(
              //    <TouchableOpacity style={styles.buttonTouchable}>
              //      <Text style={styles.buttonText}>OK. Got it!</Text>
              //    </TouchableOpacity>
              //  )}
             />
          : <View>
              <Image
                style={styles.restaurant}
                source={{uri: 'http://1.bp.blogspot.com/-kbxbz-l46z4/VF9bp5MNegI/AAAAAAAABGs/6mUcvnZKCKA/s1600/Abuba-Steak.jpg'}} />
                <View style={styles.buttonContainer}>
                  <MenuButton text="Food"/>
                  <MenuButton text="Drink"/>
                  <MenuButton text="Dessert"/>
                </View>
                <View style={styles.actions}>
                  <MenuType text="Appetizer"/>
                  <MenuType text="Pasta"/>
                  <MenuType text="Mains"/>
                  <MenuType text="Seafood"/>
                </View>
                <MenuList pic='https://media-cdn.tripadvisor.com/media/photo-s/09/74/41/2e/abuba-steak.jpg' title="T-Bone Steak"/>
                <MenuList pic='http://hargamenu.com/wp-content/uploads/2014/09/harga-abuba-steak.jpg' title="Rib-Eye NZ Steak"/>
                <MenuList pic='http://1.bp.blogspot.com/-kbxbz-l46z4/VF9bp5MNegI/AAAAAAAABGs/6mUcvnZKCKA/s1600/Abuba-Steak.jpg' title="Sirloin Steak"/>
                <View style={styles.review}>
                  <Button
                    title="Review Order"
                    color="black"
                    onPress={()=> navigate('Order',{restaurant:'Abuba Steak',table:1})} />
                </View>
            </View>
        }

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#F5FCFF',
   padding: 10
 },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
  restaurant:{
    alignSelf: 'stretch',
    height: 170,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 120,
  },
  actions:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 15,
  },
  review:{
    marginBottom: 40
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
