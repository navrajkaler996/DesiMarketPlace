import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyListingsScreen from "../screens/MyListingsScreen";
import { Platform, StatusBar } from "react-native";

const Tab = createMaterialTopTabNavigator();

const heightStatus = Platform.OS === "android" ? StatusBar.currentHeight : 24;

function Tabs() {
  return (
    <Tab.Navigator style={{ marginTop: heightStatus }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Listings" component={MyListingsScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;
