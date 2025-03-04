import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Logo from '../assets/images/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const Onboarding = () => {

  useEffect(()=>{
    setTimeout(() => {
      router.push("/onboarding")
    }, 5000);
  },[])

  return (
    <LinearGradient colors={['#0E47A1', '#692086']} style={styles.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <View style={styles.content}>
        <Image source={Logo} alt="logo" />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;