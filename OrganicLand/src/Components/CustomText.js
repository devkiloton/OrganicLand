import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Text2({children, style}){
    let styleText = styles.text;
    if(style?.fontWeight == 'bold'){
        styleText = styles.boldText;
    }
    return <Text style={[style, styleText]}>{children}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: "MontserratRegular",
        fontWeight:"normal"
    },
    boldText:{
        fontFamily:"MontserratBold",
        fontWeight: "normal"
    }
})