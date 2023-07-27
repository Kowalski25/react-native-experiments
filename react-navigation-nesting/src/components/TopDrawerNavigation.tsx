import { View, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import DrawerMenuIcon from "../../icons/DrawerMenuIcon";
import { RootStackParams } from "../../AppDrawerNavigator";

const TopDrawerNavigation = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={"#f0ddcc"}
        style={styles.backButton}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <DrawerMenuIcon color='#333333' size={30} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TopDrawerNavigation;
