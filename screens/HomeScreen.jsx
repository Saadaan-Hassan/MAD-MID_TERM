import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styles } from "../styles/style";

export default function HomeScreen() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Home</Text>
			<Text style={styles.paragraph}>Navigate to the Details screen</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Store")}>
				<Text style={styles.buttonText}>Go to Store</Text>
			</TouchableOpacity>
		</View>
	);
}
