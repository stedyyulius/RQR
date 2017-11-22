import React from 'react'
import{
  View,
  Image,
  Text
} from 'react-native'

export const CreditCard = (image,name) =>{
  return(
    <View style={{flexDirection: 'row',marginTop:20}}>
      <Image
        style={{
          height: 35,
          width: 60,
          marginRight: 20,
        }}
        source={{uri:image}} />
      <Text>
        {name}
      </Text>
    </View>
  )
}
