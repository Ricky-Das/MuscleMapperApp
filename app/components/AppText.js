import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import AdjustFontSize from '../scripts/AdjustFontSize';

const AppText = ({intendedFontSize, intendedColor, text}) => {
    return (
        <View>
            <Text style={[ {fontSize: AdjustFontSize(intendedFontSize)}, {color: intendedColor}]}>{text}</Text>
        </View>
    );
};

export default AppText;