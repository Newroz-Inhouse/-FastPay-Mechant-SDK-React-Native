import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default LoginForm;
