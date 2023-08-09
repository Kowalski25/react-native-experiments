import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweet";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParams } from "../../Navigation";

type Props = DrawerNavigationProp<RootStackParams, "DrawerStackGroup">;

const Feed = () => {
  const navigation = useNavigation<Props>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/kowalskii.jpg")}
            style={{
              width: 37,
              height: 37,
              borderRadius: 100,
              marginBottom: 10,
            }}
          />
        </Pressable>
      ),
      // headerRight: () => <Button title='test' />,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tweets.slice(0, 30)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Tweet tweet={item} />;
        }}
        // ListHeaderComponent={() => (
        //   <View style={styles.header}>
        //     <Text style={styles.headerTitle}>New tweets available</Text>
        //   </View>
        // )}
        ListHeaderComponentStyle={{ backgroundColor: "#CCCCCC" }}
        ItemSeparatorComponent={() => <View style={styles.divider}></View>}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={100} // 100ms
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDDDDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
