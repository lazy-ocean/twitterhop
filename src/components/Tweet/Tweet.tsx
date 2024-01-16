import { Route } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { TweetContent } from "./TweetContent";
import { formatDate } from "../../utils/formatDate";
import { Tweet } from "../../interfaces";

const Tweet = ({ tweet, color }: { tweet: Tweet; color: string }) => {
  return (
    <View key={tweet.id}>
      <Text style={[styles.date, { backgroundColor: `${color}80` }]}>
        {formatDate(tweet.created_at).fullDate}
      </Text>
      <View style={styles.tweetWrapper} key={tweet.id}>
        <TweetContent tweet={tweet} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetWrapper: {
    backgroundColor: "#f7f7f8",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    gap: 20,
  },
  date: {
    fontSize: 18,
    color: "#000",
    padding: 5,
  },
});

export default Tweet;
