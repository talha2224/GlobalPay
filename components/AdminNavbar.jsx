import React from 'react'
import Logo from '../assets/images/home/logo.png'
import { Image, Pressable, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const AdminNavbar = () => {
  return (

    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:50}}>
        <Image source={Logo} alt='logo'/>
        <Pressable onPress={()=>router.push("/admin/notification")}><MaterialCommunityIcons name="bell-badge-outline" size={24} color="black" /></Pressable>
    </View>

  )
}


export default AdminNavbar