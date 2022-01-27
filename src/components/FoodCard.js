import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
// import {AppText} fro
const FoodCard = props => {
  const {item, screenWidth} = props;
  return (
    <View style={{...styles.container,width:screenWidth}}>
      <Image
        source={{uri: item.images}}
        style={{width: screenWidth, height: 170}}
      />
      <View style={{padding: 10}}>
        <Text color="black" style={styles.headingText}>
          {item.restaurantName}
        </Text>
        <View style={styles.addressView}>
          <View style={styles.locationView}>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey2}
            />
            <Text>{item.farAway} Min</Text>
          </View>
          <View style={styles.separator}></View>
          <Text>{item.businessAddress} Min</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    elevation:2,
    borderColor:colors.grey3,
    shadowColor:colors.black,
    backgroundColor:colors.white,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.grey1,
  },
  addressView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: colors.grey2,
    color: colors.black,
  },
});
export default FoodCard;
