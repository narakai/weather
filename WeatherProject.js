/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Button, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';

import Forecast from "./Forecast"
import OpenWeatherMap from "./open_weather_map"

export default class WeatherProject extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {zip: "", forecast: null};
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({forecast: forecast});
        });
    };

    _OnPressed = event => {
        console.log("Pressed");
    };

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}/>
            );
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./flowers.png')}
                                 resizeMode='cover'
                                 style={styles.backdrop}>
                    <View style={styles.overlay}>
                        <View style={styles.column}>
                            <View style={styles.row}>
                                <Text style={styles.mainText}>
                                    Current weather for
                                </Text>
                                <View style={styles.zipContainer}>
                                    <TextInput
                                        style={[styles.zipCode, styles.mainText]}
                                        onSubmitEditing={this._handleTextChange}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <Text style={styles.bold}>
                                    Current
                                </Text>
                            </View>
                            {content}
                            {/*如果没有给 TouchableHighlight 设置onPress事件的话，那么他不会产生高亮效果，点击没有任何效果*/}
                            <TouchableHighlight style={styles.button} onPress={()=>{}}>
                                <Text> Touch Here </Text>
                            </TouchableHighlight>
                            <Button
                                onPress={this._OnPressed}
                                title="Press me"
                                color="#FFFFFF"
                                accessibilityLabel="Press this button"
                            />
                        </View>

                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
    container: {flex: 1},
    // 列
    backdrop: {flex: 1, flexDirection: "column"},
    // http://blog.csdn.net/dongdong230/article/details/52469149
    overlay: {
        paddingTop: 5,
        backgroundColor: "#000000",
        opacity: 0.5,
        flexDirection: "column",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 30
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00FFFF',
        padding: 10
    },
    column: {
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 30
    },
    mainText: {fontSize: baseFontSize, color: "#FFFFFF"},
    zipContainer: {
        height: baseFontSize + 10,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
    },
    zipCode: {padding: 0, flex: 1, flexBasis: 1, width: 50, height: baseFontSize},
    bold: {
        fontWeight: "bold",
        color: '#FFFFFF'
    },
});