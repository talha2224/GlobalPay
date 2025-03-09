import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import Mastercard from '../../assets/images/home/mastercard.png'
import BottomNavBar from '../../components/BottomNav'

const Deposit = () => {
    return (

        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>



            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Pressable onPress={() => router.push("/home")} style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
                    <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                    <Text style={{ color: "#037AE0" }}>Back</Text>
                </Pressable>

                <View></View>

                <Pressable onPress={()=>{router.push("/home/qr")}}>
                    <AntDesign name="qrcode" size={20} color="black" />
                </Pressable>

            </View>


            <Text style={{ fontSize: 18, paddingHorizontal: 8, marginTop: 30 }}>Deposit</Text>
            <Text style={{ color: "#8f8f8f", paddingHorizontal: 8 }}>Top up with your account</Text>



            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>Amount</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='$ Enter amount to deposit' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />
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


            <BottomNavBar/>

        </View>
    )
}

export default Deposit