import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutMeScreen from "./src/screens/AboutMeScreen";
import ProjectsScreen from "./src/screens/ProjectsScreen";
import SkillsScreen from "./src/screens/SkillsScreen";
import ContactScreen from "./src/screens/ContactScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About Me" component={AboutMeScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
