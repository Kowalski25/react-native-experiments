import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import ExploreScreen from "./src/screens/Explore";
import RestaurantsScreen from "./src/screens/Restaurants";
import ProfileScreen from "./src/screens/Profile";
import RestaurantScreen from "./src/screens/Restaurant";
import ExploreIcon from "./icons/ExploreIcon";
import RestaurantIcon from "./icons/RestaurantIcon";
import ProfileIcon from "./icons/ProfileIcon";
import { createDrawerNavigator } from "@react-navigation/drawer";

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

// root variable for drawer nav stack
const RootStack = createDrawerNavigator<RootStackParams>();

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
  }
}

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{ headerShown: false }}
    >
      <ExploreStack.Screen 
        name="Explore" 
        component={ExploreScreen}
      />
      <ExploreStack.Screen 
        name="Restaurant" 
        component={RestaurantScreen} 
      />
    </ExploreStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName='ExploreStack'
        screenOptions={{
          drawerActiveTintColor: 'firebrick',
        }}
      >
        <RootStack.Screen 
          name='ExploreStack' 
          component={ExploreScreenStack} 
          options={{
            drawerIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            drawerLabel: 'Explore',
            headerShown: false,
          }}
        />
        <RootStack.Screen 
          name='RestaurantsStack' 
          component={RestaurantScreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <RestaurantIcon color={color} size={size} />
            ),
            drawerLabel: 'Restaurants',
            headerShown: false,
          }}
        />
        <RootStack.Screen 
          name='Profile' 
          component={ProfileScreen} 
          options={{
            drawerIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            drawerLabel: 'Profile',
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
