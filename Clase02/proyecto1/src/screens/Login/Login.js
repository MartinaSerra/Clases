import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View>
                <Pressable
                    onPress={ () => this.props.navigation.navigate("Register")}>
                        <Text>Ir al registro</Text>
                </Pressable>
                <Pressable
                    onPress={ () => this.props.navigation.navigate("HomeMenu")}>
                        <Text>Entrar en la app</Text>
                </Pressable>
            </View>
        )
    }
}

export default Login;