import React, { useEffect } from "react";
import { useColorScheme, Animated } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationContainer,
  NavigatorScreenParams,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";

import Feed from "./screens/tabScreens/Feed";
import TweetDetails from "./screens/homeScreens/TweetDetails";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import { TweetProps } from "./components/TweetContent";
import Payments from "./screens/drawerScreens/Payment";

// ionicons type props and properties
type Props = {
  iconName: keyof typeof Ionicons.glyphMap;
};

export type RootStackParams = {
  HomeStackGroup: NavigatorScreenParams<HomeStackParams>;
  Notifications: undefined;
  Settings: undefined;
  TweetDetails: {
    tweet: TweetProps;
  }
  DrawerStackGroup: NavigatorScreenParams<DrawerStackParams>;
  TopTabsGroup: NavigatorScreenParams<TopTabsParams>;
};

// Top Tabs
export type TopTabsParams = {
  Main: undefined;
  Following: undefined;
  Explore: undefined;
}

const TopTabs = createMaterialTopTabNavigator<TopTabsParams>();

const TopTabsGroup = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 2,
          backgroundColor: '#1DA1F2',
        }
      }}
    >
      <TopTabs.Screen name="Main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="Explore" component={Payments} />
    </TopTabs.Navigator>
  )
};

// Home 
export type HomeStackParams = {
  Feed: undefined;
  TweetDetails: {
    tweet: TweetProps;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeStackGroup = () => {
  const twitterLogo = () => <Ionicons name='ios-logo-twitter' size={30} color='#1DA1F2' />;
  
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name='Feed' 
        component={TopTabsGroup} 
        options={{
          headerTitle: twitterLogo,
        }}
      />
      <HomeStack.Screen 
        name='TweetDetails' 
        component={TweetDetails} 
        options={{
          presentation: 'modal',
        }}
      />
    </HomeStack.Navigator>
  );
};

// Bottom Tab
const Tab = createBottomTabNavigator<RootStackParams>();

const TabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: Props["iconName"];
          if (route.name === "HomeStackGroup") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Notifications") {
            iconName = focused
              ? "ios-notifications"
              : "ios-notifications-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          } else {
            return null;
          }
          return <Ionicons name={iconName} color={color} size={size} />; 
        },
        tabBarActiveTintColor: "#1DA1F2",
      })}>

      <Tab.Screen
        name='HomeStackGroup'
        component={HomeStackGroup}
        options={{
          headerShown: false,
          tabBarLabel: "@felixarhel",
        }}
      />
      <Tab.Screen 
        name='Notifications' 
        component={Notifications}
      />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

// Drawer
export type DrawerStackParams = {
  Payments: undefined;
  TabGroup: undefined;
}

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerStackGroup = () => {
  return (
    <Drawer.Navigator initialRouteName="TabGroup" screenOptions={{ headerShown: false}}>
      <Drawer.Screen name="TabGroup" component={TabGroup} />
      <Drawer.Screen name="Payments" component={Payments} options={{headerShown: true}} />
    </Drawer.Navigator>
  )
}


const Navigation = () => {
  const currentTheme = useColorScheme()
  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? DarkTheme : DefaultTheme }>
      <DrawerStackGroup />
    </NavigationContainer>
  );
};

export default Navigation;
