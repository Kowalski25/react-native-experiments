import { StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import TweetContent from "../../components/TweetContent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../Navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParams, "TweetDetails">;
type NavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "TweetDetails"
>;

const TweetDetails = ({ route }: Props) => {
  const navigation = useNavigation<NavigationProps>();
  const { params } = route;

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: params.tweet.author.name,
  //   })
  // }, []);

  useEffect(() => {
    if (params?.tweet?.author?.name) {
      navigation.setOptions({
        headerTitle: params.tweet.author.name,
      });
    }
  }, [params]);

  return (
    <SafeAreaView style={styles.container}>
      {params?.tweet ? <TweetContent tweet={params.tweet} /> : null}
    </SafeAreaView>
  );
};

export default TweetDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
