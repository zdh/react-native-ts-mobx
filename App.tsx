/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from "react";
import { StyleSheet, Text, View, StatusBar, ViewStyle, TextStyle } from "react-native";

import { observer } from "mobx-react/native";

import store from './App.store';

interface InterfaceProps {}

interface InterfaceState {
  name: string;
}

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
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text style={styles.welcome}>{store.welcome}</Text>
        <Text style={styles.instructions}>{store.start}</Text>
        <Text style={styles.instructions}>{store.instructions}</Text>
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
