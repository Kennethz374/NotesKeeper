import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Card({ image, userName, title, content, createdAt }) {
	return (
		<View style={styles.cardContainer}>
			{/* Header */}
			<View style={styles.cardHeader}>
				{/* user Logo */}
				<Image
					style={styles.userLogo}
					source={require("../assets/JohnWick.jpeg")}
				/>
				<Text style={styles.headerText}>By John Wick</Text>
			</View>

			{/* title */}
			<Text style={styles.title}>How to Start a React Native app</Text>

			{/* Footer */}
			<View style={styles.footer}>
				<Text style={styles.footerText}>June 2</Text>
				<Text style={styles.footerText}> . </Text>
				<Text style={styles.footerText}>2 mins read</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: "#fff",
		padding: 8,
		marginHorizontal: 10,
		marginVertical: 5,
		borderRadius: 10,
		maxHeight: 85,
		flex: 1,
	},
	cardHeader: {
		flex: 1,
		flexDirection: "row",
		marginVertical: 5,
	},
	headerText: {
		alignSelf: "center",
		paddingLeft: 8,
		fontWeight: "bold",
	},
	userLogo: {
		alignSelf: "center",
		height: 25,
		width: 25,
		borderRadius: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		paddingVertical: 5,
	},
	footer: {
		flexDirection: "row",
		paddingLeft: 5,
	},
	footerText: {
		fontSize: 12,
		color: "gray",
	},
});
