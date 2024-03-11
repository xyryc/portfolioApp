import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SkillBadge = ({ skill }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.skillText}>{skill}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "grey",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    margin: 4,
  },
  skillText: {
    color: "#fff",
  },
});

export default SkillBadge;
