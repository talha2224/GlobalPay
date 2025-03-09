import React from 'react'
import { Entypo, Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import qr from '../../assets/images/home/qr.png'

const QrCode = () => {
    return (

        <View style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#fff", flex: 1 }}>



            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Pressable onPress={() => router.push("/home/deposit")} style={{ flexDirection: "row", gap: 0, alignItems: "center" }}>
                    <Entypo name="chevron-small-left" size={24} color="#037AE0" />
                    <Text style={{ color: "#037AE0" }}>Back</Text>
                </Pressable>

                <View>
                    <Text>Wallet</Text>
                </View>

                <View></View>

            </View>

            <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
                <Image source={qr}/>
            </View>

            <Text style={{color:"#838383",marginTop:8,textAlign:"center"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</Text>


            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:15,borderWidth:1,borderColor:"#DADADA",padding:10,borderRadius:5,backgroundColor:"#F4FCFF"}}>
                <Text>eyy5 - tttt - 0583 - nvhg - uuyi</Text>
                <Feather name="copy" size={20} color="black" />
            </View>

        </View>
    )
}

export default QrCode