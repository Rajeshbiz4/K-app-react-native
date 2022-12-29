import React, {useLayoutEffect,Component, useState} from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Text, Image,
    TextInput, TouchableWithoutFeedback, View ,Button, StyleSheet, AsyncStorage} from "react-native";    
import MenuImage from "../../components/MenuImage/MenuImage";
import styles from "./style";

export default function LoginScreen(props) {
const { navigation } = props;
const fetchPost = async () => {
    let userToken = '';
    navigation.replace('Home');
    // fetch('http://34.217.126.91:8000/login', {
    //   method: 'POST',
    //   headers: {
    //                'Accept': 'application/json',
    //                'Content-Type': 'application/json',
    //              },
    //    // body : 
    //    body: JSON.stringify({
    //          "mobile": username,
    //          "password": password,
    //         })
    //    })
    //    .then((response) => response.json())
    //    .then((response) => {
        
    //     if(response.token !=''){
    //         setToken(response.token);
    //         navigation.navigate('Home');
    //     }
    //     else
    //     {
    //         alert("Please enter correct username and password!");
    //     }
    //    }).catch((error) => {
    //       console.error('There has been a problem with your fetch operation:', error);
    //   });;

      
  }

async function setToken(token){
    await AsyncStorage.setItem("token",response.token);
}

const logo = require('../../../assets/logo.png');

const [username,setUsername] = useState('');
const [password,setPassword] = useState('');

    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback >
                <View style={styles.loginScreenContainer}>
                <View style={styles.loginFormView}>
                <Image style={styles.loginLogo} source={logo} />
                    <Text style={styles.logoText}>User Login</Text>
                    <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
                    onChangeText={(value) => setUsername(value)} value={username} />
                    <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}  
                    onChangeText={(value) => setPassword(value)} value={password}/>
                    <Button style={styles.loginButton}  title="Login" 
                    onPress={() => 
                                {
                                    fetchPost();
                                }
        } />
                </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const intStyles= StyleSheet.create({
    container:{
        margin:18,
        marginTop:40,
    },
    loginHeader:{
        flexDirection:'row',
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        alignSelf:'center',
        color:'red',
    },
    // loginColumn:{
    //     flexDirection:'column',
    // },
    // loginRow:{
    //     padding:10,
        
    //     borderBottomColor:'gray',
    //     borderBottomWidth:1,
    //     borderStyle:'solid',
    //     flexDirection:'row',
    // },
    // loginLabel:{
    //     padding:10,
    //     fontWeight:'bold',
    //     textAlignVertical:'center',
    //     alignContent:'center',
    //     alignSelf:'center',
    //     marginTop:15,
    //     fontSize:16,
    // },
    // loginTextInput:{
    //     padding:10,
    //     margin:10,
    //     fontSize:14,
    //     borderWidth:1,
    //     borderColor:'gray',
    //     width:220,
    // }
})