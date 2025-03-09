import React, { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Logo from '../../assets/images/onboarding/logo.png'
import Rate from '../../assets/images/home/rate.png'
import Badge from '../../assets/images/home/tick.png'
import BottomNavBar from '../../components/BottomNav'

const About = () => {
    const [addNewCardModel, setAddNewCardModel] = useState(false);
    const [cardDetailsModel, setCardDetailsModel] = useState(false);

    return (

        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1, position: "relative" }}>



            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Pressable onPress={() => router.push("/home")} style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
                    <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                    <Text style={{ color: "#037AE0" }}>Back</Text>
                </Pressable>

                <Text style={{ fontSize: 17 }}>About Us</Text>

                <View></View>


            </View>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>

                <Image source={Logo} />
                <Text style={{ color: "#c4c4c4" }}>Version  2.6.0</Text>
                <Text style={{ color: "#c4c4c4", marginTop: 8 }}>Would you recommend GlobaPay to friends?</Text>
                <Image source={Rate} style={{ marginTop: 16 }} />

                <TextInput placeholder='Please share the reason for your rating (Optional)' style={{ width: "100%", height: 50, borderWidth: 1, borderColor: "#DADADA", marginTop: 10, borderRadius: 5, paddingHorizontal: 10 }} />

                <TouchableOpacity onPress={() => { router.push("/home")}} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 100 }}>
                    <Text style={{ color: "#fff" }}>Send</Text>
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 40 }}>
                <Text style={{marginTop:8}}>App Upgrade</Text>
                <Text style={{marginTop:8}}>Privacy Policy</Text>
                <Text style={{marginTop:8}}>Terms & Condition</Text>
                <Text style={{marginTop:8}}>Clear Cache</Text>

            </View>



        </View>
    )
}

export default About