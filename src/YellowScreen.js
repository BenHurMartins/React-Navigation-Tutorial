import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {};
export default class YellowScreen extends Component<Props> {
  static navigationOptions = {
    title: "Yellow Screen"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Yellow Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Red")}
          style={{
            backgroundColor: "red",
            width: "75%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>
            Navigate to Red Screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "black"
  }
});
