import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../../../Components/CustomText';


export default function Button({button}){
    return <>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <CustomText style={styles.textButton}>
                    {button}
                </CustomText>
            </TouchableOpacity>
        </View>
    </>
}

const styles = StyleSheet.create({
    buttonView:{
        width:'60%',
        marginHorizontal:'20%'
    },
    button:{
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 12,
        borderRadius: 45
    },
    textButton:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
        lineHeight:26,
        fontWeight: 'bold',
    }
})