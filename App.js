import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Routes from "./Routes";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
