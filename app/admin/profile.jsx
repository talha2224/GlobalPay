import React, { useState } from 'react'
import { Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Badge from '../../assets/images/home/badge.png'
import { router } from 'expo-router'
import BottomNavAdmin from '../../components/BottomNavAdmin'

const Profile = () => {

    return (


        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 17 }}>Profile</Text>

                <Pressable style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                        <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#8F8F8F", borderRadius: 100 }}>
                            <Feather name="user" size={20} color="#fff" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16 }}>jo******@gmail.com</Text>
                            <Text style={{ color: "#c4c4c4", marginTop: 3 }}>ID:  0000000000 <Feather name="copy" size={12} color="#c4c4c4" /></Text>
                        </View>
                    </View>

                    <Pressable><FontAwesome5 name="chevron-right" size={14} color="#848484" /></Pressable>

                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Security settings</Text>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="security" size={20} color="#037AE0" />
                        <Text>Key Security</Text>
                    </View>
                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Payment settings</Text>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="payment" size={20} color="#4CD964" />
                        <Text>Payment Priority</Text>
                    </View>

                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>General</Text>

                <Pressable  style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Ionicons name="settings" size={20} color="#FF8A65" />
                        <Text>Settings</Text>
                    </View>

                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="window" size={20} color="#F8BD00" />
                        <Text>Community</Text>
                    </View>

                </Pressable>

                <Pressable  style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <AntDesign name="sharealt" size={20} color="#009CD9" />
                        <Text>Share</Text>
                    </View>
                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="alert-circle" size={20} color="#FF6F00" />
                        <Text>About us</Text>
                    </View>
                    <Text style={{ color: "#c4c4c4" }}>v 2.6.0</Text>

                </Pressable>


            </ScrollView>

            <BottomNavAdmin />
        </View>

    )
}

export default Profile