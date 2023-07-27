// import React from "react";
// import { TouchableOpacity } from "react-native";
// import {
//   View,
//   Text,
//   StyleSheet,
//   useColorScheme,
//   StatusBar,
// } from "react-native";
// import { useNavigation } from "@react-navigation/core";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParams } from "../../App";


// const Menu = () => {
//   const isDark = useColorScheme() === "dark";
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();



//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
//       <Text style={styles.title}>Navigation</Text>
//       <TouchableOpacity
//         onPress={() => {
//           // go to Explore screen
//           navigation.navigate("ExploreStack");
//         }}>
//         <Text style={styles.link}>Explore</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => {
//           // go to Restaurants screen
//           navigation.navigate('RestaurantsStack');
//         }}>
//         <Text style={styles.link}>Restaurants</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => {
//           // go to Profile screen
//           navigation.navigate("Profile");
//         }}>
//         <Text style={styles.link}>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#efefef",
//     borderRadius: 5,
//     padding: 16,
//     marginTop: 24,
//   },
//   link: {
//     fontSize: 16,
//     fontWeight: "400",
//     marginVertical: 4,
//     color: "#097ade",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: 17,
//     fontWeight: "400",
//     textAlign: "center",
//     marginBottom: 6,
//   },
// });

// export default Menu;
