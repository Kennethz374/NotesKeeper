import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";

import CardList from "./components/CardList";
import MainHeader from "./components/MainHeader";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				style={styles.backgroundImage}
				source={require("./assets/backgroundImage.jpeg")}
			>
				<MainHeader />
				<CardList />
			</ImageBackground>
		</SafeAreaView>
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
