import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

import top from '../../../../assets/top.png'
import CustomText from '../../../Components/CustomText'

const width = Dimensions.get('screen').width;

export default function Top()
{
    return <>
    <Image source={top} style={styles.top}/>
    <CustomText style={styles.title}>Cart detail</CustomText>
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
})