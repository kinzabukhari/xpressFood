import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from 'react-native-elements';

const Screen = ({children,style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
export default Screen;
