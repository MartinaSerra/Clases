import React, {Component} from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

class Register extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <View>
                <Pressable
                    onPress={ () => this.props.navigation.navigate("Profile")}>
                        <Text>Ya Tengo Cuenta</Text>
                </Pressable>
            </View>
        )
    }
}

export default Register;