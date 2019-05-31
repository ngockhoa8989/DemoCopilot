import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import Home from '../components/Home';
import Submit from '../components/Submit';

export default createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                gesturesEnabled: false,
                // tabBarLabel: ({ tintColor }) => <View style={styles.labelView}><Text style={{ fontSize: 10, color: tintColor }} >{'HOME'}</Text></View>,
                // tabBarIcon: ({ tintColor }) => <Icon type="AntDesign" style={{ fontSize: 25, color: tintColor }} name="home" />
            }
        },
        Submit: {
            screen: Submit,
            navigationOptions: {
                gesturesEnabled: false,
                // tabBarLabel: ({ tintColor }) => <View style={styles.labelView}><Text style={{ fontSize: 10, color: tintColor }} >{'SUBMIT'}</Text></View>,
                // tabBarIcon: ({ tintColor }) => <Icon type="AntDesign" style={{ fontSize: 25, color: tintColor }} name="gitlab" />
            }
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        // showLabel: false,
        // tabBarOptions: {
        //     keyboardHidesTabBar: true,
        //     activeTintColor: '#EA0000',
        //     inactiveTintColor: '#373E43',
        //     labelStyle: {
        //         color: '#373E43'
        //     }
        // }
    }
);

const styles = StyleSheet.create({
    labelView: {
        paddingBottom: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});