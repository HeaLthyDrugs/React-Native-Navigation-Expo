import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </Pressable>
    </View>
  )
}

export default Home

// yarn add @react-navigation/native-stack
// yarn add @react-navigation/bottom-tabs