import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "./Card";

const DUMMY_DATA = [
	{
		image: "https://bit.ly/3ifrvoX",
		userName: "Kenneth Zhang",
		title: "How to read docs quickly",
		content: "lorem ipsum",
		createdAt: "Jun 3, 2021",
		id: "1",
	},
	{
		image: "https://bit.ly/3vOuCrY",
		userName: "John Wick",
		title: "React Native for Beginners",
		content: "lorem ipsum",
		createdAt: "Jun 3, 2021",
		id: "2",
	},
];

const CardList = () => {
	return (
		<FlatList
			data={DUMMY_DATA}
			renderItem={({ item }) => (
				<Card
					userName={item.userName}
					image={item.image}
					title={item.title}
					content={item.content}
					createdAt={item.createdAt}
				/>
			)}
			keyExtractor={(item) => item.id}
			style={styles.cardList}
		/>
	);
};

const styles = StyleSheet.create({
	cardList: {
		flex: 1,
		marginTop: 10,
	},
});

export default CardList;
