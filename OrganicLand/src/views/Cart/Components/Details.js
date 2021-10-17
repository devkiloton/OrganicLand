import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import CustomText from '../../../Components/CustomText';

export default function details({name, logo, farmName, description, price})
{
    return <>
        <CustomText style={styles.name}>{name}</CustomText>
        <View style={styles.farm}>
        <Image source={logo} style={styles.farmImage}/>
            <CustomText style={styles.farmName}>{farmName}</CustomText>
        </View>
        <CustomText style={styles.description}>{description}</CustomText>
        <CustomText style={styles.price}>{price}</CustomText>
    </>
}

const styles = StyleSheet.create({
    name:{
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    farmName:{
        fontSize: 16,
        height: 32,
        paddingHorizontal:12,
        fontFamily: "MontserratRegular",
    },
    farmImage:{
        width: 32,
        height: 32
    },
    farm:{
        flexDirection:"row",
        paddingVertical: 12
    },
    description:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 20,
    },
    price:{
        color:"#2A9585",
        fontWeight:"bold",
        lineHeight: 42,
        fontSize:26,
        marginTop: 8,
    }
})