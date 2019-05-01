import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class RedScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Red Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});
