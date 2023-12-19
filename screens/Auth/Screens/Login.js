import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Page</Text>
      <Pressable>
        <Button title='Sign/Login in using Google' color="#841584"/>
      </Pressable>
    </View>
  )
}

export default Login