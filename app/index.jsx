import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
const index = () => {
  return (
    <View style={styles.container}>
      <Text>My App</Text>

      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
