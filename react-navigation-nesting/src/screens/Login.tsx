import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import ProfileIcon from "../../icons/ProfileIcon";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../AppTabNavigator";

type Props = NativeStackNavigationProp<AuthStackParams>;

const LoginScreen = () => {
  const navigation = useNavigation<Props>();

  return (
    <View>
      <Text>Login Screen</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate("SignUp")}
        style={styles.buttonContainer}
        underlayColor='#d3d3d3'
      >
        <View style={styles.signUp}>
          <ProfileIcon color='#333333' size={20} />
          <Text>Sign Up</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    margin: 10,
    borderRadius: 10,
  },
  signUp: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    padding: 5,
    borderRadius: 10,
  },
});

export default LoginScreen;
