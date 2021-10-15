import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import CustomText from '../../../Components/CustomText';
import logo from '../../../../assets/logo.png';

export default function details()
{
    return <>
        <CustomText style={styles.name}>Veggie basket</CustomText>
        <View style={styles.farm}>
        <Image source={logo} style={styles.farmImage}/>
        <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
        </View>
        <CustomText style={styles.description}>A basket with carefully 
            selected products from the
            farm to  your kitchen.
        </CustomText>
        <CustomText style={styles.price}>U$ 30.00</CustomText>
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