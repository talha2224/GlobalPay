import React, { useEffect, useRef, useState } from 'react'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Mastercard from '../../assets/images/home/mastercard.png'
import BottomNavBar from '../../components/BottomNav'

const Deposit = () => {
    const [otpModel, setOtpModel] = useState(false)

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current = otp.map((_, index) => inputRefs.current[index] || React.createRef());
    }, [otp]);

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1 && index < otp.length - 1) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput && nextInput.current) {
                nextInput.current.focus();
            }
        }
    };

    const handleKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
            const prevInput = inputRefs.current[index - 1];
            if (prevInput && prevInput.current) {
                prevInput.current.focus();
            }
        }
    };

    return (

        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>



            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Pressable onPress={() => router.push("/home")} style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
                    <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                    <Text style={{ color: "#037AE0" }}>Back</Text>
                </Pressable>

                <View></View>

                <Pressable onPress={() => { router.push("/home/qr") }}>
                    <AntDesign name="qrcode" size={20} color="black" />
                </Pressable>

            </View>


            <Text style={{ fontSize: 18, paddingHorizontal: 8, marginTop: 30 }}>Deposit</Text>
            <Text style={{ color: "#8f8f8f", paddingHorizontal: 8 }}>Top up with your account</Text>



            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>Amount</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='$ Enter amount to deposit' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5, height: 40 }} />
                <Text style={{ marginTop: 10, color: "#FF6F00" }}>0.20% will be deducted as charges fee</Text>

            </View>


            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                <Text>Funding Method</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                        <Image source={Mastercard} />
                        <View>
                            <Text style={{ fontSize: 16 }}>Bank name</Text>
                            <Text style={{ color: "#848484" }}>******000</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#EBEDEE", borderRadius: 100, }}>
                        <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                    </View>

                </View>

            </View>

            <TouchableOpacity onPress={() => { setOtpModel(true) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                <Text style={{ color: "#fff" }}>Confirm</Text>
            </TouchableOpacity>

            {
                otpModel && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "100%", marginHorizontal: 30, paddingTop: 50 }}>



                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>

                                <Pressable onPress={() => { setOtpModel(false) }} style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Ionicons name="chevron-back" size={20} color="#037AE0" />
                                    <Text style={{ color: "#037AE0" }}>Back</Text>
                                </Pressable>
                                <Text style={{ fontSize: 18, marginLeft: -40 }}>OTP Verification</Text>

                                <View></View>

                            </View>


                            <Text style={{ color: "#8F8F8F", width: "70%", marginLeft: 10, marginBottom: 20 }}>Either your bank will send you a one time code.</Text>

                            <View style={{flexDirection: 'row',justifyContent: 'center',marginLeft:20,marginBottom:20}}>
                                {otp.map((digit, index) => (<TextInput key={index} style={{width:50,height:50,borderWidth: 1,borderColor: '#ddd',borderRadius: 8,marginRight: 5,textAlign: 'center',fontSize: 16,backgroundColor:"#F4FCFF",}} value={digit} onChangeText={(text) => handleOtpChange(text, index)} onKeyPress={(event) => handleKeyPress(event, index)} maxLength={1} keyboardType="numeric" ref={inputRefs.current[index]} />))}
                            </View>

                            <Pressable style={{paddingHorizontal:5,paddingVertical:2,backgroundColor:"#F4FCFF",width:40,justifyContent:"center",alignItems:"center",borderRadius:100}}><Text style={{color:"#8f8f8f"}}>59s</Text></Pressable>



                            <TouchableOpacity onPress={() => { setOtpModel(false) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 15, borderRadius: 100 }}>
                                <Text style={{ color: "#fff" }}>Confirm</Text>
                            </TouchableOpacity>



                        </View>

                    </View>
                )
            }


            <BottomNavBar />

        </View>
    )
}

export default Deposit