import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown';
import{
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native'

var restaurants = [{
  name: 'Abuba Steak',
  image: 'http://1.bp.blogspot.com/-kbxbz-l46z4/VF9bp5MNegI/AAAAAAAABGs/6mUcvnZKCKA/s1600/Abuba-Steak.jpg',
  address: 'Steak'
},{
  name: 'Pancious',
  image: 'https://klik-eat.com/inc/script/timthumb.php?src=https://img.klik-eat.com/inc/upload/images/restaurant/Pancious/coco-peanut.jpg&h=350&w=550&zc=1&q=95',
  address: 'Risotto'
},{
  name: 'Secret Recipe',
  image: 'http://www.secretrecipe.com.my/wp-content/uploads/2016/03/new-york-cheese.jpg',
  address: 'Cakes'
},{
  name: 'Happy Day',
  image: 'http://thefoodescape.com/wp-content/uploads/2015/06/DSC_8198.jpg',
  address: 'Western Food'
},{
  name: 'Go Grill',
  image: 'http://c1590022.cdn.cloudfiles.rackspacecloud.com/0aebbd90b1f644f22245acb27db808e8.png',
  address: 'Steak'
}]

const data = [{
  value: 'Banana',
 }, {
   value: 'Mango',
 }, {
   value: 'Pear',
}]

class Restaurants extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  static navigationOptions = ({ navigation }) => ({
  title: `Restaurants`,
  headerTitleStyle: {
    alignSelf: 'center'
  },
  // header: (
  //   <View>
  //     <Text style={{alignSelf: 'center',fontWeight:'bold'}}>
  //       RQR
  //     </Text>
  //     <Dropdown
  //           label='Favorite Fruit'
  //           data={data}
  //         />
  //   </View>
  // )
})
  render(){
    const { navigate } = this.props.navigation
    return(
      <ScrollView style={styles.container}>
        {(restaurants.map((r,i)=>
          <View style={{marginBottom:180}} key={i}>
            <View style={styles.backgroundContainer}>
              <TouchableOpacity onPress={()=> navigate('Menus',{isRestaurant:true})}>
                <Image
                  style={styles.restaurant}
                  source={{uri:r.image}} />
              </TouchableOpacity>
            </View>
            <View style={styles.descr}>
              <Text style={styles.name}>
                {r.name}
              </Text>
              <Text style={styles.detail}>
                {r.address}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  backgroundContainer: {
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
 },
  restaurant:{
    alignSelf: 'stretch',
    height: 200
  },
  descr:{
    alignSelf: 'stretch',
    height: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 158,
    padding: 5
  },
  name:{
    color: 'white',
    fontWeight: 'bold',
  },
  detail:{
    color: 'white',
    fontSize: 10,
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

export default connect (mapStateToProps,mapDispatchToProps)(Restaurants)
