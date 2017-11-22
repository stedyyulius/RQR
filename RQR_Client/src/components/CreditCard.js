import React from 'react'
import{
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

export const CreditCard = (image,name) =>{
  return(
    <View style={{flexDirection: 'row',marginTop:20}}>
      <TouchableOpacity>
        <Image
          style={{
            height: 35,
            width: 60,
            marginRight: 20,
          }}
          source={{uri:image}} />
      </TouchableOpacity>
      <Text>
        {name}
      </Text>
    </View>
  )
}
