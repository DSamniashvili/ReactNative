import React from 'react';
import { Button } from 'react-native';
const LoginButton = (props) => {
    return (
        <Button 
    onPress={props.onPress}
    title="Log in"
    color="#841584"
    />
    )
}
export default LoginButton;