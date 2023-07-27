import { StyleSheet, View, StatusBar, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import ExploreScreen from "./src/screens/Explore";
import RestaurantsScreen from "./src/screens/Restaurants";
import ProfileScreen from "./src/screens/Profile";
import RestaurantScreen from "./src/screens/Restaurant";
import ExploreIcon from "./icons/ExploreIcon";
import RestaurantIcon from "./icons/RestaurantIcon";
import ProfileIcon from "./icons/ProfileIcon";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";

export type RootStackParams = {
  AuthScreenStack: undefined;
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName='Restaurants'
      screenOptions={{ headerShown: false }}
    >
      <RestaurantsStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name='Restaurant' component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName='Explore'
      screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name='Explore' component={ExploreScreen} />
      <ExploreStack.Screen name='Restaurant' component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const App = () => {
  const renderContent = () => {
    const isLoggedIn = true;

    if (isLoggedIn) {
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name='ExploreStack'
            component={ExploreScreenStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ExploreIcon color={color} size={size} />
              ),
              tabBarLabel: "Explore",
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='RestaurantsStack'
            component={RestaurantScreenStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <RestaurantIcon color={color} size={size} />
              ),
              tabBarLabel: "Restaurants",
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name='Profile'
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ProfileIcon color={color} size={size} />
              ),
              tabBarLabel: "Profile",
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      );
    }
    return <AuthScreenStack />;
  };

  return <NavigationContainer>{renderContent()}</NavigationContainer>;
};

export default App;
