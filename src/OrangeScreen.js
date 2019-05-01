import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class OrangeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Orange Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});
