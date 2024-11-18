import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
  <Tabs screenOptions={{
    headerShown: false,
  }}>
    <Tabs.Screen
        name="home"
        options={{
        tabBarIcon: ({ color }) =>
        <Entypo name="home" size={24} color="black" />
        }}
      />
    <Tabs.Screen
        name="favourite"
        options={{
        title: 'Favourite',
        tabBarIcon: ({ color }) =>
        <MaterialIcons name="favorite" size={24} color="black" />
    }}
    />
    <Tabs.Screen
        name="profile"
        options={{
        title: 'Profile',
        tabBarIcon: ({ color }) =>
        <FontAwesome name="user-circle" size={24} color="black" />        }}
    />
  </Tabs>
  )
}

export default TabLayout