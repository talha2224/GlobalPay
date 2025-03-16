import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Illustration from '../../../assets/images/auth/illustration.png'
import USA from '../../../assets/images/auth/usa.png'
import Globe from '../../../assets/images/auth/globe.png'
import check from '../../../assets/images/auth/check.png'
import uncheck from '../../../assets/images/auth/uncheck.png'

const Final = () => {
    return (
        <View style={{ paddingTop: 50, paddingHorizontal: 20, backgroundColor: "#fff", flex: 1 }}>


            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={Illustration} />
            </View>

            <Text style={{ fontSize: 22, textAlign: "center", fontWeight: "500" }}>I’m a resident of or live in:</Text>

            <View style={{ marginTop: 10, backgroundColor: "#FBFBFB", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, height: 50, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={Globe} style={{ marginRight: 10 }} />
                    <Text>All countries except USA</Text>
                </View>
                <Image source={check}/>

            </View>

            <View style={{ marginTop: 10, backgroundColor: "#FBFBFB", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, height: 50, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={USA} style={{ marginRight: 10 }} />
                    <Text>United States of America</Text>
                </View>
                <Image source={uncheck}/>

            </View>


            <TouchableOpacity onPress={() => { router.push("/home/profile") }} style={{ backgroundColor: "#037AE0", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 10 }}>
                <Text style={{ color: "#fff" }}>Continue</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Final