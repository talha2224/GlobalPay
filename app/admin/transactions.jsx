import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import BottomNavAdmin from '../../components/BottomNavAdmin'
import AdminNavbar from '../../components/AdminNavbar'


const Transactions = () => {
    return (

        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, position: "relative" }}>

            <AdminNavbar />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 20 }}>
                    <Text style={{ fontSize: 17 }}>Transactions</Text>
                    <Pressable style={{ backgroundColor: "#037AE0", paddingHorizontal: 14, paddingVertical: 8, borderRadius: 100 }}><Text style={{ color: "#fff" }}>Download CSV</Text></Pressable>
                </View>


                {
                    [1, 2, 3, 4, 5, 6]?.map((i, index) => (
                        <View key={i} style={{ marginTop: 20, backgroundColor: "#FBFBFB", padding: 10, borderRadius: 5 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ color: "#c4c4c4" }}>Date</Text>
                                <Text>Feb 2 - 2025 19:40</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ color: "#c4c4c4" }}>Type</Text>
                                <Text style={{color:"#8946E2"}}>Deposit</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ color: "#c4c4c4" }}>Key</Text>
                                <Text><Ionicons name="key-outline" size={12} color="#FF953F" /> 0x864784f44a... <Feather name="copy" size={12} color="#0E47A1" /></Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ color: "#c4c4c4" }}>Status</Text>
                                <Text style={{ color: "#4CD964" }}>Successful</Text>
                            </View>




                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ color: "#c4c4c4" }}>Amount</Text>
                                <Text style={{color:"#037AE0"}}>20000000</Text>
                            </View>


                        </View>
                    ))
                }




            </ScrollView>

            <BottomNavAdmin />




        </View>


    )
}

export default Transactions