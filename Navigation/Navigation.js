import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "../screens/Home";
import Test from "../screens/Test";
import Profile from "../screens/Profile";
import Settings from "../screens/Drawer/screens/Settings";
import About from "../screens/Stack/screens/About";
import { Ionicons } from "@expo/vector-icons";
import Login from "../screens/Auth/Screens/Login";
import Signin from "../screens/Auth/Screens/Signin";
import TestDetail from "../screens/Stack/screens/TestDetail";

//Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen
        name="About"
        component={About}
        options={{
          presentation: "modal",
          headerTitle: "About",
          headerShown: true,
        }}
      />
     <HomeStack.Screen name="Login" component={Login}/>
     <HomeStack.Screen name="TestDetail" component={TestDetail}/>
    </HomeStack.Navigator>
  );
}

// Tabs 
const Tab = createBottomTabNavigator();

function TabsGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "left",
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Test") {
            iconName = "flask";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "darkblue", 
        inactiveTintColor: "gray",
        style: {
          borderTopWidth: 0, 
          elevation: 0, 
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

// Drawer

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Feed" component={HomeStackGroup} />
      <Drawer.Screen name="Payments" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  );
}