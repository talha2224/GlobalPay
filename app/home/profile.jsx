import React, { useState } from 'react'
import BottomNavBar from '../../components/BottomNav'
import { Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Badge from '../../assets/images/home/badge.png'
import { router } from 'expo-router'
import qr from '../../assets/images/home/qr.png'

const Profile = () => {
    const [profilePreview, setProfilePreview] = useState(false)
    const [settingsModel, setSettingsModel] = useState(false)
    const [languagesModel, setLanguagesModel] = useState(false)
    const [shareModel, setShareModel] = useState(false)

    return (


        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 17 }}>Profile</Text>

                <Pressable onPress={() => setProfilePreview(true)} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>

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

                <View style={{ flex: 1, backgroundColor: "#F8F9FB", padding: 10, height: 150, borderRadius: 5, marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <View>
                        <Text style={{ fontSize: 16 }}>Verify your identity</Text>
                        <Text style={{ color: "#848484", marginTop: 6 }}>Start your spending journey today.</Text>
                        <TouchableOpacity style={{ backgroundColor: "#037AE0", width: 80, height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                            <Text style={{ color: "#fff" }}>Verify</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Image source={Badge} />
                    </View>

                </View>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Security settings</Text>

                <Pressable onPress={() => router.push("/home/security")} style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="security" size={20} color="#037AE0" />
                        <Text>Security</Text>
                    </View>
                    <Text style={{ color: "red" }}>Low</Text>

                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>Payment settings</Text>

                <Pressable onPress={() => router.push("/home/payment")} style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="payment" size={20} color="#4CD964" />
                        <Text>Payment Priority</Text>
                    </View>

                </Pressable>

                <Text style={{ marginTop: 10, color: "#8f8f8f", fontSize: 16 }}>General</Text>

                <Pressable onPress={() => setSettingsModel(true)} style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Ionicons name="settings" size={20} color="#FF8A65" />
                        <Text>Settings</Text>
                    </View>

                </Pressable>

                <Pressable onPress={() => router.push("/home/community")} style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <MaterialIcons name="window" size={20} color="#F8BD00" />
                        <Text>Community</Text>
                    </View>

                </Pressable>

                <Pressable onPress={() => setShareModel(true)} style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <AntDesign name="sharealt" size={20} color="#009CD9" />
                        <Text>Share</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => router.push("/home/about")} style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", }}>
                        <Feather name="alert-circle" size={20} color="#FF6F00" />
                        <Text>About us</Text>
                    </View>
                    <Text style={{ color: "#c4c4c4" }}>v 2.6.0</Text>

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


            {
                settingsModel && (
                    <Pressable onPress={() => { setSettingsModel(false) }} style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "43%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ marginTop: 10, fontSize: 20 }}>Settings</Text>
                            <Text style={{ color: "#838383", marginTop: 4 }}>Sed ut perspiciatis unde</Text>

                            <View style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Currency</Text>
                                <Text>USDT</Text>
                            </View>

                            <Pressable onPress={() => { setSettingsModel(false); setLanguagesModel(true) }} style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Language</Text>
                                <Text style={{ color: "#FF6F00" }}>English</Text>
                            </Pressable>


                            <Pressable onPress={() => router.push("/auth")} style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text style={{ color: "#FF6F00" }}>Logout</Text>
                            </Pressable>
                        </View>

                    </Pressable>
                )
            }

            {
                languagesModel && (
                    <Pressable onPress={() => { setLanguagesModel(false) }} style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "49%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 10, }}>
                                <Feather name="globe" size={24} color="black" />
                                <Text style={{ fontSize: 20 }}>Language</Text>
                            </View>

                            <Pressable onPress={() => { setLanguagesModel(false); setSettingsModel(false) }} style={{ backgroundColor: "#FAFAFA", marginTop: 10, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>English</Text>
                            </Pressable>
                            <Pressable onPress={() => { setLanguagesModel(false); setSettingsModel(false) }} style={{ backgroundColor: "#FAFAFA", marginTop: 10, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Arabic</Text>
                            </Pressable>
                            <Pressable onPress={() => { setLanguagesModel(false); setSettingsModel(false) }} style={{ backgroundColor: "#FAFAFA", marginTop: 10, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>French</Text>
                            </Pressable>
                            <Pressable onPress={() => { setLanguagesModel(false); setSettingsModel(false) }} style={{ backgroundColor: "#FAFAFA", marginTop: 10, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Hindi</Text>
                            </Pressable>
                            <Pressable onPress={() => { setLanguagesModel(false); setSettingsModel(false) }} style={{ backgroundColor: "#FAFAFA", marginTop: 10, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Text>Bangladeshi</Text>
                            </Pressable>
                        </View>

                    </Pressable>
                )
            }

            {
                shareModel && (
                    <Pressable onPress={() => { setShareModel(false) }} style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "75%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 10, }}>
                                <Text style={{ fontSize: 20 }}>Share</Text>
                            </View>


                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                                <Image source={qr} />
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15, borderWidth: 1, borderColor: "#DADADA", padding: 10, borderRadius: 5, backgroundColor: "#ffff" }}>
                                <Text>eyy5 - tttt - 0583 - nvhg - uuyi</Text>
                                <Feather name="copy" size={20} color="black" />
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15, borderWidth: 1, borderColor: "#DADADA", padding: 10, borderRadius: 5, backgroundColor: "#ffff" }}>
                                <Text>Share</Text>
                                <Feather name="copy" size={20} color="black" />
                            </View>



                        </View>

                    </Pressable>
                )
            }

        </View>

    )
}

export default Profile