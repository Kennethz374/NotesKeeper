import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import Card from "./components/Card";

export default function App() {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgroundImage}
				source={require("./assets/backgroundImage.jpeg")}
			>
				<Card />
				<Card />
				<Card />
				<Card />
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
