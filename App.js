import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, StatusBar } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center",
  },
});
