import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Flag from '../../../assets/images/auth/flag.png'

const Nationality = () => {
    return (
        <View style={{ paddingTop: 50, paddingHorizontal: 20, backgroundColor: "#fff", flex: 1 }}>
            <Pressable onPress={() => { router.push("/home/profile") }} style={{ flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 20 }}>
                <Ionicons name="chevron-back" size={20} color="#037AE0" />
                <Text style={{ color: "#037AE0", fontSize: 16 }}>Back</Text>
            </Pressable>

            <Text style={{ fontSize: 17 }}>Personal Information</Text>
            <Text style={{ color: "#8f8f8f", marginTop: 8 }}>This information must match your passport or government-issued ID.</Text>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#F7F7F7", padding: 10, borderRadius: 5, marginTop: 10 }}>

                <View style={{ flexDirection: "row", alignItems: "center", marginRight: 5 }}>
                    <Image source={Flag} style={{ marginRight: 10 }} />
                    <Text>USA</Text>
                </View>

                <Feather name="chevron-right" size={20} color="#000" />


            </View>


            <TouchableOpacity onPress={() => { router.push("/home/verify/personal") }} style={{ backgroundColor: "#037AE0", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Next</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Nationality