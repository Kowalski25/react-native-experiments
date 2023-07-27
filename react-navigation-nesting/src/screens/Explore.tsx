import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../AppTabNavigator";
import { useNavigation } from "@react-navigation/native";
import TopDrawerNavigation from "../components/TopDrawerNavigation";

type Props = NativeStackNavigationProp<RootStackParams, "ExploreStack">;

const ExploreScreen = () => {
  const navigation = useNavigation<Props>();

  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.screenTitle}>Explore Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={() => {
            navigation.push("Restaurant", { name: "Sushi Restaurant" });
          }}
        />
        <RestaurantCard
          name='Burger Restaurant'
          onPress={() => {
            navigation.push("Restaurant", { name: "Burget Restaurant" });
          }}
        />
        <RestaurantCard
          name='Fine Dining Restaurant'
          onPress={() => {
            navigation.push("Restaurant", { name: "Fine Dining Restaurant" });
          }}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={() => {
            navigation.push("Restaurant", { name: "Sushi Restaurant" });
          }}
        />
        <RestaurantCard
          name='Burger Restaurant'
          onPress={() => {
            navigation.push("Restaurant", { name: "Burger Restaurant" });
          }}
        />
        <RestaurantCard
          name='Go to Restaurant Screen'
          onPress={() => {
            navigation.navigate("RestaurantsStack", {
              screen: "Restaurant",
              params: { name: "Pressed from Explore Screen" },
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 44,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ExploreScreen;
