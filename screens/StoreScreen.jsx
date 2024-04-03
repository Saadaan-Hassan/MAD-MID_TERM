import React, { useState } from "react";
import {
	View,
	Text,
	FlatList,
	Image,
	RefreshControl,
	TextInput,
	Button,
} from "react-native";
import { styles } from "../styles/style";
import useBooksData from "../hooks/useBookData";
import booksData from "../Books.json";

export default function StoreScreen() {
	const [refreshing, setRefreshing] = useState(false);
	const [layoutDirection, setLayoutDirection] = useState("ltr"); // Default is LTR

	const { data, loading } = useBooksData();
	const [products, setProducts] = useState(booksData.data);

	const onRefresh = () => {
		setRefreshing(true);
		// You can optionally refetch data here if needed
		setRefreshing(false);
	};

	const handleSearch = (text) => {
		const filteredProducts = booksData.data.filter((item) =>
			item.title.toLowerCase().includes(text.toLowerCase())
		);
		setProducts(filteredProducts);
	};

	const toggleLayoutDirection = () => {
		const newDirection = layoutDirection === "ltr" ? "rtl" : "ltr";
		setLayoutDirection(newDirection);
	};

	if (loading) {
		return (
			<View style={{ height: 100, ...styles.container }}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.searchContainer}>
				<TextInput
					style={styles.searchInput}
					placeholder='Search by name'
					onChangeText={handleSearch}
				/>
				<Button
					onPress={toggleLayoutDirection}
					title={layoutDirection === "ltr" ? "RTL" : "LTR"}
					color={"#31363F"}
					style={styles.toggleButton}
				/>
			</View>
			<FlatList
				data={products}
				keyExtractor={(item) => item._id}
				style={styles.cardsContainer}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				renderItem={({ item }) => (
					<View style={styles.card}>
						{/* Card Image */}
						<Image
							source={{
								uri: `https://dev.iqrakitab.net/${item.coverPhotoUri}`,
							}}
							style={styles.cardImage}
						/>

						{/* Card Details */}
						<View style={styles.cardDetails}>
							<Text
								style={[
									styles.cardTitle,
									{
										textAlign: layoutDirection === "ltr" ? "left" : "right",
									},
								]}>
								{item.title}
							</Text>
							<Text
								style={[
									styles.cardAuthor,
									{
										writingDirection: layoutDirection === "ltr" ? "ltr" : "rtl",
									},
								]}>
								{item.author.name}
							</Text>
							<Text
								style={[
									styles.cardCategory,
									{
										textAlign: layoutDirection === "ltr" ? "left" : "right",
									},
								]}>
								{item.category.name}
							</Text>
							<View style={styles.cardFooter}>
								<Text style={styles.cardPrice}>Rs. 100</Text>
								<Text style={styles.cardRating}>⭐ 4.5</Text>
							</View>
						</View>
					</View>
				)}
			/>
		</View>
	);
}
