import React, { useState } from 'react'
import BottomNavBar from '../../components/BottomNav'
import { Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Toggle from '../../assets/images/home/toggle.png'
import { router } from 'expo-router'

const Security = () => {
    const [profilePreview, setProfilePreview] = useState(false)
    return (


        <View style={{ paddingHorizontal: 20, paddingVertical: 50, backgroundColor: "#fff", flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <Pressable onPress={() => router.push("/home/profile")} style={{ flexDirection: "row", gap: 0, alignItems: "center", marginLeft: -7 }}>
                        <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                        <Text style={{ color: "#037AE0" }}>Back</Text>
                    </Pressable>

                    <Text style={{ fontSize: 16, marginLeft: -40 }}>Security</Text>

                    <View></View>


                </View>


                <Text style={{ fontSize: 17, marginTop: 15 }}>Security</Text>



                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Authentication methods</Text>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="security" size={20} />
                        <Text>Google Authenticator</Text>
                    </View>
                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="email" size={20} color="black" />
                        <Text>Email</Text>
                    </View>
                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="smartphone" size={20} color="black" />
                        <Text>Phone</Text>
                    </View>
                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Advanced security</Text>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="devices" size={20} color="black" />
                        <Text>Devices</Text>
                    </View>
                </Pressable>
                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="password" size={20} color="black" />
                        <Text>Change Password</Text>
                    </View>
                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="lock" size={20} color="black" />
                        <Text>Auto-Lock</Text>
                    </View>
                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Account management</Text>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="user" size={20} color="#000" />
                        <Text>Account Enabled</Text>
                    </View>
                    <Image source={Toggle} />
                </Pressable>

                <Pressable style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="user" size={20} color="#FF3A2F" />
                        <Text style={{ color: "#FF3A2F" }}>Delete Account</Text>
                    </View>

                </Pressable>


            </ScrollView>

            <BottomNavBar />


            {
                profilePreview && (
                    <Pressable onPress={() => { setProfilePreview(false) }} style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "38%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#8F8F8F", borderRadius: 100 }}>
                                    <Feather name="user" size={20} color="#fff" />
                                </View>
                                <Text style={{ fontSize: 16 }}>jo******@gmail.com</Text>

                            </View>
                            <View style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>ID:  0000000000</Text>
                                <Ionicons name="copy-outline" size={20} color="black" />
                            </View>

                            <View style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Identification verification</Text>
                                <Text style={{ color: "#FF6F00" }}>Not submitted</Text>
                            </View>
                        </View>

                    </Pressable>
                )
            }

        </View>

    )
}

export default Security