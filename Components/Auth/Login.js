import React, { Component } from 'react'
import { Text, Animated, StyleSheet, TouchableOpacity, TextInput, Button,  View, Image, Alert } from 'react-native'
import { connect } from "react-redux";



class Login extends Component {

    state = {
        isPhoneNumberOn: false,
        countryCode: "+1",
        country: "USA", 
        phoneNumber:""
    }

    componentWillMount = () => {

    }

    onPhoneEntered = () => {
        if (this.state.isPhoneNumberOn == false) {
            this.setState({
                isPhoneNumberOn: true
            })
        }
    }

    onPhoneNumberExited = () => {
        this.setState({ isPhoneNumberOn: false });
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.isPhoneNumberOn ? <Image style={styles.image} source={{ uri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} /> : null}
                <View>
                    {this.state.isPhoneNumberOn ?
                        <TouchableOpacity style={{ width: 25, height: 25, marginTop: 50, marginLeft: 20 }} onPress={this.onPhoneNumberExited}>
                            <Image style={{ width: 25, height: 25 }} source={require('../../assets/back.png')} />
                        </TouchableOpacity>
                        : null
                    }
                    <Text style={styles.label}>Use your account to get started.</Text>
                    <TouchableOpacity onPress={this.onPhoneEntered}>
                        <View style={styles.cornerView}  >
                            <TouchableOpacity style = {{ width:35 , flexDirection:'row' }}>
                                <Image style={{ width: 30, height: 25, marginLeft: 15, marginRight: 5, marginTop: 5, marginBottom: 5, backgroundColor: '#f00' }} />
                                <Text style={styles.countryCode}>{this.state.countryCode}</Text>
                            </TouchableOpacity>
                            <View style={styles.bar} />
                            <TextInput style={styles.phoneNumber} placeholder="(789)641-1509" editable={this.state.isPhoneNumberOn} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Button style= {styles.proceedButton} title="NEXT" onPress={()=>{this.props.navigation.replace('Home')}} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    label: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        height: "85%"
    },
    cornerView: {
        borderRadius: 8,
        display:"flex", 
        flexWrap:"nowrap", 
        borderColor: "#DDDDDD",
        backgroundColor: "rgba(203, 203, 203, 0.1)",
        borderWidth: 2,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5
    },
    countryCode: {
        marginLeft: 5,
        marginRight: 5,
        alignSelf: "center"
    },
    bar: {
        width: 1,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 40,
        marginRight: 4,
        backgroundColor: "#DDDDDD"
    },
    phoneNumber: {
        alignSelf: "stretch",
        marginTop: 5,
        flex:1,
        marginRight: 7,
        marginBottom: 5,
        fontSize: 20,
        color: "#333333"
    }, 
    proceedButton: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:60
    }
})

export default connect(mapStateToProps)(Login);     