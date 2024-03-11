import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProjectCard from "../../components/ProjectCard";

const projectsData = [
  {
    id: "1",
    title: "React Native Todo List App",
    description:
      "Real-time todoList application built with React Native and Expo.",
    technologies: "React Native, Expo, AsyncStorage",
  },
  {
    id: "2",
    title: "PHP Web-based Chat App",
    description:
      "A real-time web-based chat application implemented with PHP, JavaScript, MySQL and AJAX for seamless communication and instant messaging.",
    technologies: "PHP, MySQL, AJAX, JavaScript",
  },
];

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Projects</Text>
      <FlatList
        data={projectsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard project={item} />}
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

export default ProjectsScreen;
