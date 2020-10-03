import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert, Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Value } from 'react-native-reanimated';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {storeUsername} from './auth'




const SignUpScreen = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function regist(username, password, email){
        axios({method: 'post',
        url: 'https://ab0c000bd4f9.ngrok.io/projectaim/api/regist.php',
        data: {
            username,
            password,
            email
        }
        }).then((response) => {
            if(response.data === 'Username or Email already exists!'){
                alert('Username or Email already exists!')
            }else{
                alert('You are logged in as ' + response.data.name)
                storeUsername(response.data.name)
                //navigate to home screen
            }
        }).catch((err) => {
            if(err.response.status === 404){
                alert('Username not found!')
            }else{
                alert('Error!')
            }
        })
    }

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });
    
    const textInputChange= (val) => {
        if(val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false 
        });
    }
}

const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });

}


const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#ff926b' barStyle="light-content"/>
            <View style={styles.header}>
            <Text style={styles.text_header}>Join Us! and Get Healthy</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
             style={styles.footer}
            >
                     {/*username*/}
             <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    color= 'black'
                    size={20}
                    />
                <TextInput
                    placeholder="your username"
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => setUsername(val)}
                />
                {data.check_textInputChange ?
                <Feather
                    name='check-circle'
                    color='green'
                    size={20}
                /> 
                : null}
            </View>
                             {/*email*/}
            <Text style={[styles.text_footer,{marginTop:20}]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='user-o'
                    color= 'black'
                    size={20}
                    />
                <TextInput
                    placeholder="your email"
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => setEmail(val)}
                />
                {data.check_textInputChange ?
                <Feather
                    name='check-circle'
                    color='green'
                    size={20}
                /> 
                : null}
            </View>
                         {/*password*/}
            <Text style={[styles.text_footer, {marginTop:20}]}>Password</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='lock'
                    color= 'black'
                    size={20}
                    />
                <TextInput
                placeholder="your password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize='none'
                onChangeText={(val) => setPassword(val)}
                />
               <TouchableOpacity
                onPress= {updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                <Feather
                    name='eye-off'
                    color='grey'
                    size={20}
                />
                :
                <Feather
                name='eye'
                color='grey'
                size={20}
            />
                    }
                </TouchableOpacity>
            </View>
                        {/* confirmpassword
            <Text style={[styles.text_footer, {marginTop:30}]}>Confirm Password</Text>
            <View style={styles.action}>
                <FontAwesome
                    name='lock'
                    color= 'black'
                    size={20}
                    />
                <TextInput
                placeholder="confirm your password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize='none'
                onChangeText={(val) => handlePasswordChange(val)}
                />
               <TouchableOpacity
                onPress= {updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                <Feather
                    name='eye-off'
                    color='grey'
                    size={20}
                />
                :
                <Feather
                name='eye'
                color='grey'
                size={20}
            />
                    }
                </TouchableOpacity>
            </View> */}
            <View style={styles.button}>
                <TouchableOpacity
                style={styles.textSign} onPress={() => regist(username, password, email)}>

                <Text style={[styles.textSign, {
                        borderColor:'#ff926b',
                        borderWidth: 2,
                        borderRadius: 10
                        
                    }]}>  Sign Up  </Text>
                </TouchableOpacity>
                    
            <TouchableOpacity 
                onPress={()=> navigation.navigate('SignInScreen')}
                style={[styles.signIn,{
                    marginTop: 15
                }]}
                >
                    <Text style={[styles.textSign,{
                          borderColor:'#ff926b',
                          borderWidth: 2,
                          borderRadius: 10
                    }]}>  Sign In  </Text>
                </TouchableOpacity>
            </View>
            </Animatable.View>
        </View>
    );
};
    

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#ff926b'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#f9f9f9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 40
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -3,
        marginTop: Platform.OS === 'ios' ? 0 : -3,
        paddingLeft: 12,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

