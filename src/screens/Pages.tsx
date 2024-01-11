import { Route } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import dayjs from "dayjs";
import { formatDate } from "../utils/formatDate";

const Pages = ({
  route,
}: {
  route: Route<string, { year: string; content: any[]; color: string }>;
}) => {
  const tweets = route.params.content;
  console.log(route.params.content);
  return (
    <ScrollView style={styles.containerr}>
      <Text style={[styles.year, { backgroundColor: route.params.color }]}>
        {route.params.year}
      </Text>
      <View style={styles.container}>
        {tweets.map((tweet) => (
          <View style={styles.tweetWrapper} key={tweet.id}>
            <View style={styles.dateT}>
              <Text
                style={[
                  styles.date,
                  { backgroundColor: `${route.params.color}80` },
                ]}
              >
                {formatDate(tweet.created_at).fullDate}
              </Text>
            </View>
            <Text style={styles.tweet}>{tweet.full_text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { gap: 20 },
  containerr: {
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
  tweetWrapper: {
    backgroundColor: "#f7f7f8",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    paddingStart: 0,
    paddingTop: 0,
    gap: 20,
    /*     borderBottomColor: "#a2a2a2",
    borderBottomWidth: 0.5, */
  },
  date: {
    fontSize: 18,
    color: "#000",
    padding: 5,
  },
  dateT: {
    width: 85,
  },
  tweet: {
    paddingStart: 20,
    fontSize: 20,
    fontFamily: "Inter_300Light",
  },
  /*   timeline: {
    position: "absolute",
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
  }, */
});

export default Pages;
