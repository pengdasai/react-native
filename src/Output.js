import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Output extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'模板'
        }
    }
    render(){
        return (
            <View>
                <Text>我是{this.state.msg}</Text>
            </View>
        )
    }
}