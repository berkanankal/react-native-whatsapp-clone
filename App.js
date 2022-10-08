import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeHeaderRight from "./components/HomeHeaderRight";
import MessagesHeaderRight from "./components/MessagesHeaderRight";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import MessagesHeaderLeft from "./components/MessagesHeaderLeft";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#128C7E",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            title: "WhatsApp",
            headerRight: () => <HomeHeaderRight />,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="MessagesPage"
          component={Messages}
          options={({ route }) => ({
            headerTitle: () => null,
            headerRight: () => <MessagesHeaderRight />,
            headerLeft: () => (
              <MessagesHeaderLeft chatPerson={route.params.chatPerson} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
