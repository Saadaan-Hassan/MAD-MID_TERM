import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";

const Tab = createBottomTabNavigator();

const AboutScreen = () => {
	return <Text>Details</Text>;
};

export default function MainApp() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerStyle: {
						backgroundColor: "#76ABAE",
					},
					headerTintColor: "white",
					headerTintColor: "#31363F",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					tabBarActiveTintColor: "#FFD369",
					tabBarInactiveTintColor: "#31363F",
					tabBarStyle: {
						backgroundColor: "#76ABAE",
						padding: 10,
						height: 60,
					},
				}}>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<Feather name='home' size={size} color={color} />
						),
					}}
				/>
				<Tab.Screen
					name='Store'
					component={StoreScreen}
					options={{
						tabBarIcon: ({ focused, color, size }) => (
							<Feather name='box' size={size} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
