import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../Navigation";
import TweetContent, { TweetProps } from "./TweetContent";

type tweetProps = {
  tweet: TweetProps;
};

type Props = NativeStackNavigationProp<RootStackParams, "HomeStackGroup">;

const Tweet = ({ tweet }: tweetProps) => {
  const navigation = useNavigation<Props>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("HomeStackGroup", {
          screen: "TweetDetails",
          params: { tweet },
        });
      }}>
      <TweetContent tweet={tweet} />
    </Pressable>
  );
};

export default Tweet;
