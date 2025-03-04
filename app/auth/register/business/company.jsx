import { Pressable, Text, View, TextInput, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

const CompanyDetails = () => {
    const [step, setStep] = useState(1)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Company Information</Text>
                <Pressable onPress={() => router.push('/auth/register/business/otp')}>
                    <Entypo name="cross" size={30} color="#000" />
                </Pressable>
            </View>

            <Text style={{ marginTop: 10, color: '#BBB7A6', marginBottom: 30 }}>Submit your information for admin approval and API key generation.</Text>

            {
                step == 1 ?
                    <View>
                        <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Company Name"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                        <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Business Registration Number"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                        <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Address"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                        <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Business Website (optional)"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                        <Pressable onPress={() => setStep(step + 1)} style={styles.verifyButton}>
                            <Text style={styles.verifyButtonText}>Next</Text>
                        </Pressable>
                    </View>
                    :

                    step == 2 ?
                        <View>
                            <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Contact Person Name"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                            <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Contact Person Email"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                            <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Address"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                            <TextInput keyboardType='numeric' placeholderTextColor={"#8F8F8F"} placeholder={"Phone Number"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                            <Pressable onPress={() => setStep(step + 1)} style={styles.verifyButton}>
                                <Text style={styles.verifyButtonText}>Next</Text>
                            </Pressable>
                        </View> :


                        <View>
                            <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Business Registration Certificate"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                            <TextInput placeholderTextColor={"#8F8F8F"} placeholder={"Tax ID"} style={{ borderWidth: 1, borderColor: "#EBEBEB", backgroundColor: "#FCFCFC", height: 50, width: "100%", borderRadius: 10, paddingHorizontal: 20, color: "#8F8F8F", marginTop: 10 }} />
                            <Pressable onPress={() => router.push('/auth/register/business/final')} style={styles.verifyButton}>
                                <Text style={styles.verifyButtonText}>Submit</Text>
                            </Pressable>
                        </View>

            }



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

export default CompanyDetails;