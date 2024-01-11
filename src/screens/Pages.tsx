import { Route } from "@react-navigation/native";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { formatDate } from "../utils/formatDate";
import { Tweet } from "../interfaces";
import { A } from "@expo/html-elements";
import { Image } from "expo-image";

const TweetContent = ({ tweet }: { tweet: Tweet }) => {
  const { full_text, entities } = tweet;

  if ((!entities.urls || entities.urls.length === 0) && !entities.media) {
    return <Text style={styles.tweet}>{full_text}</Text>;
  }

  const parts = full_text.split(/(https?:\/\/\S+)/);

  return (
    <View>
      <Text style={styles.tweet}>
        {parts.map((part, index) => {
          if (entities.urls.find((urlData) => urlData.url.includes(part))) {
            return (
              <A key={index} href={part} style={styles.link}>
                {part}
              </A>
            );
          } else if (entities.media) {
            return "";
          }
          return part;
        })}
      </Text>
      {entities.media &&
        entities.media.map(({ media_url_https, sizes }) => (
          <View style={styles.imageCont} key={media_url_https}>
            <Image
              style={[
                styles.image,
                {
                  aspectRatio: sizes.small.w / sizes.small.h,
                },
              ]}
              source={media_url_https}
              contentFit="cover"
            />
          </View>
        ))}
    </View>
  );
};

const Pages = ({
  route,
}: {
  route: Route<string, { year: string; content: any[]; color: string }>;
}) => {
  const tweets = route.params.content;

  return (
    <ScrollView style={styles.containerr}>
      <Text style={[styles.year, { backgroundColor: route.params.color }]}>
        {route.params.year}
      </Text>
      <View style={styles.container}>
        {tweets.map((tweet) => (
          <View style={styles.tweetWrapper} key={tweet.id}>
            <View>
              <Text
                style={[
                  styles.date,
                  { backgroundColor: `${route.params.color}80` },
                ]}
              >
                {formatDate(tweet.created_at).fullDate}
              </Text>
            </View>
            <TweetContent tweet={tweet} />
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
  link: {
    color: "#0000eb",
  },
  date: {
    fontSize: 18,
    color: "#000",
    padding: 5,
  },
  tweet: {
    paddingStart: 20,
    fontSize: 20,
    fontFamily: "Inter_300Light",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "auto",
  },
  imageCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  /*   timeline: {
    position: "absolute",
    backgroundColor: "#000",
    height: "100%",
    width: "100%",
  }, */
});

export default Pages;
