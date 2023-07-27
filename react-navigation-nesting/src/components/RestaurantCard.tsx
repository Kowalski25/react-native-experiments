import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  onPress: (name: string) => void;
};

const RestaurantCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.name)}>
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    borderRadius: 5,
    padding: 16,
    marginTop: 8,
  },
});

export default RestaurantCard;
