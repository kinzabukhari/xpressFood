import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import AppText from './AppText';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={{backgroundColor: colors.primary, padding: 10}}>
          <View style={styles.avatarGroup}>
            <Avatar
              rounded
              size={50}
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
              }}
              avatarStyle={styles.avatar}
            />
            <View style={styles.data}>
              <AppText>Kinza Bukhari</AppText>
              <AppText>Kinzabukhari@2000@gmail.com</AppText>
            </View>
          </View>
          <View style={styles.favorite}>
            <View style={{alignItems: 'center'}}>
              <AppText color="white">1</AppText>
              <AppText color="white">My Favorites</AppText>
            </View>
            <View style={{alignItems: 'center'}}>
              <AppText color="white">1</AppText>
              <AppText color="white">My Favorites</AppText>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <View>
          <Text style={{paddingLeft: 20, paddingTop: 20}}>Prefrences</Text>
          <View style={styles.favorite}>
            <AppText>Dark Mode</AppText>
            <Switch />
          </View>
        </View>
      </DrawerContentScrollView>
        <DrawerItem
          label="Sign Out"
          icon={({focussed, size}) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          )}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin:0,
    // paddingTop:0,
    // backgroundColor:'red'
  },
  avatar: {},
  data: {
    marginLeft: 10,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favorite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
  },
});
export default DrawerContent;
