import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../../../global/styles';

const TopView = () => {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={styles.addressContainer}>
          <View style={styles.address}>
            <Icon
              type="material-community"
              name="map-marker"
              color={colors.grey2}
              size={32}
            />
            <Text>22 Bessie Street</Text>
          </View>
          <View style={styles.address}>
            <Icon
              type="material-community"
              name="clock-time-four"
              color={colors.grey2}
              size={32}
            />
            <Text>Now</Text>
          </View>
          </View>
          <Icon
            type="material-community"
            name="tune"
            color={colors.grey2}
            size={32}
          />
          </View>
    )
}
const styles = StyleSheet.create({

    addressContainer: {
      width:'80%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:colors.grey5,
      borderRadius:20,
      paddingHorizontal:30,
      paddingVertical:5,
      marginHorizontal:20,
      justifyContent:'space-between'
    },
    address: {
      flexDirection: 'row',
      alignItems: 'center',
      
    }
})
export default TopView
