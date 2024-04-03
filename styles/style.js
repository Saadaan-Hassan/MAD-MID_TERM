import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EEEEEE",
		alignItems: "center",
		justifyContent: "center",
		color: "#31363F",
	},
	h1: {
		fontSize: 24,
		color: "#31363F",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#31363F",
	},
	input: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		fontSize: 16,
		borderWidth: 1,
		borderColor: "#31363F",
		color: "#31363F",
	},
	button: {
		width: "80%",
		height: 50,
		backgroundColor: "#76ABAE",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#31363F",
	},
	buttonSecondary: {
		marginTop: 20,
	},
	paragraph: {
		marginVertical: 10,
		color: "#31363F",
	},
	cardsContainer: {
		backgroundColor: "#EEEEEE",
		padding: 40,
	},
	card: {
		backgroundColor: "#76ABAE",
		padding: 25,
		margin: 10,
		borderRadius: 10,
	},
	cardImage: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 10,
	},
	cardDetials: {
		marginTop: 10,
		width: "100%",
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#31363F",
	},
	cardRating: {
		fontSize: 16,
		color: "yellow",
		marginTop: 5,
	},

	cardPrice: {
		fontSize: 16,
		color: "#31363F",
		backgroundColor: "#EEEEEE",
		padding: 5,
		borderRadius: 5,
		marginTop: 5,
		textAlign: "center",
		fontWeight: "bold",
	},
	searchInput: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
		fontSize: 16,
		color: "#31363F",
		marginTop: 20,
	},
	searchContainer: {
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	toggleButton: {
		backgroundColor: "#76ABAE",
		borderRadius: 10,
	},
});
