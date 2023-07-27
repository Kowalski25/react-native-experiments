import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import TopDrawerNavigation from "../components/TopDrawerNavigation";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text style={styles.text}>Name: John Doe</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 44,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 8,
    width: 100,
    borderColor: '#d2d2d2',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 8,
  },
  text: {
    textAlign: 'center',
  }
})

export default ProfileScreen;
