import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MainHeader() {
	const [searchText, setSearchText] = useState("");
	return (
		<SafeAreaView style={styles.mainHeaderContainer}>
			{/* logo my notes for now */}
			<Text style={styles.headerLogo}>My Notes</Text>
			{/* Searchbar */}
			<SafeAreaView style={styles.search}>
				<Ionicons name="search-outline" size={24} color="black" />
				<TextInput
					style={styles.searchBar}
					onChangeText={setSearchText}
					value={searchText}
					placeholder="Search Notes"
				/>
			</SafeAreaView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainHeaderContainer: {
		marginTop: 30,
	},
	searchBar: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "black",
		marginHorizontal: 8,
		fontSize: 18,
	},
	search: {
		flexDirection: "row",
		marginHorizontal: 12,
		justifyContent: "flex-end",
	},
});

export default MainHeader;
