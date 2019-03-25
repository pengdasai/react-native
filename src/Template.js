import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Template extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'tem'
        }
    }
    render(){
        return (
            <View>
                <Text>我是模板</Text>
            </View>
        )
    }
}