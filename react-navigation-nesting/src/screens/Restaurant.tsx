import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParams } from "../../AppTabNavigator";
import RestaurantCard from "../components/RestaurantCard";
import TopBackNavigation from "../components/TopBackNavigation";

type Props = NativeStackScreenProps<RootStackParams, "Restaurant">;

const RestaurantScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <TopBackNavigation />
      <Text style={styles.screenTitle}>{route.params.name}</Text>

      <Text style={styles.sectionTitle}>Related Restaurants:</Text>
      <RestaurantCard
        name='Related Restaurant 1'
        onPress={() => {
          navigation.push("Restaurant", {
            name: "Child: Related Restaurant 1",
          });
        }}
      />
      <RestaurantCard
        name='Related Restaurant 2'
        onPress={() => {
          navigation.push("Restaurant", {
            name: "Child: Related Restaurant 2",
          });
        }}
      />
      <RestaurantCard
        name='Related Restaurant 3'
        onPress={() => {
          navigation.push("Restaurant", {
            name: "Child: Related Restaurant 3",
          });
        }}
      />
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
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
});

export default RestaurantScreen;
