import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderRight from "./components/HeaderRight";

const Stack = createNativeStackNavigator();

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
          component={Home}
          options={{
            title: "WhatsApp",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
