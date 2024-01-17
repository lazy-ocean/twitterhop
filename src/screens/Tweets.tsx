import { Route } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Tweet from "../components/Tweet/Tweet";
import { Tweet as TweetInterface } from "../interfaces";
import PagerView from "react-native-pager-view";

const COLORS = [
  "#c3b2e7",
  "#f682a5",
  "#c9da8f",
  "#fedf6f",
  "#f9a474",
  "#f36464",
];

const FONT_COLORS = [
  "#52225e",
  "#52225e",
  "#1c471f",
  "#4e200b", //
  "#582614",
  "#4f1316",
];

const Tweets = ({
  year,
  content,
  color,
  fontColor,
}: {
  year: string;
  content: TweetInterface[];
  color: string;
  fontColor: string;
}) => {
  const tweets = [...content].reverse();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={[styles.container, { backgroundColor: color }]}>
        <View style={{ paddingBottom: 50 }}>
          <Text style={[styles.year, { color: fontColor }]}>{year}</Text>
          <View style={styles.tweetsWrapper}>
            {tweets.map((tweet) => (
              <Tweet tweet={tweet} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export const TweetsPager = ({
  route,
}: {
  route: Route<string, { tweets: string }>;
}) => {
  return (
    <PagerView initialPage={0} style={styles.pagerView}>
      {Object.keys(route.params.tweets).map((year) => {
        const color = Math.floor(Math.random() * 6);

        return (
          <Tweets
            year={year}
            content={route.params.tweets[year]}
            color={COLORS[color]}
            key={year}
            fontColor={FONT_COLORS[color]}
          />
        );
      })}
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
    padding: 20,
  },
  year: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    fontFamily: "PlusJakartaSans_500Medium",
    marginBottom: 20,
  },
});

export default Tweets;
