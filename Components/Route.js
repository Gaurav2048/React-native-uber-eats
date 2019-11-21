import React, {Component} from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import  Login from "./Auth/Login";
import Register from "./Auth/Register";
import Splash from "./Auth/Splash";
import  Home from "./Home/Index";

const navStack = createStackNavigator({
    Login: {
        screen: Login, 
        navigationOptions:{
            header: null
        }
    }, 
    Register: {
        screen: Register
    }, 
    Splash:{
        screen: Splash, 
        navigationOptions:{
            header: null
        }
    }, 
    Home: {
       screen: Home,
       navigationOptions:{
        header: null
     }
    }
}, {
    initialRouteName:"Home"
}); 

export default createAppContainer(navStack); 