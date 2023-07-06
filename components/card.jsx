import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = () => {
    return (
        <View style={styles.container}>
        <View style={styles.cardContent}>
            <Image
                source={require('../assets/coffee1.jpeg')}
                style={styles.imageCard}
            />
            <View style={styles.textContainer}>
                <Text style={styles.textCard}>
                    Mocha
                </Text>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //centrado en la pagina
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
    },
    imageCard: {
        width: 500,
        height: 500,
        borderRadius: 100,
        //union con el texto
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    textContainer: {
        backgroundColor: 'rgba(38, 117, 48, 1)',
        padding: 20,
        borderRadius: 100,
        //union con la imagen
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        //texto centrado
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCard: {
        fontSize: 20,
        color: '#fff',
    },
    });

export default Card;
