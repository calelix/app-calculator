import {
  Text
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Image } from "expo-image"

export default function Index() {
  return (
    <SafeAreaView style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Text style={{ fontFamily: "PretendardBold" }}>
        Title
      </Text>
      <Image
        source={require("@/assets/images/example.png")}
        style={{ width: 200, height: 200 }}
      />
    </SafeAreaView>
  )
}
