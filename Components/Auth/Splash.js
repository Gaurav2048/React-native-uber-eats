import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.uber}>UBER</Text>
                <Text>EATS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000", 
        flex: 1
    }, 
    uber:{
        color: "#fff", 
        flex: 1,
        fontSize: 20,
        textAlign:"center", 
        textAlignVertical:"center"
    }
})
