import React, {Component} from "react";

import {StyleSheet, Text, View} from "react-native";

export default class Forecast extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}°F
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 130,
    },
    bigText: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    mainText: {flex: 1, fontSize: 16, textAlign: 'center', color: '#FFFFFF'}
});