import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderRight from "./components/HeaderRight";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TopTab = () => {
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
        name="ChatsScreen"
        component={Home}
        options={{
          tabBarLabel: "Sohbetler",
        }}
      />
      <Tab.Screen
        name="StatusScreen"
        component={Settings}
        options={{ tabBarLabel: "Durum" }}
      />
      <Tab.Screen
        name="CallsScreen"
        component={Settings}
        options={{ tabBarLabel: "Aramalar" }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#128C7E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => <HeaderRight />,
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={TopTab}
          options={{ title: "WhatsApp" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
