import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>EATS</Text>
                <View >
                  <Text style={styles.uber}>UBER</Text>
                  <Text>EATS</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000", 
        flex: 1
    }, 
    logo:{
        alignItems:"center", 
        justifyContent: "center"
    }, 
    uber:{
        color: "#fff", 
        flex: 1,
        fontSize: 20,
        textAlign:"center", 
        textAlignVertical:"center"
    }
})
