import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Me</Text>
      <Text style={styles.description}>
        I am a passionate React Native developer with a strong background in
        building mobile applications. My goal is to create innovative and
        user-friendly solutions that make a positive impact.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutMeScreen;
