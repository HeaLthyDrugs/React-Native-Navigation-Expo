import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const TestDetail = ({ navigation }) => {
  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      {/* Header  */}
      <View
        style={{
          backgroundColor: "black",
          height: "20%",
          flex: 1,
          borderRadius: 20,
          margin: 5,
        }}
      >
        <Pressable onPress={() => navigation.goBack()} style={{ margin: 15 }}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </Pressable>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Image will appear here</Text>
          <Text style={{ fontSize: 30, fontWeight: "900" }}>
            Combined Graduate Level
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "200",
                padding: 10,
                color: "yellow",
              }}
            >
              200 Tests
            </Text>
            <Text>•</Text>
            <Text
              style={{
                fontWeight: "900",
                color: "green",
                padding: 10,
              }}
            >
              10 Free Tests
            </Text>
          </View>
        </View>
      </View>

      {/* Body  */}
      <View style={{ flex: 3, margin: 10, alignItems: "center" }}>

        {/* First Card  */}
        <TouchableOpacity
          style={{
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700" }}>
            Complete English Section
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700" }}>
           Topic Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700" }}>
            Vocab Test
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700" }}>
            Comprehension
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 20,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700" }}>
            Grammer Chapter Test
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TestDetail;
