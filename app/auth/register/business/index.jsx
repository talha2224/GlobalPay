import React, { useState } from 'react'
import { Dimensions, Image, Pressable, Text, TextInput, View } from 'react-native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Google from '../../../../assets/images/auth/google.png'
import Apple from '../../../../assets/images/auth/apple.png'

const Register = () => {

    const [activeTab, setActiveTab] = useState("email")
    const [isChecked, setChecked] = useState(false);
    return (

        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative", paddingHorizontal: 20 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 40 }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Sign up</Text>
                <Pressable onPress={() => router.push("/onboarding")}><Entypo name="cross" size={30} color="#000" /></Pressable>
            </View>


            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 15 }}>
                <Pressable onPress={() => { setActiveTab("email") }} style={{ borderBottomWidth: 2, borderBottomColor: activeTab == "email" ? "#0E47A1" : "#fff", paddingBottom: 4, width: 70 }}><Text style={{ color: activeTab == "email" ? "#0E47A1" : "#666666", textAlign: "center", fontSize: 16 }}>Email</Text></Pressable>
                <Pressable onPress={() => { setActiveTab("phone") }} style={{ borderBottomWidth: 2, borderBottomColor: activeTab == "phone" ? "#0E47A1" : "#fff", paddingBottom: 4, width: 70 }}><Text style={{ color: activeTab == "phone" ? "#0E47A1" : "#666666", textAlign: "center", fontSize: 16 }}>Phone</Text></Pressable>
            </View>

            <TextInput keyboardType={activeTab !== 'email' ? "numeric" : "default"}   placeholderTextColor={"#C9C5B4"} placeholder={activeTab == 'email' ? 'e.g. example@gmail.com' : 'e.g. +12********'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20 }} />


            <View style={{ flexDirection: "row", alignItems: "center", gap: 10,marginTop:10 }}>
                <Pressable onPress={() => setChecked(!isChecked)} style={{width:15,height:15,borderRadius: 5,borderWidth:1,borderColor: "#037AE0",justifyContent: "center",alignItems: "center", borderColor: isChecked ? '#037AE0' : '#ddd' }}>
                    {isChecked && <Ionicons name="checkmark" size={10} color="#037AE0" />}
                </Pressable>
                <Text style={{ color: "#989999", fontSize: 12 }}>By clicking ‘Next’, you agree to our Terms of Service</Text>
            </View>


            <Pressable onPress={() => router.push("/auth/register/business/otp")} style={{ backgroundColor: "#037AE0", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "600" }}>Next</Text>
            </Pressable>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                <View style={{ flex: 1, marginRight: 10, height: 1, backgroundColor: "#FFF3F1" }}></View>
                <Text style={{ color: "#989999", marginRight: 10 }}>Or</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: "#FFF3F1" }}></View>
            </View>


            <Pressable style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Image source={Google} />
                <Text style={{ color: '#000', fontSize: 16, fontWeight: "600", marginLeft: 10 }}>Google</Text>
            </Pressable>

            <Pressable style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Image source={Apple} />
                <Text style={{ color: '#000', fontSize: 16, fontWeight: "600", marginLeft: 10 }}>Apple</Text>
            </Pressable>


            <Pressable onPress={() => router.push("/auth")} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 4, position: 'absolute', bottom: 30, width: Dimensions.get('screen').width }}>
                <Text style={{ fontSize: 15, color: '#C9C5B4' }}>Already have an account ? <Text style={{ fontSize: 15, color: '#0E47A1' }}>Log in</Text></Text>
            </Pressable>


        </View>

    )
}

export default Register