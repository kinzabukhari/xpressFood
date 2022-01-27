import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {colors} from '../global/styles';

const AppButton = props => {
  const {btnType, title, titleStyle, buttonStyle, btnContainerStyles,onPress, color} = props;
  const titleColor = color === 'black' ? colors.grey1 : colors.white
  if (btnType == 'outlined') {
    return (
      <Button
        title={title}
        type={'outline'}
        titleStyle={{...styles.titleOutlineStyle, ...titleStyle}}
        buttonStyle={{...styles.outlineButtonStyle, ...buttonStyle}}
        containerStyle={{...styles.btnContainerStyles, ...btnContainerStyles}}
        onPress={onPress}
      />
    );
  } else {
    return (
      <Button
        title={title}
        type={btnType}
        titleStyle={{...styles.titleStyle,color:titleColor, ...titleStyle}}
        buttonStyle={{...styles.buttonStyle,...buttonStyle}}
        containerStyle={{...styles.btnContainerStyles, ...buttonStyle}}
        onPress={onPress}
      />
    );
  }
};
const styles = StyleSheet.create({
  titleOutlineStyle: {
    color: colors.primary,
    fontSize: 16,
    // fontWeight: 'bold',
    paddingHorizontal:20,
  },
  titleStyle: {
    color: colors.white,
    fontSize: 16,
    // fontWeight: 'bold',
    paddingHorizontal:20,
  },
  buttonStyle: {
    // width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    // marginVertical: 10,
    fontWeight: 'bold',
    height: 50,
    padding:0,
  },
  outlineButtonStyle: {
    // width: '100%',
    backgroundColor: colors.transparent,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    padding:0,
  },
  btnContainerStyles: {},
});
export default AppButton;
