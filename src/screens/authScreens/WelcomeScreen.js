import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {AppButton, Screen, VerticalTransparentSeparator} from '../../components';
import {mainContainer, title} from '../../global/styles';

const WelcomeScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <View style={{flex: 3}}>
        <Text style={[title, styles.heading]}>
          Discover Restaurants{'\n'}in your area
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <Image
            style={{width: '100%', height: 300}}
            resizeMode={'cover'}
            source={{
              uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
            }}
          />
          <Image
            style={{width: '100%', height: 300}}
            resizeMode={'cover'}
            source={{
              uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
            }}
          />
          <Image
            style={{width: '100%', height: 300}}
            resizeMode={'cover'}
            source={{
              uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
            }}
          />
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end',paddingHorizontal:20,}}>
        <AppButton title="Sign In" onPress={()=>props.navigation.navigate('Sign In')} />
        <VerticalTransparentSeparator />
        <AppButton title="Create your Account" btnType={'outlined'} />
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
export default WelcomeScreen;
