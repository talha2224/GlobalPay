import React, { useState } from 'react'
import { Dimensions, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { AntDesign, FontAwesome6, Ionicons } from '@expo/vector-icons'
import Summary from '../../assets/images/admin/summary.png'
import BottomNavAdmin from '../../components/BottomNavAdmin'
import AdminNavbar from '../../components/AdminNavbar'
const Admin = () => {
    const [actionModel, setactionModel] = useState(false)
    return (

        <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, position: "relative" }}>

            <AdminNavbar />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 17, marginTop: 10 }}>Welcome, [Company Name]!</Text>

                <View style={{ marginTop: 20 }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FCFCFC", padding: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <FontAwesome6 name="money-bill-transfer" size={20} color="#8744E1" />
                            <View>
                                <Text style={{ fontSize: 16, color: "#616161" }}>Total Transactions</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingHorizontal: 4, paddingVertical: 2, backgroundColor: "#e4f2fc", borderRadius: 4, marginTop: 2 }}>
                                <Text style={{ color: "#037AE0", textAlign: "center" }}>23 transaction</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FCFCFC", padding: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Ionicons name="key" size={20} color="#FF953F" />
                            <View>
                                <Text style={{ fontSize: 16, color: "#616161" }}>Active Api Keys</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingHorizontal: 4, paddingVertical: 2, backgroundColor: "#fcf2e9", borderRadius: 4, marginTop: 2 }}>
                                <Text style={{ color: "#FF953F", textAlign: "center" }}>4 active</Text>
                            </View>
                        </View>


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FCFCFC", padding: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Ionicons name="key" size={20} color="#4BD763" />
                            <View>
                                <Text style={{ fontSize: 16, color: "#616161" }}>Pending Keys</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingHorizontal: 4, paddingVertical: 2, backgroundColor: "#e4f2fc", borderRadius: 4, marginTop: 2 }}>
                                <Text style={{ color: "#037AE0", textAlign: "center" }}>2 pending</Text>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                    <Image source={Summary} style={{ width: "98%", height: 200 }} />
                </View>

                <View style={{ marginTop: 20, backgroundColor: "#FBFBFB", padding: 10, borderRadius: 10,paddingBottom:100 }}>

                    <Text style={{ fontSize: 18 }}>Api Keys</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, backgroundColor: "#FCFCFC", padding: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Ionicons name="key" size={20} color="#FF0D00" />
                            <View>
                                <Text style={{ fontSize: 16, color: "#616161" }}>0x864784f44a...</Text>
                            </View>
                        </View>

                        <View>
                            <Pressable onPress={() => setactionModel(true)} style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "#e4f2fc", borderRadius: 100, marginTop: 2 }}>
                                <Text style={{ color: "#037AE0", textAlign: "center" }}>Actions</Text>
                            </Pressable>
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, backgroundColor: "#FCFCFC", padding: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Ionicons name="key" size={20} color="#FF953F" />
                            <View>
                                <Text style={{ fontSize: 16, color: "#616161" }}>0x864784f44a...</Text>
                            </View>
                        </View>

                        <View>
                            <Pressable onPress={() => setactionModel(true)} style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "#e4f2fc", borderRadius: 100, marginTop: 2 }}>
                                <Text style={{ color: "#037AE0", textAlign: "center" }}>Actions</Text>
                            </Pressable>
                        </View>


                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, backgroundColor: "#FCFCFC", padding: 5 }}>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                            <Ionicons name="key" size={20} color="#4BD763" />
                            <View>
                                <Text style={{ fontSize: 16, color: "#616161" }}>0x864784f44a...</Text>
                            </View>
                        </View>

                        <View>
                            <Pressable onPress={() => setactionModel(true)} style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: "#e4f2fc", borderRadius: 100, marginTop: 2 }}>
                                <Text style={{ color: "#037AE0", textAlign: "center" }}>Actions</Text>
                            </Pressable>
                        </View>

                    </View>

                </View>

            </ScrollView>

            <BottomNavAdmin />


            {
                actionModel && (
                    <Pressable onPress={() => { setactionModel(false) }} style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "28%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

                            <Text style={{ marginTop: 10, fontSize: 20 }}>Action</Text>

                            <Text style={{marginTop:20,fontSize:16}}>View Api</Text>
                            <Text style={{color:"#FF3A2F",fontSize:16,marginTop:6}}>Deactivate</Text>
                            <Text style={{color:"#4CD964",fontSize:16,marginTop:6}}>Regenerate</Text>


                        </View>

                    </Pressable>
                )
            }



        </View>


    )
}

export default Admin