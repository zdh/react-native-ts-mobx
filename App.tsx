/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from "react";
import { Platform, StyleSheet, Text, View, StatusBar, ViewStyle, TextStyle } from "react-native";

import { observer } from "mobx-react/native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu",
});

interface InterfaceProps {}

interface InterfaceState {}

interface InterfaceStyle {
  container: ViewStyle;
  welcome: TextStyle;
  instructions: TextStyle;
}

@observer
export default class App extends React.Component<InterfaceProps, InterfaceState> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F6D7A",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#F5FCFF",
  },
  instructions: {
    textAlign: "center",
    color: "#F5FCFF",
    marginBottom: 5,
  },
});
