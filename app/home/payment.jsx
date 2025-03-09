import React, { useState } from 'react'
import BottomNavBar from '../../components/BottomNav'
import { Dimensions, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { Entypo, Feather, Ionicons,AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import Toggle from '../../assets/images/home/toggle.png'
import Badge from '../../assets/images/home/badge.png'
import Btc from '../../assets/images/home/btc.png'
import Eth from '../../assets/images/home/eth.png'
import Dollar from '../../assets/images/home/dollar.png'
import Usdt from '../../assets/images/home/usdt.png'
const Payment = () => {
    const [profilePreview, setProfilePreview] = useState(false)
    return (


        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <Pressable onPress={() => router.push("/home/profile")} style={{ flexDirection: "row", gap: 0, alignItems: "center", marginLeft: -7 }}>
                        <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                        <Text style={{ color: "#037AE0" }}>Back</Text>
                    </Pressable>

                    <Text style={{ fontSize: 16, marginLeft: -40 }}>Payment Priority</Text>

                    <View></View>


                </View>


                <Pressable style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#EEEFF3", paddingBottom: 10 }}>
                    <View style={{}}>
                        <Text>Set preferred payment</Text>
                        <Text style={{ fontSize: 12, color: "#c4c4c4", width: 250, marginTop: 5 }}>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </Text>
                    </View>
                    <Image source={Toggle} />
                </Pressable>


                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <View style={{ backgroundColor: "#FFEBEA", padding: 8, borderRadius: 100 }}>
                                <AntDesign name="gift" size={20} color="#FF3A2F" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16 }}>Reward</Text>
                                <Text style={{ color: "#8f8f8f" }}>Feb 2 - 2019 - 19:28</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, color: "#4CD964" }}>+5.00 USD</Text>
                            <View style={{ paddingHorizontal: 4, paddingVertical: 2, backgroundColor: "#e4f2fc", borderRadius: 4, marginTop: 2 }}>
                                <Text style={{ color: "#037AE0", textAlign: "center" }}>Received</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                            <Image source={Dollar} />
                            <View>
                                <Text style={{ fontSize: 16 }}>USD</Text>
                                <Text style={{ color: "#4CD964" }}>+1.0%</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16 }}>$0.00</Text>
                            <Text style={{ color: "#8f8f8f" }}>5.00 USD</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                            <Image source={Btc} />
                            <View>
                                <Text style={{ fontSize: 16 }}>BTC</Text>
                                <Text style={{ color: "#4CD964" }}>+1.0%</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16 }}>$5.00</Text>
                            <Text style={{ color: "#8f8f8f" }}>5.00 USD</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                            <Image source={Usdt} />
                            <View>
                                <Text style={{ fontSize: 16 }}>USDT</Text>
                                <Text style={{ color: "#FF3A2F" }}>-5.0%</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16 }}>$0.00</Text>
                            <Text style={{ color: "#8f8f8f" }}>5.00 USDT</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                            <Image source={Eth} />
                            <View>
                                <Text style={{ fontSize: 16 }}>ETH</Text>
                                <Text style={{ color: "#4CD964" }}>+1.0%</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16 }}>$5.00</Text>
                            <Text style={{ color: "#8f8f8f" }}>5.00 USD</Text>
                        </View>

                    </View>
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

export default Payment