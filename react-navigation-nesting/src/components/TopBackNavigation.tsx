import { View, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../icons/BackIcon";

const TopBackNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableHighlight 
        underlayColor={'#f0ddcc'}
        style={styles.backButton} 
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon color="#333333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBackNavigation;
