import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({ coin }) => {

    
    return (
        <View style={styles.contanerItem}>
            <View style={styles.coinNames}>
                <Image
                    style={styles.image}
                    source={{ uri: coin.image }}
                />
                <View style={styles.containerNames}>
                    <Text style={styles.text}>{coin.name}</Text>
                    <Text style={styles.symbolText}>{coin.symbol}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.textPrice}>$ {coin.current_price}</Text>
                <Text
                    style=
                    {[
                        styles.pricePercentage, coin.price_change_percentage_24h > 0 ?
                            styles.pricePositive :
                            styles.priceNegative
                    ]}
                >% {coin.price_change_percentage_24h}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    contanerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinNames: {
        flexDirection: 'row',

    },
    containerNames: {
        marginLeft: 10,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    text: {
        color: '#ffffff',

    },
    symbolText: {
        color: '#434343',
        textTransform: 'uppercase',
    },
    textPrice: {
        color: '#fff',
        textAlign: 'right'
    },
    pricePercentage: {
        textAlign: 'right'
    },
    pricePositive: {
        color: '#2ECC71'
    },
    priceNegative: {
        color: '#FF5733'
    }
})

export default CoinItem
