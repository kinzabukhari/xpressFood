import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

const HomeHeader = ({headingText,navigation}) => {

    const BadgeIcon = withBadge(0)(Icon)

  const renderLeftButton = () => {
    return (
      <Icon
        type="material-community"
        name="menu"
        color={colors.white}
        size={32}
        onPress={()=>navigation.toggleDrawer()}
      />
    );
  };
  const renderRightButton = () => {
    return (
      <BadgeIcon
        type="material-community"
        name="cart"
        color={colors.white}
        size={32}
      />
    );
  };
  return (
    <View style={styles.container}>
      {renderLeftButton()}
      <Text style={{...styles.heading, ...styles}}>{headingText}</Text>
      {renderRightButton()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: parameters.headerHeight,
  },
  heading: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeHeader;
