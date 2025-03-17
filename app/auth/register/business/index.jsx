import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Google from '../../../../assets/images/auth/google.png'
import Apple from '../../../../assets/images/auth/apple.png'
import Flag from '../../../../assets/images/auth/flag.png'
import { countryData } from '../../../../code';
import { SvgUri } from 'react-native-svg';

const Register = () => {

    const [activeTab, setActiveTab] = useState("email")
    const [isChecked, setChecked] = useState(false);
    const [showPhone, setshowPhone] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countryData[0])
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = countryData.filter((item) => item?.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (

        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative", paddingHorizontal: 20 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 40 }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Sign up</Text>
                <Pressable onPress={() => router.push("/onboarding")}><Entypo name="cross" size={30} color="#000" /></Pressable>
            </View>


            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 15 }}>
                <Pressable onPress={() => { setActiveTab("email") }} style={{ borderBottomWidth: 2, borderBottomColor: activeTab == "email" ? "#0E47A1" : "#fff", paddingBottom: 4, width: 70 }}><Text style={{ color: activeTab == "email" ? "#0E47A1" : "#666666", textAlign: "center", fontSize: 16 }}>Email</Text></Pressable>
                <Pressable onPress={() => { setActiveTab("phone") }} style={{ borderBottomWidth: 2, borderBottomColor: activeTab == "phone" ? "#0E47A1" : "#fff", paddingBottom: 4, width: 70 }}><Text style={{ color: activeTab == "phone" ? "#0E47A1" : "#666666", textAlign: "center", fontSize: 16 }}>Phone</Text></Pressable>
            </View>


            {
                activeTab == 'email' ?
                    <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'e.g. example@gmail.com'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20 }} />
                    :
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, }}>
                        <Pressable onPress={() => setshowPhone(true)} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#F7F7F7", padding: 10, borderRadius: 5, marginRight: 5 }}>
                            <SvgUri width="30" height="20" uri={`https://country-code-au6g.vercel.app/${selectedCountry?.image}`} />
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ marginLeft: 5, maxWidth: 70 }}>{selectedCountry?.name}</Text>
                        </Pressable>
                        <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'e.g. +12********'} style={{ flex: 1, borderRadius: 10, paddingHorizontal: 20, backgroundColor: "#FCFCFC" }} />
                    </View>
            }



            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                <Pressable onPress={() => setChecked(!isChecked)} style={{ width: 15, height: 15, borderRadius: 5, borderWidth: 1, borderColor: "#037AE0", justifyContent: "center", alignItems: "center", borderColor: isChecked ? '#037AE0' : '#ddd' }}>
                    {isChecked && <Ionicons name="checkmark" size={10} color="#037AE0" />}
                </Pressable>
                <Text style={{ color: "#989999", fontSize: 12 }}>By clicking ‘Next’, you agree to our Terms of Service</Text>
            </View>


            <Pressable onPress={() => router.push("/auth/register/business/otp")} style={{ backgroundColor: "#037AE0", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "600" }}>Next</Text>
            </Pressable>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                <View style={{ flex: 1, marginRight: 10, height: 1, backgroundColor: "#FFF3F1" }}></View>
                <Text style={{ color: "#989999", marginRight: 10 }}>Or</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: "#FFF3F1" }}></View>
            </View>


            <Pressable style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Image source={Google} />
                <Text style={{ color: '#000', fontSize: 16, fontWeight: "600", marginLeft: 10 }}>Google</Text>
            </Pressable>

            <Pressable style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Image source={Apple} />
                <Text style={{ color: '#000', fontSize: 16, fontWeight: "600", marginLeft: 10 }}>Apple</Text>
            </Pressable>


            <Pressable onPress={() => router.push("/auth")} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 4, position: 'absolute', bottom: 30, width: Dimensions.get('screen').width }}>
                <Text style={{ fontSize: 15, color: '#C9C5B4' }}>Already have an account ? <Text style={{ fontSize: 15, color: '#0E47A1' }}>Log in</Text></Text>
            </Pressable>

            {
                showPhone && (
                    <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#fff", paddingHorizontal: 30, paddingVertical: 40, width: "100%", height: "60%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ fontSize: 18 }}>Select Country/Region</Text>

                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#F4F5F9", borderRadius: 20, height: 50, paddingHorizontal: 10, marginTop: 20 }}>
                                <Feather name="globe" size={20} color="#8f8f8f" />
                                <TextInput value={searchQuery} onChangeText={setSearchQuery} placeholder='Search Country/Region' placeholderTextColor={"#8f8f8f"} style={{ flex: 1, height: "100%" }} />
                            </View>
                            <FlatList data={filteredData} showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 20 }} keyExtractor={(item) => item?.unicode}
                                renderItem={({ item }) => (
                                    <Pressable onPress={() => { setSelectedCountry(item); setshowPhone(false); }} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderBottomColor: '#EFF1F4', borderBottomWidth: 2, paddingBottom: 10, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                            <SvgUri width="30" height="20" uri={`https://country-code-au6g.vercel.app/${item?.image}`} />
                                            <Text>{item?.name}</Text>
                                        </View>
                                        <Text style={{ fontSize: 16 }}>{item?.dial_code}</Text>
                                    </Pressable>
                                )}
                            />

                        </View>

                    </View>

                )
            }


        </View>

    )
}

export default Register