import React from 'react';
import { StyleSheet, View } from 'react-native';

import Top from './Components/Top'
import Details from './Components/Details'
import Button from './Components/Button'

export default function Cart({top, details, button})
{
    return<>
    <Top {...top}/>
    <View style={styles.cart}>
        <Details {...details}/>
        <Button {...button}/>    
    </View>
    </>
}

const styles = StyleSheet.create({
    cart:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});