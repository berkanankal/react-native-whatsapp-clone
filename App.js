import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderRight from "./components/HeaderRight";
import Messages from "./pages/Messages";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
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
          component={Home}
          options={{ title: "WhatsApp" }}
        />
        <Stack.Screen
          name="MessagesPage"
          component={Messages}
          options={{ title: "Mesaj" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
