import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View} from 'react-native';
import top from '../../assets/top.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Cart()
{
    return<>
    <Image source={top} style={styles.top}/>
    <Text style={styles.title}>Cart detail</Text>

    <View style={styles.cart}>
        <Text style={styles.name}>Veggie basket</Text>
        <View style={styles.farm}>
        <Image source={logo} style={styles.farmImage}/>
            <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.description}>A basket with carefully 
        selected products from the
         farm to  your kitchen</Text>
         <Text style={styles.price}>U$ 30.00</Text>
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
        fontWeight:"bold"
    },
    farmName:{
        fontSize: 16,
        height: 32,
        paddingHorizontal:12
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