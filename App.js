import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!!!</Text>
      <Text style={styles.subText}>React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc00",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    marginBottom: "20%",
    color: "#fff",
  },
  subText: {
    fontSize: 20,
    color: "#fff",
  },
});
