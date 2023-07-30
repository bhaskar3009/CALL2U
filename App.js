// App.js
import React, { Component } from 'react';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { View, StyleSheet } from 'react-native';
export default function VoiceCallPage(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={198505820}
                appSign={"cecef1a17a7e7f30514541a8b567461add071e4a5f65f69fd1f40268c772d700"}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={"user_123"}
                callID={"grp1"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { 
                    // props.navigation.navigate('HomePage')
                     },
                    onHangUp: () => { 
                    // props.navigation.navigate('HomePage')
                     },
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});