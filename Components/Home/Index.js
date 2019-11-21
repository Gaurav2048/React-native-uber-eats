import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, Image, View, Platform  } from 'react-native'
import { connect } from "react-redux";
import Constants from 'expo-constants';


class Home extends Component {
    render() {
        return (
            <View style={styles.statusBar}>
               <View style= {styles.container}>
                <TouchableOpacity >
                    <View style={styles.asap}>
                    <Text style={{ color: '#000', fontSize: 14 }}>ASAP</Text>
                    <Image style={{width: 15, height: 10, marginLeft:10, marginRight:10}} source={require('../../assets/back.png')} />
                    <Text style={{fontSize:14}}>{this.props.currentAddress}</Text>
                    </View>
                </TouchableOpacity>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    asap: {
        width:'100%',
        flexDirection: "row", 
        marginTop:Constants.statusBarHeight, 
        paddingLeft:10, 
        backgroundColor:'#fff',
        paddingTop:20,
        paddingBottom:20,
        alignItems:"center", 
        elevation:5,
        position:"relative",
        alignSelf:'baseline'
    },
    statusBar: {
        backgroundColor: "#000",
        height: Constants.statusBarHeight,
      }
})

const mapStateToProps = (state) => {
    return {
        currentAddress: state.currentAddress
    }
}

export default connect(mapStateToProps)(Home); 