import { Route } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { formatDate } from "../utils/formatDate";
import { TweetContent } from "../components/Tweet/TweetContent";
import Tweet from "../components/Tweet/Tweet";

const Tweets = ({
  route,
}: {
  route: Route<string, { year: string; content: any[]; color: string }>;
}) => {
  const tweets = [...route.params.content].reverse();

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.year, { backgroundColor: route.params.color }]}>
        {route.params.year}
      </Text>
      <View style={styles.tweetsWrapper}>
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} color={route.params.color} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tweetsWrapper: { gap: 20 },
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  year: {
    textAlign: "center",
    padding: 15,
    fontSize: 30,
    color: "#fff",
    fontFamily: "Inter_300Light",
    marginBottom: 20,
  },
});

export default Tweets;
