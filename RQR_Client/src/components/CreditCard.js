import React from 'react'
import{
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

export const CreditCard = (image,name) =>{
  return(
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity>
        <Image
          style={{
            height: 25,
            width: 50,
            marginRight: 20,
          }}
          source={{uri:image}} />
      </TouchableOpacity>
    </View>
  )
}
