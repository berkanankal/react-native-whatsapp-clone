import { Text, View } from "react-native";
import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomePage" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
