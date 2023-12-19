import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Slider from "../components/ImageSlider/Slider";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          marginLeft: 10,
          padding: 10
        }}
      >
        <Pressable onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={30} color="black" />
        </Pressable>
        <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "900" }}>
          Hi, User
        </Text>
      </View>
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
        <Slider />
      </View>
      <View style={{ flex: 9 }}>
        <TouchableOpacity
          style={{
            padding: 20,
            borderColor: "#ddd",
            borderWidth: 1,
            width: "40%",
            alignItems: "center",
            borderRadius: 20,
            marginLeft: 10,
            backgroundColor: "#eab308",
          }}
          onPress={()=>navigation.navigate('TestDetail')}
        >
          <Image source={require("./../assets/favicon.png")} />
          <Text style={{ fontWeight: "900", fontSize: 18, marginTop: 10 }}>
            CGL
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;
