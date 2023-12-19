import { View, Text, Pressable, Button } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <Pressable>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Go to LoginScreen"
          color="#841584"
        />
      </Pressable>

    </View>
  );
};

export default Profile;
