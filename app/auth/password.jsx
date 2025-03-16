import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import Flag from '../../assets/images/auth/flag.png'

const Password = () => {

    const [activeTab, setActiveTab] = useState("email")

    return (

        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative", paddingHorizontal: 20 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 40 }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Log in</Text>
                <Pressable onPress={() => router.push("/auth")}><Entypo name="cross" size={30} color="#000" /></Pressable>
            </View>


            <Text style={{ color: "#666666", fontSize: 16 }}>Password</Text>

            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={"******"} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20 }} />

            <Pressable style={{ width: "100%", marginTop: 20, justifyContent: "flex-end", alignItems: "flex-end" }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Forgot password?</Text>
            </Pressable>

            <Pressable onPress={()=>router.push("/home")} style={{ backgroundColor: "#037AE0", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "600" }}>Log In</Text>
            </Pressable>


        </View>

    )
}

export default Password