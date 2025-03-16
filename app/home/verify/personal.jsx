import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Flag from '../../../assets/images/auth/flag.png'


const Personal = () => {
    return (
        <View style={{ paddingTop: 50, paddingHorizontal: 20, backgroundColor: "#fff", flex: 1 }}>
            <Pressable onPress={() => { router.push("/home/verify/nationality") }} style={{ flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 20 }}>
                <Ionicons name="chevron-back" size={20} color="#037AE0" />
                <Text style={{ color: "#037AE0", fontSize: 16 }}>Back</Text>
            </Pressable>

            <Text style={{ fontSize: 17 }}>Personal Information</Text>
            <Text style={{ color: "#8f8f8f", marginTop: 8 }}>This information must match your passport or government-issued ID.</Text>

            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'First Name'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20 }} />
            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'Last Name'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop:7, borderRadius: 10, paddingHorizontal: 20 }} />
            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'Date Of Birth'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop:7, borderRadius: 10, paddingHorizontal: 20 }} />
            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'Document Type'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop:7, borderRadius: 10, paddingHorizontal: 20 }} />
            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'Document Number'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop:7, borderRadius: 10, paddingHorizontal: 20 }} />


            <TouchableOpacity onPress={() => { router.push("/home/verify/final") }} style={{ backgroundColor: "#037AE0", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Next</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Personal