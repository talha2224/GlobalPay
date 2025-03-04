import { Pressable, Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import Icon from '../../../../assets/images/auth/tick.png'
const Final = () => {
    const [step, setStep] = useState(1)
    return (
        <View style={{flex: 1,backgroundColor: '#fff',position: 'relative',paddingHorizontal: 20,}}>


            <View style={{justifyContent:"flex-end",alignItems:"flex-end",position:"absolute",top:40,right:20}}>
                <Pressable onPress={() => router.push('/onboarding')}>
                    <Entypo name="cross" size={30} color="#FF0D00" />
                </Pressable>
            </View>


            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image source={Icon}/>
                <Text style={{fontSize:23,marginTop:10,marginBottom:2,textAlign:"center",fontWeight:"600"}}>Your registration has been submitted for review</Text>
                <Text style={{color:"#8F8F8F",marginTop:6}}>You’ll be notified once it’s approved.</Text>
            </View>





        </View>
    );
};

export default Final;