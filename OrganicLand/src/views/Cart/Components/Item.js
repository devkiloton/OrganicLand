import React from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import CustomText from '../../../Components/CustomText';


export default function Item({item: {name, image}}){
    return <View style={styles.item}>
        <Image style={styles.image} source={image}/>
        <CustomText style={styles.productName}>{name}</CustomText>
    </View>
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    image:{
        height: 46,
        width: 46,
    },
    productName:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
})