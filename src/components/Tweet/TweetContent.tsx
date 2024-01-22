import { Tweet } from "../../interfaces";
import { Text, StyleSheet, View } from "react-native";
import { A } from "@expo/html-elements";
import { Media } from "./Media";
import React from "react";

export const TweetContent = ({ tweet }: { tweet: Tweet }) => {
  const { full_text, entities, extended_entities } = tweet;

  if (
    (!entities.urls || entities.urls.length === 0) &&
    !entities.media &&
    !entities.user_mentions
  ) {
    return <Text style={styles.tweet}>{full_text}</Text>;
  }

  const parts = full_text
    .split(/(@[a-zA-Z0-9_\-]+|https?:\/\/[^\s]+)/g)
    .filter(Boolean);

  return (
    <View>
      <Text style={styles.tweet}>
        {parts.map((part, index) => {
          const existing = entities.urls.find((urlData) =>
            urlData.url.includes(part)
          );
          if (existing) {
            return (
              <React.Fragment key={index}>
                {existing.expanded_url.includes("twitter.com") && (
                  <Text>(quote tweet)</Text>
                )}
                <A key={index} href={part} style={styles.link}>
                  {existing.expanded_url}
                </A>
              </React.Fragment>
            );
          } else if (entities.media && part.startsWith("http")) {
            return "";
          } else if (entities.user_mentions && part.startsWith("@")) {
            return (
              <Text key={index} style={styles.mention}>
                {part}
              </Text>
            );
          }
          return part;
        })}
      </Text>
      {extended_entities && extended_entities.media && (
        <Media data={extended_entities} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tweet: {
    fontSize: 20,
    fontFamily: "PlusJakartaSans_200ExtraLight",
    lineHeight: 25,
  },
  link: {
    color: "#0000eb",
  },
  mention: {
    fontFamily: "PlusJakartaSans_600SemiBold",
  },
});
