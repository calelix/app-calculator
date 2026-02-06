import { useEffect } from "react"
import { Platform, StyleSheet, useColorScheme } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { useFonts } from "expo-font"
import * as NavigationBar from "expo-navigation-bar"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  const [loaded] = useFonts({
    PretendardThin: require("../assets/fonts/pretendard/Pretendard-Thin.otf"),
    PretendardExtraLight: require("../assets/fonts/pretendard/Pretendard-ExtraLight.otf"),
    PretendardLight: require("../assets/fonts/pretendard/Pretendard-Light.otf"),
    PretendardRegular: require("../assets/fonts/pretendard/Pretendard-Regular.otf"),
    PretendardMedium: require("../assets/fonts/pretendard/Pretendard-Medium.otf"),
    PretendardSemiBold: require("../assets/fonts/pretendard/Pretendard-SemiBold.otf"),
    PretendardBold: require("../assets/fonts/pretendard/Pretendard-Bold.otf"),
    PretendardExtraBold: require("../assets/fonts/pretendard/Pretendard-ExtraBold.otf"),
    PretendardBlack: require("../assets/fonts/pretendard/Pretendard-Black.otf"),
  })

  const colorScheme = useColorScheme()
  const themeStatusBarStyle = colorScheme === "light" ? "light" : "dark"
  const themeNavigationBarStyle = colorScheme === "light" ? "dark" : "light"

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setStyle(themeNavigationBarStyle)
    }
  }, [themeNavigationBarStyle])

  if (!loaded) {
    return null
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={themeStatusBarStyle} />
      <Stack />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
