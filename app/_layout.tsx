import { useEffect } from "react"
import { Platform } from "react-native"

import * as NavigationBar from "expo-navigation-bar"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setStyle("light")
    }
  }, [])
  
  return (
    <>
      <StatusBar style="dark" />
      <Stack />
    </>
  )
}
