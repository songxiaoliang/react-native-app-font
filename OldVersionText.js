import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
export default class TextWidget extends Component {
    renderAndroidText() {
        // eslint-disable-next-line react/prop-types
        let { style, children } = this.props;
        let fontStyle = null;
        if (style) {
            if (style instanceof Array) {
                style = StyleSheet.flatten(style);
            }
            fontStyle = style.fontWeight ? {
                fontWeight: 'normal',
                fontFamily: 'PingFangBold',
            } : { fontFamily: 'PingFangRegular' };
        }
        return (
            <Text
                {...this.props}
                style={[
                    style,
                    fontStyle,
                ]}
            >
                {children}
            </Text>
        );
    }

    render() {
        return Platform.OS === 'ios' ? <Text {...this.props} /> : this.renderAndroidText();
    }
}
