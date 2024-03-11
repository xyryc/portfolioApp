import React from "react";
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ContactScreen = () => {
  const openEmail = () => {
    Linking.openURL("mailto:amdanikzz@gmail.com");
  };

  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/talath-un-nabi-anik/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Me</Text>
      <Text style={styles.description}>
        Feel free to reach out to me via email or connect with me on LinkedIn:
      </Text>
      <TouchableOpacity onPress={openEmail}>
        <Text style={styles.link}>amdanikzz@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openLinkedIn}>
        <Text style={styles.link}>LinkedIn Profile</Text>
      </TouchableOpacity>
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
    marginBottom: 16,
  },
  link: {
    color: "blue",
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "underline",
    marginBottom: 8,
  },
});

export default ContactScreen;
