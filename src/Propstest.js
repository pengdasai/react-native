import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types'
export default class Propstest extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'tem'
        }
    }
    //默认的值props
    static defaultProps={
            name:'熊大',
            age:16,
            sex:'男'
    };
    //检查属性
    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired
    };
    render(){
        return (
            <View>
                <Text>传递的值：{this.props.name}</Text>
                <Text>传递的值：{this.props.age}</Text>
                <Text>传递的值：{this.props.sex}</Text>
            </View>
        )
    }
}