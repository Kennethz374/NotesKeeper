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
		borderRadius: 10,
	},
	cardHeader: {
		flex: 1,
		flexDirection: "row",
	},
	headerText: {
		alignSelf: "center",
		paddingLeft: 8,
		marginVertical: 5,
		fontWeight: "bold",
	},
	userLogo: {
		height: 25,
		width: 25,
		borderRadius: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		paddingVertical: 5,
	},
	footer: {
		flex: 1,
		flexDirection: "row",
		paddingLeft: 5,
	},
	footerText: {
		fontSize: 12,
		color: "gray",
	},
});
