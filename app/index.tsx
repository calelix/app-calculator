import { StyleSheet, Text, View } from "react-native"

import { Image } from "expo-image"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Title
      </Text>
      <Image source={require("@/assets/images/example.png")} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  title: {
    fontFamily: "PretendardBold",
  },
  image: {
    width: 200,
    height: 200,
  }
})
