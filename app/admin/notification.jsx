import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Illustration from '../../assets/images/home/Illustration2.png'

const Adminnotification = () => {
    const [activeBtn, setactiveBtn] = useState("all")
    return (

        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>



            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Pressable onPress={() => router.push("/admin")} style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
                    <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                    <Text style={{ color: "#037AE0" }}>Back</Text>
                </Pressable>

                <Text style={{ fontSize: 17, marginLeft: -20 }}>Notifications</Text>

                <View></View>

            </View>

            <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 10 }}>

                <TouchableOpacity onPress={()=>setactiveBtn("all")} style={{ paddingHorizontal:25, paddingVertical: 8, backgroundColor:activeBtn==="all" ?"#E6F2FC":"#EBEDEE", borderRadius: 114, marginTop: 2 }}>
                    <Text style={{ color:activeBtn=="all"?"#037AE0":"#000", textAlign: "center" }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setactiveBtn("Transaction")} style={{ paddingHorizontal:15, paddingVertical: 8, backgroundColor:activeBtn==="Transaction" ?"#E6F2FC":"#EBEDEE", borderRadius: 114, marginTop: 2 }}>
                    <Text style={{ color:activeBtn=="Transaction"?"#037AE0":"#000", textAlign: "center" }}>Transaction</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setactiveBtn("System")} style={{ paddingHorizontal:25, paddingVertical: 8, backgroundColor:activeBtn==="System" ?"#E6F2FC":"#EBEDEE", borderRadius: 114, marginTop: 2 }}>
                    <Text style={{ color:activeBtn=="System"?"#037AE0":"#000", textAlign: "center" }}>System</Text>
                </TouchableOpacity>


            </View>


            <View style={{ flex: 1, height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Image source={Illustration} />
                <Text style={{ color: "#8F8F8F", fontSize: 16, marginTop: 7 }}>No new notifications</Text>
            </View>


        </View>

    )
}

export default Adminnotification