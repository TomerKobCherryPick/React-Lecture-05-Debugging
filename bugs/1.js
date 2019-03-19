import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  center: {
    alignSelf: "center"
  },
  greeting: {
    color: "red"
  }
});

const Container = props => <Greeting style={styles.center} />;

/////
// Do not edit anything above this line
/////

const Greeting = props => (
  <Text style={styles.greeting}>
    This text should be red and centered vertically
  </Text>
);

export default () => <Container />;
