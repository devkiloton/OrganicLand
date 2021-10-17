import React from 'react';
import { StyleSheet, View } from 'react-native';

import Top from './Components/Top'
import Details from './Components/Details'

export default function Cart({top, details})
{
    return<>
    <Top {...top}/>
    <View style={styles.cart}>
        <Details {...details}/>    
    </View>
    </>
}

const styles = StyleSheet.create({
    cart:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});