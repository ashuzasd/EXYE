import React from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Import your custom images
import homeIcon from '../assets/home.png';
import settingsIcon from '../assets/wallet.png';
import notificationIcon from '../assets/notification.png';
import backgroundImage from '../assets/vectornav.png';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Home Screen okay</Text>
  </SafeAreaView>
);

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Settings Screen</Text>
  </SafeAreaView>
);

const NotificationScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Notifications Screens</Text>
  </SafeAreaView>
);

const WalletPage = () => {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image source={homeIcon} style={styles.tabIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Image source={settingsIcon} style={styles.tabIcon} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <Image source={notificationIcon} style={styles.tabIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default WalletPage;
