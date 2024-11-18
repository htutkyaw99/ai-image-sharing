import { Slot, Stack } from "expo-router";
import React from "react";
import "../global.css";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
};

export default RootLayout;
