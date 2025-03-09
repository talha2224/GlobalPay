import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';

const BottomNavBar = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();

  const tabs = [
    {link:"home/index",name: 'Home', icon: <AntDesign name="home" size={22} color="#8F8F8F" />, activeIcon: <AntDesign name="home" size={22} color="#037AE0" /> },
    {link:"home/card",name: 'Card', icon: <AntDesign name="creditcard" size={22} color="#8F8F8F" />, activeIcon: <AntDesign name="creditcard" size={22} color="#037AE0" /> },
    {link:"home/deposit",name: 'Deposit', icon: <MaterialCommunityIcons name="cash-check" size={22} color="#8F8F8F" />, activeIcon: <MaterialCommunityIcons name="cash-check" size={22} color="#037AE0" /> },
    {link:"home/withdraw",name: 'Withdraw', icon: <MaterialCommunityIcons name="cash-fast" size={22} color="#8F8F8F" />, activeIcon: <MaterialCommunityIcons name="cash-fast" size={22} color="#037AE0" /> },
    {link:"home/profile",name: 'Profile', icon: <Feather name="user" size={22} color="#8F8F8F" />, activeIcon: <Feather name="user" size={22} color="#037AE0" /> },
  ];

  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom }]}>
      <View style={styles.navBar}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.name} style={styles.navItem} onPress={() => router.push(tab?.link ==="home/index"?"home":tab?.link)}>
            {tab?.link === route?.name ? tab.activeIcon : tab.icon}
            <Text style={{textAlign:"center",color:tab?.link === route?.name?"#037AE0":"#8F8F8F",fontWeight:"600",marginTop:2}}>{tab?.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
});

export default BottomNavBar;