import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const handlePress = () => {
        // Handle press action for Terms & Conditions
    };
    const handleLogin = () => {
        // Implement login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember Me:', isSelected);
        console.log('Remember me:', rememberMe);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Pay via </Text>
            <View style={styles.inputView}>
                <Text style={styles.prefixText}>+964 - </Text>
                <TextInput
                    style={styles.inputText}
                    placeholder=""
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder=""
                    placeholderTextColor="#003f5c"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                    <View style={{ width: 20, height: 20, borderWidth: 1, marginRight: 10 }}>
                        {rememberMe && <View style={{ flex: 1, backgroundColor: 'blue' }} />}
                    </View>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: '#0c0c0c' }}>I accept the</Text>
                </View>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={{ color: '#05a7ec' }}> Terms & Conditions</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>PROCEED TO PAY 255 IQD</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        height: 50,
        borderColor: '#000000',
        alignSelf: "center",
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2d2a2a',
        marginTop: 20
    },
    normalText: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#2d2a2a'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputText: {
        height: 50,
        flex: 1,
        color: 'black',
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#05a7ec',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    leftText: {
        marginRight: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    rightText: {
        color: 'black',
    },
    prefixText: {
        color: 'black',
        marginRight: 5,
        height: 50,
        alignItems: 'center',
        textAlignVertical:'center'
    },
    loginText: {
        color: 'white',
    },
    forgot: {
        color: '#003f5c',
    },
});

export default LoginForm;
