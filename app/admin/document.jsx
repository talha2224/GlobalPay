import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { Entypo, Feather, FontAwesome, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'
import BottomNavAdmin from '../../components/BottomNavAdmin'
import AdminNavbar from '../../components/AdminNavbar'


const Documentation = () => {
    return (

        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, position: "relative" }}>

            <AdminNavbar />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 20 }}>
                    <Text style={{ fontSize: 17 }}>Documentation</Text>
                    <Octicons name="question" size={20} color="#037AE0" />
                </View>

                <View style={{ flexDirection: "row", gap: 10, alignItems: "center", paddingTop: 20 }}>
                    <Feather name="message-square" size={20} color="black" />
                    <Text style={{ fontSize: 15 }}>FAQ</Text>
                </View>


                {
                    [1, 2, 3, 4, 5, 6]?.map((i, index) => (
                        <View key={i} style={{ marginTop: 10, backgroundColor: "#FBFBFB", padding: 10, borderRadius: 5 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                <Text style={{ color: "#c4c4c4" }}>How do i generate my api keys ?</Text>
                                <Entypo name="chevron-small-right" size={24} color="#c4c4c4" />
                            </View>
                        </View>
                    ))
                }

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>API Documentation</Text>

                <Pressable style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <FontAwesome name="lock" size={20} color="#037AE0" />
                        <Text>Authentication</Text>
                    </View>
                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Entypo name="link" size={20} color="#4CD964" />
                        <Text>Endpoints</Text>
                    </View>
                </Pressable>


                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="alert-circle" size={20} color="#FF0D00" />
                        <Text>Error Codes and Troubleshooting</Text>
                    </View>
                </Pressable>




            </ScrollView>

            <BottomNavAdmin />




        </View>


    )
}

export default Documentation