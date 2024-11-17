import { Stack } from "expo-router";
import React from "react";
import "../global.css";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
