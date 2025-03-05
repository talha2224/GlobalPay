import React, { useState, useRef, useEffect } from 'react';
import { Pressable, Text, View, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Ensures that the refs are created before focusing is triggered.
    inputRefs.current = otp.map((_, index) => inputRefs.current[index] || React.createRef());
  }, [otp]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < otp.length - 1) {
      // Make sure inputRefs is correctly populated before calling .focus
      const nextInput = inputRefs.current[index + 1];
      if (nextInput && nextInput.current) {
        nextInput.current.focus();
      }
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      // Make sure inputRefs is correctly populated before calling .focus
      const prevInput = inputRefs.current[index - 1];
      if (prevInput && prevInput.current) {
        prevInput.current.focus();
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Verification code</Text>
        <Pressable onPress={() => router.push('/auth/register/business')}>
          <Entypo name="cross" size={30} color="#000" />
        </Pressable>
      </View>

      <Text style={styles.verificationText}>We’ve sent the code to jo******@gmail.com</Text>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (<TextInput key={index}style={styles.otpInput}value={digit}onChangeText={(text) => handleOtpChange(text, index)}onKeyPress={(event) => handleKeyPress(event, index)}maxLength={1}keyboardType="numeric"ref={inputRefs.current[index]}/>))}
      </View>

      <View style={styles.timerContainer}>
        <Entypo name="stopwatch" size={16} color="#8F8F8F" />
        <Text style={styles.timerText}>59s</Text>
      </View>

      <Pressable onPress={() => router.push('/auth/register/business/password')} style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </Pressable>

      <Text style={styles.resendText}>Resend code?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  verificationText: {
    marginTop: 10,
    color: '#BBB7A6',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  otpInput: {
    width:50,
    height:50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginRight: 5,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor:"#F4FCFF",
  },
  timerContainer: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#F4FCFF',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 65,
    borderRadius: 100,
    paddingVertical:3,
    marginTop:20,
  },
  timerText: {
    color: '#8F8F8F',
  },
  verifyButton: {
    backgroundColor: '#037AE0',
    height: 50,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resendText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#BBB7A6',
  },
});

export default Otp;