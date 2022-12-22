import React from 'react';

import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';


const AppButton = ({ onPress, text, textColor, style}) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <AppText intendedFontSize={20} intendedColor={textColor} text={text}/>
    </TouchableOpacity>
  );



export default AppButton;

