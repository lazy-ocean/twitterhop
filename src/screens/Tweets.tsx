import { Route } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Tweet from "../components/Tweet/Tweet";
import { Tweet as TweetInterface } from "../interfaces";
import PagerView from "react-native-pager-view";

const Tweets = ({
  year,
  content,
  color,
}: {
  year: string;
  content: TweetInterface[];
  color: string;
}) => {
  const tweets = [...content].reverse();

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.year, { backgroundColor: color }]}>{year}</Text>
      <View style={styles.tweetsWrapper}>
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} color={color} />
        ))}
      </View>
    </ScrollView>
  );
};

export const TweetsPager = ({
  route,
}: {
  route: Route<string, { tweets: string }>;
}) => {
  return (
    <PagerView initialPage={0} style={styles.pagerView}>
      {Object.keys(route.params.tweets).map((year) => (
        <Tweets
          year={year}
          content={route.params.tweets[year]}
          color={"#F2023E"}
          key={year}
        />
      ))}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
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
