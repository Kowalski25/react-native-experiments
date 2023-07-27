import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../AppTabNavigator";
import { useNavigation } from "@react-navigation/native";
import TopDrawerNavigation from "../components/TopDrawerNavigation";

type Props = NativeStackNavigationProp<RootStackParams, "RestaurantsStack">;

const RestaurantsScreen = () => {
  const navigation = useNavigation<Props>();

  return (
    <View style={styles.container}>
      <TopDrawerNavigation />
      <Text style={styles.screenTitle}>Restaurant Screen</Text>
      <ScrollView
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}>
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={(name) => {
            navigation.navigate("Restaurant", { name });
          }}
        />
        <RestaurantCard
          name='Burger Restaurant'
          onPress={(name) => {
            navigation.navigate("Restaurant", { name });
          }}
        />
        <RestaurantCard
          name='Fine Dining Restaurant'
          onPress={(name) => {
            navigation.navigate("Restaurant", { name });
          }}
        />
        <RestaurantCard
          name='Sushi Restaurant'
          onPress={(name) => {
            navigation.navigate("Restaurant", { name });
          }}
        />
        <RestaurantCard
          name='Burger Restaurant'
          onPress={(name) => {
            navigation.navigate("Restaurant", { name });
          }}
        />
      </ScrollView>
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

export default RestaurantsScreen;
