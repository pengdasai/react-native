import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class StateTest extends Component{
    constructor(props){
        super(props);
        this.state={
            size:80
        }
    }
    render(){
        return (
            <View>
                <Text>{this.state.size}</Text>
            </View>
        )
    }
}