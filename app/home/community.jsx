import React, { useState } from 'react'
import BottomNavBar from '../../components/BottomNav'
import { Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import community from '../../assets/images/home/community.png'
import socials from '../../assets/images/home/socials.png'

import { router } from 'expo-router'

const Community = () => {
    const [profilePreview, setProfilePreview] = useState(false)
    return (


        <View style={{ paddingHorizontal: 20, paddingVertical: 50, backgroundColor: "#fff", flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <Pressable onPress={() => router.push("/home/profile")} style={{ flexDirection: "row", gap: 0, alignItems: "center", marginLeft: -7 }}>
                        <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                        <Text style={{ color: "#037AE0" }}>Back</Text>
                    </Pressable>

                    <Text style={{ fontSize: 16, marginLeft: -40 }}>Community</Text>

                    <View></View>


                </View>

                <Text style={{ fontSize: 25, textAlign: "center", marginTop: 20, fontWeight: "700" }}>Welcome to the GlobaPay community!</Text>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <Image source={community} />
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <Image source={socials} style={{ height: 35, width: 300 }} />
                </View>

                <View style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                    <View>
                        <Text style={{ color: "#c4c4c4" }}>Support Email</Text>
                        <Text>Support@globapay.com</Text>
                    </View>
                    <Ionicons name="copy-outline" size={20} color="black" />
                </View>
                <View style={{ backgroundColor: "#FAFAFA", marginTop: 10, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 12, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                    <View>
                        <Text style={{ color: "#c4c4c4" }}>Official Website</Text>
                        <Text>globapay.com</Text>
                    </View>
                    <Ionicons name="copy-outline" size={20} color="black" />
                </View>


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

export default Community