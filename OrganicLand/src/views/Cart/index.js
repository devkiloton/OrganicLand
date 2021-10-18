import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Top from './Components/Top'
import Details from './Components/Details'
import Button from './Components/Button'
import Item from './Components/Item'
import CustomText from '../../Components/CustomText'

export default function Cart({top, details, button, itens})
{
    return <>
    <FlatList
        data={itens.list}
        renderItem={Item}
        keyExtractor={({name}) => name}
        style={StyleSheet.list}
        ListHeaderComponent={() => {
            return <>
            <Top {...top}/>
            <View style={styles.cart}>
                <Details {...details}/>
                <Button {...button}/>
                <CustomText style={styles.title}>{itens.title}</CustomText>
            </View>
            </>
        }}
        />
    </>
}

const styles = StyleSheet.create({
    title:{
        color: '#464646',
        fontWeight:'bold',
        marginTop:32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cart:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    list:{
        paddingHorizontal:16,
    }
});