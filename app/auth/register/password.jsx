import { Pressable, Text, View, TextInput, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const Password = () => {


    const data = ["8 to 32 characters", "At least on uppercase letter", "At least on lowercase letter", "At least one number", "At least one special character"]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Create a password</Text>
                <Pressable onPress={() => router.push('/auth/register/otp')}>
                    <Entypo name="cross" size={30} color="#000" />
                </Pressable>
            </View>


            <Text style={{ color: "#666666", fontSize: 16, marginTop: 20, marginBottom: 8 }}>Password</Text>

            <TextInput placeholderTextColor={"#C9C5B4"} placeholder={"******"} style={{ backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20 }} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30, marginBottom: 20 }}>
                <View style={{ flex: 1, marginRight: 10, height: 1, backgroundColor: "#4CD9B1" }}></View>
                <View style={{ flex: 1, marginRight: 10, height: 1, backgroundColor: "#4CD9B1" }}></View>
                <View style={{ flex: 1, height: 1, backgroundColor: "#4CD9B1" }}></View>
            </View>

            {
                data?.map((i) => (
                    <View key={i} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <AntDesign name="checkcircle" size={18} color="#4CD9B1" />
                        <Text>{i}</Text>
                    </View>
                ))
            }


            <Pressable onPress={() => router.push('/auth/register')} style={styles.verifyButton}>
                <Text style={styles.verifyButtonText}>Create</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    verificationText: {
        marginTop: 10,
        color: '#BBB7A6',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginRight: 5,
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: "#F4FCFF",
    },
    timerContainer: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#F4FCFF',
        paddingHorizontal: 10,
        alignItems: 'center',
        width: 65,
        borderRadius: 100,
        paddingVertical: 3,
        marginTop: 20,
    },
    timerText: {
        color: '#8F8F8F',
    },
    verifyButton: {
        backgroundColor: '#037AE0',
        height: 50,
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    resendText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#BBB7A6',
    },
});

export default Password;