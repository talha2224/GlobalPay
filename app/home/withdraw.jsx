import React, { useState } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Dimensions, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Mastercard from '../../assets/images/home/mastercard.png'
import Badge from '../../assets/images/home/tick.png'
import BottomNavBar from '../../components/BottomNav'

const Withdraw = () => {
    const [addNewCardModel, setAddNewCardModel] = useState(false);
    const [cardDetailsModel, setCardDetailsModel] = useState(false);
    const [removeCard, setremoveCard] = useState(false)

    return (

        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1, position: "relative" }}>



            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Pressable onPress={() => router.push("/home")} style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
                    <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                    <Text style={{ color: "#037AE0" }}>Back</Text>
                </Pressable>

                <View></View>

                <View></View>


            </View>


            <Text style={{ fontSize: 18, paddingHorizontal: 8, marginTop: 30 }}>Withdraw</Text>
            <Text style={{ color: "#8f8f8f", paddingHorizontal: 8 }}>Sed ut perspiciatis unde omnis iste </Text>



            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>Amount to withdraw</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='$ 50.00 -100,000.00 ' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5, height: 40 }} />
                <Text style={{ marginTop: 10, color: "#FF6F00" }}>0.20% will be deducted as charges fee</Text>

            </View>


            <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                <Text>Destination</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                        <Image source={Mastercard} />
                        <View>
                            <Text style={{ fontSize: 16 }}>Bank name</Text>
                            <Text style={{ color: "#848484" }}>******000</Text>
                        </View>
                    </View>
                    <Pressable onPress={() => { setAddNewCardModel(true) }} style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#EBEDEE", borderRadius: 100, }}>
                        <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                    </Pressable>

                </View>

            </View>

            <BottomNavBar />

            {/* MODEL  */}

            {
                addNewCardModel && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "46%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ fontSize: 18, paddingHorizontal: 8, marginTop: 30 }}>Withdraw destination</Text>


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
                                <Pressable onPress={() => { setAddNewCardModel(false); setCardDetailsModel(true) }} style={{ flexDirection: "row", justifyContent: "start", gap: 10, alignItems: "flex-start", backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                                    <AntDesign name="plus" size={24} color="black" />
                                    <Text style={{ fontSize: 16 }}>Add New Card</Text>

                                </Pressable>
                            </View>
                        </View>

                    </View>
                )
            }


            {
                cardDetailsModel && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "78%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ fontSize: 18, marginTop: 30 }}>Withdraw destination</Text>

                            {
                                !removeCard && (
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

                                            <Pressable onPress={()=>setremoveCard(true)}><Text style={{color:"#FF6F00"}}>Remove</Text></Pressable>



                                        </View>

                                    </View>
                                )
                            }



                            <View style={{ paddingVertical: 10 }}>

                                <Text>Card Info</Text>

                                <TextInput style={{ backgroundColor: "#FCFCFC", width: "100%", height: 50, paddingHorizontal: 10, marginTop: 10, borderRadius: 6, height: 40 }} placeholder='Name on card' placeholderTextColor={"#c4c4c4"} />
                                <TextInput style={{ backgroundColor: "#FCFCFC", width: "100%", height: 50, paddingHorizontal: 10, marginTop: 10, borderRadius: 6, height: 40 }} placeholder='Card Number' placeholderTextColor={"#c4c4c4"} />
                                <TextInput style={{ backgroundColor: "#FCFCFC", width: "100%", height: 50, paddingHorizontal: 10, marginTop: 10, borderRadius: 6, height: 40 }} placeholder='MM/YY' placeholderTextColor={"#c4c4c4"} />
                                <TextInput style={{ backgroundColor: "#FCFCFC", width: "100%", height: 50, paddingHorizontal: 10, marginTop: 10, borderRadius: 6, height: 40 }} placeholder='CVV' placeholderTextColor={"#c4c4c4"} />

                            </View>

                            <TouchableOpacity onPress={() => { setCardDetailsModel(false) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 100 }}>
                                <Text style={{ color: "#fff" }}>Add Card</Text>
                            </TouchableOpacity>



                        </View>

                    </View>
                )
            }






        </View>
    )
}

export default Withdraw