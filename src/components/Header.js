import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

const Header = ({title,type,navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Icon
          type="material-community"
          name={type}
          color={colors.white}
          size={28}
          onPress={()=>navigation.goBack()}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems:'center'
  },
  header: {
    height: parameters.headerHeight,
    backgroundColor: colors.primary,
    
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 20,
    textTransform: 'uppercase',
    fontWeight:'bold'
  },
});
export default Header;
