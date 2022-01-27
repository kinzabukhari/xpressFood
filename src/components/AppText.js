import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../global/styles';

const AppText = (props) => {
    const {children,style, color} = props
    const fontColor = color === "white" ? colors.white : colors.black
  return <Text style={{...styles.container,color:fontColor,...style}}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 14,
  },
});
