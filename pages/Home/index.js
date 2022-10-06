import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ConversationList from "../ConversationList";
import Status from "../Status";
import Calls from "../Calls";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: "#128C7E",
        },
        tabBarIndicatorStyle: { backgroundColor: "#fff", height: 4 },
      }}
    >
      <Tab.Screen
        name="ConversationListScreen"
        component={ConversationList}
        options={{
          tabBarLabel: "Sohbetler",
        }}
      />
      <Tab.Screen
        name="StatusScreen"
        component={Status}
        options={{ tabBarLabel: "Durum" }}
      />
      <Tab.Screen
        name="CallsScreen"
        component={Calls}
        options={{ tabBarLabel: "Aramalar" }}
      />
    </Tab.Navigator>
  );
};

export default Home;
