import { Entities } from "../../interfaces";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export const Media = ({ data }: { data: Entities }) => {
  return (
    <>
      {data.media.map(({ media_url_https, sizes }) => (
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
    </>
  );
};

const styles = StyleSheet.create({
  imageCont: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
});
