import React from 'react';
import { StyleSheet, View } from 'react-native';

import Top from './Components/Top'
import Details from './Components/Details'

export default function Cart()
{
    return<>
    <Top/>
    <View style={styles.cart}>
    <Details/>    
    </View>
    </>
}

const styles = StyleSheet.create({
    cart:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});