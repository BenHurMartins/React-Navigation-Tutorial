import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {};
export default class BlueScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Blue Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Purple")}
          style={{
            backgroundColor: "purple",
            width: "75%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10
          }}
        >
          <Text style={styles.text}>Navigate to Purple Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Green")}
          style={{
            backgroundColor: "green",
            width: "75%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10
          }}
        >
          <Text style={styles.text}>Navigate to Green Screen</Text>
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
    backgroundColor: "blue"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});
