import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

function Imagen(){
    return(
        <View>
            <Image style={styles.container} source={require("../../../assets/zonaMedia.jpeg")}
            resizeMode="contain"/>
            <Image style={styles.container} source={{uri: "https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85"}}/>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
    }
})
export default Imagen;