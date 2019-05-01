import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {};
export default class GreenScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Green Screen</Text>
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
        <TouchableOpacity
          onPress={() => this.props.navigation.popToTop()}
          style={{
            backgroundColor: "orange",
            width: "75%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 10
          }}
        >
          <Text style={styles.text}>Back to Initial Screen</Text>
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
    backgroundColor: "green"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});
