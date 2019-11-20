import React, { Component } from 'react'
import { Text,Animated,  StyleSheet,TouchableOpacity , TextInput, View, Image, Alert  } from 'react-native'
import { connect } from "react-redux";



class Login extends Component {
    
    state = {
        isPhoneNumberOn : false
    }

    componentWillMount=()=>{
    
    }

    onPhoneEntered = ()=>{
        if(this.state.isPhoneNumberOn==false)
        {
          this.setState({
           isPhoneNumberOn:true
        })
    }
  }

    render() {
        return (
            <View style={styles.container}>
           {!this.state.isPhoneNumberOn ? <Image style={styles.image} source={{ uri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}/> :null}
            <View>
                <Text style={styles.label}>Use your account to get started.</Text>
                <TouchableOpacity  onPress={this.onPhoneEntered}>
                <View style={styles.cornerView}  >
                    <Image style={{width:30, height:25, marginLeft:15,marginRight:5, marginTop:5,marginBottom:5, backgroundColor:'#f00'}}/>
                    <Text style={styles.countryCode}>+1</Text>
                    <View style={styles.bar} />
                    <TextInput style={styles.phoneNumber} placeholder="(789)641-1509" editable={this.state.isPhoneNumberOn} />
                </View>
                </TouchableOpacity>
            </View>
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
    container:{
        flex:1,
        backgroundColor: "#fff"
    }, 
    label:{
        fontSize:20,
        marginLeft:20,
        marginTop:10
    }, 
    image:{
        height:"85%"
    }, 
    cornerView:{
        borderRadius:8,
        borderColor:"#DDDDDD", 
        backgroundColor:"rgba(203, 203, 203, 0.1)", 
        borderWidth: 2, 
        flexDirection:"row", 
        marginLeft:20, 
        marginRight:20,
        marginTop:5
    },
    countryCode:{
        marginLeft:5, 
        marginRight:5, 
        alignSelf:"center"
    }, 
    bar:{
        width:1,
        marginTop:5, 
        marginBottom:5, 
        marginLeft:4,
        marginRight:4,
        backgroundColor:"#DDDDDD"
    }, 
    phoneNumber:{
        alignSelf:"stretch", 
        marginTop:5,  
        flex:1,
        marginRight:7,
        marginBottom:5, 
        fontSize:20,
        color:"#333333"
    }
})

export default connect(mapStateToProps)(Login);     