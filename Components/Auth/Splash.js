import React, { Component } from 'react'
import { Text,ProgressBarAndroid, StyleSheet, View } from 'react-native'


export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textLayout} >
                  <Text style={styles.textWhite}>UBER</Text>
                  <Text style={styles.textYellow}>EATS</Text>
                </View>
                <View style={styles.other}>
                <ProgressBarAndroid styleAttr="Horizontal" indeterminate={true} progress={0.5} style={styles.progress} />                
                </View>
            </View>
        )
    }

    componentDidMount =()=>{
        setTimeout(()=>{
            this.props.navigation.replace("Login"); 
        }, 2000); 
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000", 
        flex: 1, 
        flexDirection:"column",
    }, 
    textLayout:{
        height:"99%",
        justifyContent:"center",
        alignItems:"center"
    },
    other:{
        height:"1%",
        backgroundColor:"#000",
    },
    textWhite:{
        color: "#fff", 
        fontWeight:"900",
        fontSize:40
    }, 
    textYellow:{
        color: "#ff0", 
        fontWeight:"900",
        fontSize:40
    }, 
    progress:{
        height:"100%",
        justifyContent:"space-around",
        padding:0,
        color:"#0f0"
    },
    uber:{
        color: "#fff", 
        flex: 1,
        fontSize: 20, 
        justifyContent: "center",
        alignItems:"center"
    }
})
