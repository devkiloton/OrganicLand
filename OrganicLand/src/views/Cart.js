import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import top from '../../assets/top.png'
import logo from '../../assets/logo.png'
import CustomText from '../Components/CustomText'
const width = Dimensions.get('screen').width;

export default function Cart()
{
    return<>
    <Image source={top} style={styles.top}/>
    <CustomText style={styles.title}>Cart detail</CustomText>

    <View style={styles.cart}>
        <CustomText style={styles.name}>Veggie basket</CustomText>
        <View style={styles.farm}>
        <Image source={logo} style={styles.farmImage}/>
            <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
        </View>
        <CustomText style={styles.description}>A basket with carefully 
        selected products from the
         farm to  your kitchen</CustomText>
         <CustomText style={styles.price}>U$ 30.00</CustomText>
    </View>
    </>
}

const styles = StyleSheet.create({
    top:{
        width: "100%",
        height: 578/768*width,
    },
    title:{
        width:"100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color:"white",
        fontWeight:"bold",
        padding:16,
    },
    cart:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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
});