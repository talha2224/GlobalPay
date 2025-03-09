import React, { useEffect, useState } from 'react'
import { Dimensions, Image, TouchableOpacity, ScrollView, Text, View, Pressable } from 'react-native'
import BottomNavBar from '../../components/BottomNav'
import Navbar from '../../components/Navbar'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import Badge from '../../assets/images/home/tick.png'
import Mastercard from '../../assets/images/home/mastercard.png'
import card from '../../assets/images/home/card.png'
import card2 from '../../assets/images/home/card2.png'
import card3 from '../../assets/images/home/card3.png'
import Successful from '../../assets/images/home/successful.png'

import { router } from 'expo-router'

const Card = () => {

    const [cardDesignModel, setCardDesignModel] = useState(false)
    const [paymentMethodModel, setPaymentMethodModel] = useState(false)
    const [successfulModel, setSuccessfulModel] = useState(false)

    const [activeBtn, setactiveBtn] = useState("virtual")


    return (

        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, position: "relative" }}>


            <Navbar />


            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{ fontSize: 17, marginTop: 15, fontWeight: "500" }}>Select Card</Text>


                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>

                    <TouchableOpacity onPress={() => setactiveBtn("virtual")} style={{ paddingHorizontal: 10, paddingVertical: 8, backgroundColor: activeBtn === "virtual" ? "#E6F2FC" : "#EBEDEE", borderRadius: 114, marginTop: 2 }}>
                        <Text style={{ fontSize: 13, color: activeBtn == "virtual" ? "#037AE0" : "#000", textAlign: "center" }}>Virtual Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setactiveBtn("physical")} style={{ paddingHorizontal: 10, paddingVertical: 8, backgroundColor: activeBtn === "physical" ? "#E6F2FC" : "#EBEDEE", borderRadius: 114, marginTop: 2 }}>
                        <Text style={{ fontSize: 13, color: activeBtn == "physical" ? "#037AE0" : "#000", textAlign: "center" }}>Physical Card</Text>
                    </TouchableOpacity>



                </View>


                {
                    activeBtn == "virtual" ?
                        <View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image source={card} style={{ marginTop: 10, width: 335, height: 225 }} />
                            </View>


                            <View style={{ justifyContent: "space-between", alignItems: "center", marginTop: 10, flexDirection: "row", gap: 10 }}>

                                <Pressable onPress={() => setCardDesignModel(true)} style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: "#E6F2FC", borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 8 }}>
                                    <MaterialCommunityIcons name="google-circles-extended" size={20} color="#037AE0" />
                                    <View>
                                        <Text>Card design</Text>
                                        <Text style={{ color: "#8F8F8F", fontSize: 14 }}>Change your card design</Text>
                                    </View>
                                </Pressable>

                                <Pressable onPress={() => setPaymentMethodModel(true)} style={{ flex: 1, padding: 10, backgroundColor: "#E6F2FC", borderRadius: 10, flexDirection: "row", alignItems: "center", gap: 8 }}>
                                    <MaterialCommunityIcons name="google-circles-extended" size={20} color="#037AE0" />
                                    <View>
                                        <Text>Card settings</Text>
                                        <Text style={{ color: "#8F8F8F", fontSize: 14 }}>Change your card settings</Text>
                                    </View>
                                </Pressable>

                            </View>


                            <Text style={{ fontSize: 16, marginTop: 15 }}>Transaction</Text>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 15 }}>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                    <View style={{ backgroundColor: "#ECFAEF", padding: 8, borderRadius: 100 }}>
                                        <AntDesign name="creditcard" size={20} color="#4CD964" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>Card fee</Text>
                                        <Text style={{ color: "#8f8f8f" }}>Feb 2 - 2019 - 19:28</Text>
                                    </View>
                                </View>

                                <View>
                                    <Text style={{ color: "#FF3A2F" }}>-10.00 USD</Text>
                                    <Text style={{ color: "#4CD964" }}>Successful</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 15, paddingBottom: 80 }}>

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
                                    <Text style={{ color: "#4CD964" }}>+5.00 USD</Text>
                                    <Text style={{ color: "#037AE0" }}>Received</Text>
                                </View>

                            </View>
                        </View>
                        :

                        <View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image source={card} style={{ marginTop: 10, width: 335, height: 225 }} />
                            </View>

                            <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 18 }}>Physical Card</Text>
                                <Text style={{ color: "#8f8f8f", marginTop: 6 }}>Tap and Pay , ATM withdrawal</Text>

                                <TouchableOpacity style={{ borderWidth: 1, borderColor: "#8F8F8F", backgroundColor: "#fff", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 12, borderRadius: 100, marginBottom: 100 }}>
                                    <Text style={{ color: "#000" }}>Apply Card - $100</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                }



            </ScrollView>






            <BottomNavBar />



            {/* MODELS  */}

            {
                cardDesignModel && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <ScrollView style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "90%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ fontSize: 18, paddingHorizontal: 8 }}>Select Card</Text>


                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image source={card} style={{ marginTop: 10, width: 345, height: 225, marginLeft: 10 }} />
                            </View>

                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image source={card2} style={{ marginTop: 10, width: 345, height: 225, marginLeft: 10 }} />
                            </View>

                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Image source={card3} style={{ marginTop: 0, width: 345, height: 225, marginLeft: 10 }} />
                            </View>


                            <TouchableOpacity onPress={() => { setCardDesignModel(false); }} style={{ borderWidth: 1, borderColor: "#8F8F8F", backgroundColor: "#fff", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100, marginBottom: 100 }}>
                                <Text style={{ color: "#000" }}>Cancel</Text>
                            </TouchableOpacity>



                        </ScrollView>

                    </View>
                )
            }

            {
                paymentMethodModel && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "58%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ fontSize: 18, paddingHorizontal: 8, marginTop: 30 }}>Select payment method</Text>
                            <Text style={{ color: "#037AE0", paddingHorizontal: 8 }}>Card fee - $10</Text>


                            <View style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                                <Text>Current card</Text>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                                        <Image source={Mastercard} />
                                        <View>
                                            <Text style={{ fontSize: 16 }}>Bank name</Text>
                                            <Text style={{ color: "#848484" }}>******000</Text>
                                        </View>
                                    </View>
                                    <Image source={Badge} />



                                </View>

                            </View>

                            <View style={{ backgroundColor: "#FAFAFA", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 }}>


                                <View style={{ flexDirection: "row", justifyContent: "start", gap: 10, alignItems: "flex-start", backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                                    <AntDesign name="plus" size={24} color="black" />
                                    <Text style={{ fontSize: 16 }}>Add New Card</Text>

                                </View>

                            </View>

                            <TouchableOpacity onPress={() => { setPaymentMethodModel(false); setSuccessfulModel(true) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                                <Text style={{ color: "#fff" }}>Confirm</Text>
                            </TouchableOpacity>



                        </View>

                    </View>
                )
            }


            {
                successfulModel && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "80%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                                <Image source={Successful} />
                                <Text style={{ fontSize: 20 }}>Transfer Successful!</Text>
                                <Text style={{ color: "#848484", marginTop: 4 }}>P2P transaction successful</Text>
                            </View>

                            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                                <Text style={{ color: "#838383" }}>Payment</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, borderRadius: 5 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                        <Text style={{ fontSize: 16 }}>Wallet</Text>
                                        <View style={{ paddingHorizontal: 4, paddingVertical: 2, backgroundColor: "#fff8ef", borderRadius: 4, marginTop: 2 }}>
                                            <Text style={{ color: "#FFBC5B", textAlign: "center" }}>Bitcoin</Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: "#037AE0" }}>0.0003</Text>
                                </View>



                            </View>


                            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                                <Text style={{ color: "#838383" }}>Detail Transaction</Text>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, borderRadius: 5 }}>
                                    <Text style={{ fontSize: 16 }}>Amount</Text>
                                    <Text style={{ color: "#000" }}>0.0003</Text>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", backgroundColor: "#FBFBFB", paddingVertical: 6, borderRadius: 5 }}>
                                    <Text style={{ fontSize: 16 }}>Date Transaction</Text>
                                    <Text style={{ color: "#838383" }}>Feb 4 - 2025 19:40</Text>
                                </View>



                            </View>

                            <View style={{ backgroundColor: "#F4FCFF", marginTop: 20, borderRadius: 6, padding: 8 }}>

                                <Text style={{ color: "#838383" }}>ID Transaction</Text>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                    <Text style={{ fontSize: 16 }}>zxyyuwe888w</Text>
                                    <View style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#fff", borderRadius: 100, borderWidth: 1, borderColor: "#C9C5B4" }}>
                                        <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                                    </View>
                                </View>

                            </View>

                            <TouchableOpacity onPress={() => { setSuccessfulModel(false) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                                <Text style={{ color: "#fff" }}>Download Receipt</Text>
                            </TouchableOpacity>


                        </View>

                    </View>
                )
            }

        </View >

    )
}

export default Card