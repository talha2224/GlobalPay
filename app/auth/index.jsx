import React, { useState } from 'react'
import { Dimensions, Image, Pressable, Text, TextInput, View } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import Google from '../../assets/images/auth/google.png'
import Apple from '../../assets/images/auth/apple.png'
import Flag from '../../assets/images/auth/flag.png'

const Login = () => {

    const [activeTab, setActiveTab] = useState("email")

    return (

        <View style={{ flex: 1, backgroundColor: "#fff", position: "relative", paddingHorizontal: 20 }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 40 }}>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Log in</Text>
                <Pressable onPress={() => router.push("/onboarding")}><Entypo name="cross" size={30} color="#000" /></Pressable>
            </View>


            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, gap: 15 }}>
                <Pressable onPress={() => { setActiveTab("email") }} style={{ borderBottomWidth: 2, borderBottomColor: activeTab == "email" ? "#0E47A1" : "#fff", paddingBottom: 4, width: 70 }}><Text style={{ color: activeTab == "email" ? "#0E47A1" : "#666666", textAlign: "center", fontSize: 16 }}>Email</Text></Pressable>
                <Pressable onPress={() => { setActiveTab("phone") }} style={{ borderBottomWidth: 2, borderBottomColor: activeTab == "phone" ? "#0E47A1" : "#fff", paddingBottom: 4, width: 70 }}><Text style={{ color: activeTab == "phone" ? "#0E47A1" : "#666666", textAlign: "center", fontSize: 16 }}>Phone</Text></Pressable>
            </View>

            {
                activeTab=='email' ? 
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'e.g. example@gmail.com'} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20 }} />
                :
                <View style={{flexDirection:"row",alignItems:"center",marginTop: 20,}}>
                    <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#F7F7F7",padding:10,borderRadius:5,marginRight:5}}>
                        <Image source={Flag} style={{marginRight:10}}/>
                        <Text>USA</Text>
                    </View>
                    <TextInput placeholderTextColor={"#C9C5B4"} placeholder={'e.g. +12********'} style={{flex:1,borderRadius: 10, paddingHorizontal: 20,backgroundColor:"#FCFCFC" }} />
                </View>
            }


            <Pressable onPress={()=>router.push("/auth/password")} style={{ backgroundColor: "#037AE0", height: 50, width: "100%", marginTop: 20, borderRadius: 10, paddingHorizontal: 20, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: "600" }}>Log In</Text>
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


            <Pressable onPress={()=>router.push("/auth/register")} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 4, position: 'absolute', bottom: 30, width: Dimensions.get('screen').width }}>
                <Text style={{fontSize:15,color:'#C9C5B4'}}>Don't have an account ? <Text style={{fontSize:15,color:'#0E47A1'}}>Sign up</Text></Text>
            </Pressable>


        </View>

    )
}

export default Login