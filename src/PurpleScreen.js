import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {};
export default class PurpleScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Purple Screen</Text>
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
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            backgroundColor: "orange",
            width: "75%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10
          }}
        >
          <Text style={styles.text}>Back</Text>
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
    backgroundColor: "purple"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});
