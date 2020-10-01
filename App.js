import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import Animation from "./screens/Animation";
import Rotate from "./screens/Rotate";

const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Animations" component={RootTabNavigator} />
    </Drawer.Navigator>
  );
};

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "#f77",
        inactiveTintColor: "gray",
      }}
    >
      <RootTab.Screen
        name="Animation"
        component={Animation}
        options={{
          title: "Animation",
          tabBarIcon: ({ focused }) => (
            <Entypo name="air" size={24} color={focused ? "#f77" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Rotate"
        component={Rotate}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="retweet" size={24} color={focused ? "#7a42a8" : "gray"} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}