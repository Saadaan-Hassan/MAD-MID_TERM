// useBooksData.js

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useBooksData() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Simulating API call delay
				const response = await fetch("https://dev.iqrakitab.net/api/books");
				const jsonData = await response.json();
				setData(jsonData.data);
				setLoading(false);
				AsyncStorage.setItem("books", JSON.stringify(jsonData.data));
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	return { data, loading };
}

export default useBooksData;
