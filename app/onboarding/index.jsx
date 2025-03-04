import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Text, Dimensions, Pressable } from 'react-native';
import Logo from '../../assets/images/onboarding/logo.png';
import Onboarding1 from '../../assets/images/onboarding/image1.png';
import Onboarding2 from '../../assets/images/onboarding/image2.png';
import Onboarding3 from '../../assets/images/onboarding/image3.png';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const screens = [
    {
        image: Onboarding1,
        title: 'Pay Anywhere,',
        subtitle: 'Anytime',
        description: 'Access virtual and physical Visa/MasterCards for secure and hassle-free global transactions.',
    },
    {
        image: Onboarding2,
        title: 'Local and Crypto,',
        subtitle: 'Your Way',
        description: 'Deposit or withdraw funds using local payment methods or cryptocurrencies, with transparent fees.',
    },
    {
        image: Onboarding3,
        title: 'Send Money',
        subtitle: 'Instantly',
        description: 'Use QR codes or unique IDs for instant P2P transfers and quick payments worldwide.',
    },
];

const Onboarding = () => {

    const [currentScreen, setCurrentScreen] = useState(0);
    const [showPopup, setshowPopup] = useState(false)
    const intervalRef = useRef(null);


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (currentScreen < screens.length - 1) {
                setCurrentScreen((prevScreen) => prevScreen + 1);
            } else {
                clearInterval(intervalRef.current);
            }
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, [currentScreen]);

    const currentScreenData = screens[currentScreen];



    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, position: 'relative' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 7, paddingVertical: 40 }}>
                <Image source={Logo} />
                <Text style={{ fontSize: 18, fontWeight: '700' }}>GlobalPay</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={currentScreenData.image} style={{ height: 350, width: 350 }} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>{currentScreenData.title}</Text>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>{currentScreenData.subtitle}</Text>
                <Text style={{ marginTop: 5, color: '#666666' }}>{currentScreenData.description}</Text>
            </View>

            {
                currentScreen !== 2 ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 4, position: 'absolute', bottom: 30, width: Dimensions.get('screen').width }}>
                        {screens.map((_, index) => (<View key={index} style={{ width: 10, height: 10, borderRadius: 100, backgroundColor: currentScreen === index ? '#0E47A1' : '#C9C5B4', }} />))}
                    </View>
                    :
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10, position: 'absolute', bottom: 30, width: Dimensions.get('screen').width }}>

                        <Pressable onPress={()=>router.push("/auth")} style={{ backgroundColor: "#F4FCFF", paddingHorizontal: 40, paddingVertical: 13, borderRadius: 100 }}>
                            <Text style={{ color: "#037AE0", fontSize: 16, fontWeight: "400" }}>Log in</Text>
                        </Pressable>

                        <Pressable onPress={() => { setshowPopup(!showPopup) }} style={{ backgroundColor: "#037AE0", paddingHorizontal: 40, paddingVertical: 13, borderRadius: 100 }}>
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "400" }}>Sign up</Text>
                        </Pressable>

                    </View>
            }


            {/* MODEL  */}

            {
                showPopup && (

                    <View style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


                        <View style={{ backgroundColor: "#fff", padding: 30, width: Dimensions.get("screen").width, height: 250, borderTopStartRadius: 30, borderTopEndRadius: 30 }}>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, fontWeight: "400" }}>Choose Your Account Type</Text>
                                <Pressable onPress={()=>setshowPopup(!showPopup)}><Entypo name="cross" size={20} color="#037AE0" /></Pressable>
                            </View>

                            <Text style={{ color: "#C3BFAE", marginTop: 6 }}>Would you like to sign up as an individual or as a company?</Text>

                            <View style={{ marginTop: 20 }}>

                                <Pressable onPress={()=>router.push("/auth/register")} style={{ flexDirection: "row", gap: 13, alignItems: "center" }}>
                                    <AntDesign name="user" size={20} color="#037AE0" />
                                    <Text style={{ color: "#1E1E1E", fontSize: 15 }}>Sign Up as Individual</Text>
                                </Pressable>

                                <Pressable onPress={()=>router.push("/auth/register/business")} style={{ flexDirection: "row", gap: 13, alignItems: "center", marginTop: 10 }}>
                                    <AntDesign name="addusergroup" size={20} color="#037AE0" />
                                    <Text style={{ color: "#1E1E1E", fontSize: 15 }}>Sign Up as Company</Text>
                                </Pressable>

                            </View>
                        </View>

                    </View>
                )
            }

        </View>
    );
};

export default Onboarding;