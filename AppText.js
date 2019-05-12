import React from 'react';
import { Text, StyleSheet } from 'react-native';
import getFontFamily from './getFontFamily';

// 过滤 fontWeight fontStyle 属性, 生成新的 style 对象
const omit = (obj, keys) => Object.keys(obj).reduce((result, key) => {
    if (!keys.includes(key)) {
        result[key] = obj[key];
    }
    return result;
}, {});

// eslint-disable-next-line react/prop-types
const MyAppText = ({ style, ...props }) => {
    const resolvedStyle = StyleSheet.flatten(style);
    const fontFamily = getFontFamily(resolvedStyle.fontFamily, resolvedStyle);
    const newStyle = omit(
        { ...resolvedStyle, fontFamily },
        ['fontStyle', 'fontWeight']
    );

    return (
        <Text
            style={newStyle}
            {...props}
        />
    );
};

export default MyAppText;
