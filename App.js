import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CardList from "./components/CardList";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgroundImage}
				source={require("./assets/backgroundImage.jpeg")}
			>
				<CardList />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	backgroundImage: {
		flex: 1,
		zIndex: -1,
		opacity: 0.8,
		resizeMode: "cover",
		justifyContent: "center",
	},
});
