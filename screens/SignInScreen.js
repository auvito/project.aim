import React, { useState } from 'react';
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

import {AuthContext} from './context'

const SignInScreen = ({navigation}) => {
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });
    
    const {signIn} = React.useContext (AuthContext);
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
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
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
            <Text style={styles.text_header}>welcome!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
             style={styles.footer}
            >
            <Text style={styles.text_footer}>Email</Text>
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
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Feather
                    name='check-circle'
                    color='green'
                    size={20}
                /> 
                : null}
            </View>
            <Text style={[styles.text_footer, {marginTop:30}]}>Password</Text>
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
            </View>
            <View style={styles.button}>
            <TouchableOpacity 
                onPress={()=> {signIn()}}
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
            <TouchableOpacity 
                onPress={()=> navigation.navigate('SignUpScreen')}
                style={[styles.signIn,{
                    marginTop: 15
                }]}
                >
                    <Text style={[styles.textSign,{
                          borderColor:'#ff926b',
                          borderWidth: 2,
                          borderRadius: 10
                    }]}>  Sign Up  </Text>
                </TouchableOpacity>
            </View>
            </Animatable.View>
        </View>
    );
};
    

export default SignInScreen;

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

