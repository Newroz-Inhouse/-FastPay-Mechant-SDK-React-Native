import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderBox = ({ orderId, amount }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Order ID:</Text>
                <Text style={styles.text}>{orderId}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.amountBox}>
                    <Text style={styles.amountText}>{amount}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        width: '100%', // Width matches parent
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black', // Text color black
        marginRight: 8, // Add some space between label and value
    },
    text: {
        fontSize: 16,
        color: 'black', // Text color black
    },
    amountBox: {
        borderRadius: 20, // Adjust the border radius as needed
        borderWidth: 2,
        borderColor: '#05a7ec',
        borderStyle: 'dashed',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    amountText: {
        fontSize: 16,
        color: 'black', // Text color black
    },
});

export default OrderBox;
