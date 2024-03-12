import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SkillBadge from "../../components/SkillBadge";

const skillsData = [
  "React Native",
  "JavaScript",
  // "Redux",
  // "Firebase",
  // "REST APIs",
  "Git",
  "UI/UX Design",
  "Python",
  "AI/ML",
  "MySQL",
];

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Skills</Text>
      <FlatList
        data={skillsData}
        keyExtractor={(item) => item}
        //horizontal
        renderItem={({ item }) => <SkillBadge skill={item} />}
      />
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
});

export default SkillsScreen;
