import { Text, StyleSheet, View } from "react-native";
import { TweetContent } from "./TweetContent";
import { formatDate } from "../../utils/formatDate";
import { Tweet as TweetInterface } from "../../interfaces";

const Tweet = ({ tweet }: { tweet: TweetInterface }) => {
  return (
    <View key={tweet.id} style={styles.tweet}>
      <Text style={styles.date}>{formatDate(tweet.created_at).time}</Text>
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  tweet: {
    borderRadius: 20,
    backgroundColor: "#f7f7f8",
    padding: 20,
    gap: 10,
  },
  tweetWrapper: {
    backgroundColor: "#f7f7f8",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    gap: 20,
    borderRadius: 20,
  },
  date: {
    fontSize: 14,
    fontFamily: "PlusJakartaSans_200ExtraLight",
  },
});

export default Tweet;
