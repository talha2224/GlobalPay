import React, { useEffect, useState } from 'react'
import { Dimensions, Image, TouchableOpacity, ScrollView, Text, TextInput, View } from 'react-native'
import BottomNavBar from '../../components/BottomNav'
import Navbar from '../../components/Navbar'
import { AntDesign, Feather, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Badge from '../../assets/images/home/badge.png'
import Btc from '../../assets/images/home/btc.png'
import Eth from '../../assets/images/home/eth.png'
import Dollar from '../../assets/images/home/dollar.png'
import Usdt from '../../assets/images/home/usdt.png'
import Illustration from '../../assets/images/home/illustration.png'
import Successful from '../../assets/images/home/successful.png'
import Mastercard from '../../assets/images/home/mastercard.png'
import Logo from '../../assets/images/onboarding/logo.png'

const Home = () => {

  const [initialModel, setInitialModel] = useState(true)
  const [sendModel, setSendModel] = useState(false)
  const [successfulModel, setSuccessfulModel] = useState(false)
  const [transferModel, setTransferModel] = useState(false)
  const [withdrawModel, setWithdrawModel] = useState(false)
  const [convertModel, setConvertModel] = useState(false)
  const [stakeModel, setstakeModel] = useState(false)


  return (

    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, position: "relative" }}>


      <Navbar />


      <ScrollView showsVerticalScrollIndicator={false}>


        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#848484" }}>Est. Total Value (USD)</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 5 }}>
            <Text style={{ fontSize: 30, fontWeight: "350" }}>$5.00</Text>
            <AntDesign name="eyeo" size={20} color="#848484" />
          </View>
        </View>


        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: "row", gap: 10, alignItems: "center", marginTop: 20 }}>

          <TouchableOpacity onPress={() => setConvertModel(true)} style={{ backgroundColor: "#FBFBFB", width: 100, height: 40, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <Foundation name="dollar" size={20} color="black" />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setSendModel(true) }} style={{ backgroundColor: "#FBFBFB", width: 100, height: 40, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <Feather name="arrow-up-right" size={20} color="black" />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setTransferModel(true)} style={{ backgroundColor: "#FBFBFB", width: 100, height: 40, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <Foundation name="dollar" size={20} color="black" />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { setWithdrawModel(true) }} style={{ backgroundColor: "#FBFBFB", width: 100, height: 40, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <Feather name="arrow-down-left" size={20} color="black" />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setConvertModel(true)} style={{ backgroundColor: "#FBFBFB", width: 100, height: 40, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <MaterialCommunityIcons name="account-convert" size={16} color="black" />
            <Text style={{ fontSize: 14, fontWeight: "500" }}>Convert</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setstakeModel(true)} style={{ backgroundColor: "#FBFBFB", width: 100, height: 40, borderRadius: 5, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <AntDesign name="star" size={16} color="black" />
            <Text style={{ fontSize: 14, fontWeight: "400" }}>Stake</Text>
          </TouchableOpacity>

        </ScrollView>


        <View style={{ flex: 1, backgroundColor: "#F8F9FB", padding: 10, height: 150, borderRadius: 5, marginTop: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

          <View>
            <Text style={{ fontSize: 16 }}>Verify your identity</Text>
            <Text style={{ color: "#848484", marginTop: 6 }}>Start your spending journey today.</Text>
            <TouchableOpacity style={{ backgroundColor: "#037AE0", width: 80, height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
              <Text style={{ color: "#fff" }}>Verify</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image source={Badge} />
          </View>

        </View>


        <View style={{ marginTop: 15, paddingBottom: 80 }}>

          <Text style={{ fontSize: 17 }}>Transaction</Text>

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


          <View style={{ borderWidth: 1, borderColor: "#DADADA", paddingVertical: 10, borderRadius: 5, flex: 1, height: 40, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <Text>View More</Text>
          </View>



        </View>


      </ScrollView>


      <BottomNavBar />



      {/* MODELS  */}

      {
        initialModel && (

          <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "center", alignItems: "center" }}>

            <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 8, justifyContent: "center", alignItems: "center", width: "90%" }}>

              <Image source={Illustration} />
              <Text style={{ fontSize: 19, marginTop: 10 }}>You've Earned $5 Credit!</Text>
              <Text style={{ color: "#848484", marginTop: 8, textAlign: "center" }}>Congratulations! You've received a $5 credit reward. Complete your KYC verification to unlock and use your reward.</Text>

              <TouchableOpacity onPress={() => setInitialModel(false)} style={{ backgroundColor: "#037AE0", width: "100%", height: 40, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                <Text style={{ color: "#fff" }}>Complete KYC Now</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setInitialModel(false)} style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <Text style={{ color: "#1E1E1E" }}>Later</Text>
              </TouchableOpacity>

            </View>

          </View>

        )
      }

      {
        sendModel && (
          <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

            <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "80%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ fontSize: 18 }}>Transfer</Text>
                <Text style={{ marginTop: 5 }}>Wallet Address</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='Enter wallet address' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                    <Image source={Btc} />
                    <View>
                      <Text style={{ fontSize: 16 }}>Wallet</Text>
                      <Text style={{ color: "#848484" }}>0.00053</Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#EBEDEE", borderRadius: 100, }}>
                    <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                  </View>


                </View>



              </View>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                <Text style={{ fontSize: 18 }}>Amount</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='₿ 0000' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                <Text style={{ marginTop: 10, color: "#FF6F00" }}>0.20% will be deducted as charges fee</Text>


                <TouchableOpacity onPress={() => { setSendModel(false); setSuccessfulModel(true) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                  <Text style={{ color: "#fff" }}>Send</Text>
                </TouchableOpacity>


              </View>

            </View>

          </View>
        )
      }

      {
        transferModel && (
          <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

            <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "80%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

              <Text style={{ fontSize: 18, paddingHorizontal: 8 }}>Transfer</Text>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 10, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>Send to</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='Enter user ID' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                <Text style={{ marginTop: 5 }}>From</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 5 }}>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    <View style={{ backgroundColor: "#F6F6F6", width: 40, height: 40, borderRadius: 100, justifyContent: "center", alignItems: "center" }}>
                      <Image source={Logo} style={{ width: 20, height: 11 }} />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16 }}>Account</Text>
                      <Text style={{ color: "#8f8f8f" }}>$200,034.05</Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 8, paddingVertical: 8, backgroundColor: "#EBEDEE", borderRadius: 114, marginTop: 2 }}>
                    <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                  </View>

                </View>


              </View>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                <Text style={{ fontSize: 18 }}>Amount</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='$ 50.00 -100,000.00 ' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                <Text style={{ marginTop: 10, color: "#FF6F00" }}>0.20% will be deducted as charges fee</Text>


                <TouchableOpacity onPress={() => { setTransferModel(false); setSuccessfulModel(true) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 14, borderRadius: 100 }}>
                  <Text style={{ color: "#fff" }}>Transfer</Text>
                </TouchableOpacity>


              </View>

            </View>

          </View>
        )
      }


      {
        withdrawModel && (
          <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

            <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "80%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

              <Text style={{ fontSize: 18, paddingHorizontal: 8 }}>Withdraw</Text>
              <Text style={{ color: "#8f8f8f", paddingHorizontal: 8 }}>Sed ut perspiciatis unde omnis iste </Text>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>Amount to withdraw</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='$ 50.00 -100,000.00 ' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />
                <Text style={{ marginTop: 10, color: "#FF6F00" }}>0.20% will be deducted as charges fee</Text>

              </View>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                <Text style={{ fontSize: 18 }}>Destination</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                    <Image source={Mastercard} />
                    <View>
                      <Text style={{ fontSize: 16 }}>Bank name</Text>
                      <Text style={{ color: "#848484" }}>******000</Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#EBEDEE", borderRadius: 100, }}>
                    <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                  </View>


                </View>

              </View>

              <TouchableOpacity onPress={() => { setWithdrawModel(false) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                <Text style={{ color: "#fff" }}>Confirm</Text>
              </TouchableOpacity>



            </View>

          </View>
        )
      }

      {
        convertModel && (
          <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

            <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "80%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>


              <Text style={{ fontSize: 18, paddingHorizontal: 8 }}>Convert</Text>


              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>USD</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='$ 0.00' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                    <Image source={Btc} />
                    <View>
                      <Text style={{ fontSize: 16 }}>Wallet</Text>
                      <Text style={{ color: "#848484" }}>0.00053</Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#EBEDEE", borderRadius: 100, }}>
                    <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                  </View>


                </View> */}



              </View>


              <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <Ionicons name="swap-vertical" size={20} color="#c4c4c4" />
              </View>


              <View style={{ backgroundColor: "#FBFBFB", marginTop: 10, borderRadius: 6, padding: 8 }}>

                <Text style={{ marginTop: 5 }}>Crypto coin</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='₿ 0.0000' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />
                <Text style={{ marginTop: 15, color: "#848484" }}>Select coin</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10 }}>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                    <Image source={Btc} />
                    <View>
                      <Text style={{ fontSize: 16 }}>Bitcoin</Text>
                      <Text style={{ color: "#4CD964" }}>+1.0%</Text>
                    </View>
                  </View>

                  <FontAwesome5 name="chevron-right" size={20} color="#848484" />


                </View>



              </View>

              <TouchableOpacity onPress={() => { setConvertModel(false) }} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 15, borderRadius: 100 }}>
                <Text style={{ color: "#fff" }}>Convert</Text>
              </TouchableOpacity>



            </View>

          </View>
        )
      }

      {
        stakeModel && (
          <View style={{ position: "absolute", flex: 1, backgroundColor: "rgba(27, 27, 27, 0.4)", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, justifyContent: "flex-end", alignItems: "center" }}>

            <View style={{ backgroundColor: "#fff", padding: 20, width: "100%", height: "67%", marginHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 20, borderRadius: 6, padding: 8 }}>

                <Text style={{ fontSize: 18 }}>Stake</Text>
                <Text style={{ marginTop: 5 }}>Stake Percentage</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='Enter stake percentage' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 10, backgroundColor: "#FBFBFB", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5 }}>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>

                    <Image source={Btc} />
                    <View>
                      <Text style={{ fontSize: 16 }}>Bitcoin</Text>
                      <Text style={{ color: "#848484" }}>0.00053</Text>
                    </View>
                  </View>

                  <View style={{ paddingHorizontal: 13, paddingVertical: 10, backgroundColor: "#EBEDEE", borderRadius: 100, }}>
                    <Text style={{ color: "#000", textAlign: "center" }}>Change</Text>
                  </View>


                </View>



              </View>

              <View style={{ backgroundColor: "#FBFBFB", marginTop: 30, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 20 }}>

                <Text style={{ fontSize: 18 }}>Amount</Text>
                <TextInput placeholderTextColor={"#C9C5B4"} placeholder='₿ 0000' style={{ backgroundColor: "#fff", marginTop: 7, borderRadius: 5, paddingHorizontal: 5 }} />

                <Text style={{ marginTop: 10, color: "#FF6F00" }}>0.20% will be deducted as charges fee</Text>


                <TouchableOpacity onPress={() => { setstakeModel(false);}} style={{ backgroundColor: "#037AE0", width: "100%", height: 50, justifyContent: "center", alignItems: "center", marginTop: 8, borderRadius: 100 }}>
                  <Text style={{ color: "#fff" }}>Stake</Text>
                </TouchableOpacity>


              </View>

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


    </View>

  )
}

export default Home