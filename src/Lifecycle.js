import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Lifecycle extends Component{
    constructor(props)
    {
        super(props);
        console.log('-----constructor-----');
        this.state={
            count:1
        }
    }

    componentWillMount(){
        console.log('-----componentWillMount-----');
    }

    componentDidMount(){
        console.log('-----componentDidMount-----');
    }

    componentWillReceiveProps(nextContext){
        console.log('-----componentWillReceiveProps-----');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('-----shouldComponentUpdate-----');
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('-----componentWillUpdate-----');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('-----componentDidUpdate-----');
    }

    componentWillUnmount(){
        console.log('-----componentWillUnmount-----');
    }

    render(){
        return(
            <View>
                <Text>组件的生命周期</Text>
                <Text style={{fontSize:50}} onPress={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>click me!</Text>
                <Text style={{fontSize:20}}>click{this.state.count}</Text>
            </View>
            )


    }
}