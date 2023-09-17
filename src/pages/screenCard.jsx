import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/img.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.details}>
                            {/* <Text style={styles.label}>First Name:</Text> */}
                            <Text style={styles.value}>ABCD</Text>
                            {/* <Text style={styles.label}>Last Name:</Text> */}
                            <Text style={styles.value}>EFGH</Text>
                        </View>
                        <View style={styles.details}>
                            {/* <Text style={styles.label}>Gender:</Text> */}
                            <Text style={styles.value}>Male</Text>
                        </View>
                        <View style={styles.details}>
                            {/* <Text style={styles.label}>Phone Number:</Text> */}
                            <Text style={styles.value}>1234567890</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        padding: 4,
        width: '80%',
        height: '20%',
        borderWidth: 2,
        borderColor: 'black',
    },
    innerContainer:{
        flex:1,
        padding: 12,
        flexDirection: 'row',
    },
    imageContainer: {
        padding: 0,
        width: '40%',
        height: '99%',
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    image: {
        width:'100%',
        height: '100%',
    },
    detailsContainer: {
        flex: 1,
        padding: 2,
        marginLeft: 4,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        flex: 1,
        fontSize: 24,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Card;
