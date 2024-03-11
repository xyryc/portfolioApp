import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProjectCard = ({ project }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.description}</Text>
      <Text style={styles.technologies}>
        Technologies: {project.technologies}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    color: "#555",
  },
  technologies: {
    marginTop: 8,
    color: "#888",
  },
});

export default ProjectCard;
