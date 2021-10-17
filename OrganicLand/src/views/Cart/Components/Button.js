import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


export default function Button({button}){
    return <>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.textButton}>
                    {button}
                </Text>
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