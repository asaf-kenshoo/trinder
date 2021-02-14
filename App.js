import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
// import Icon from "./components/Icon";

const App = createBottomTabNavigator(
	{
		Explore: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#279A72" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="search" />
						</Text>
					);
				}
			}
		},
		Matches: {
			screen: MatchesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#279A72" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="search" />
						</Text>
					);
				}
			}
		},
	},
	{
		tabBarOptions: {
			activeTintColor: "#279A72",
			inactiveTintColor: "#363636",
			labelStyle: {
				fontSize: 14,
				textTransform: "uppercase",
				paddingTop: 10
			},
			style: {
				backgroundColor: "#FFF",
				borderTopWidth: 0,
				paddingVertical: 30,
				height: 60,
				marginBottom: 0,
				shadowOpacity: 0.05,
				shadowRadius: 10,
				shadowColor: "#000",
				shadowOffset: { height: 0, width: 0 }
			}
		}
	}
);

export default createAppContainer(App);
