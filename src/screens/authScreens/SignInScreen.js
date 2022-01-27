import React, {useState, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../../components/Header';
import {colors, mainContainer, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import { AppButton, Screen } from '../../components';
const SignInScreen = (props) => {
  const [focussed, setFocussed] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <Screen>
      <Header title={'Sign In'} type={'arrow-left'} navigation={props.navigation} />
      <View style={mainContainer}>
        <Text style={title}>Sign In</Text>
        <View style={{}}>
          <Text style={styles.text}>
            Please enter the email and password registered {'\n'}with your
            account
          </Text>
        </View>
        <TextInput
          style={styles.textInput1}
          ref={textInput1}
          placeholder={'Email'}
        />
        <View style={styles.textInput1}>
          <Animatable.View>
            <Icon
              name={'lock'}
              type={'material'}
              iconStyle={{color: colors.grey3}}
            />
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            ref={textInput2}
            placeholder={'Password'}
            onFocus={() => setFocussed(false)}
            onBlur={() => setFocussed(true)}
          />
          <Animatable.View animation={focussed ? '' : 'bounceIn'}>
            <Icon
              name={'visibility-off'}
              type={'material'}
              iconStyle={{color: colors.grey3}}
            />
          </Animatable.View>
        </View>
        <Text style={styles.button}>Forget Password</Text>
        <AppButton title="Sign in" onPress={()=>props.navigation.navigate('DrawerNavigator')} />

        <Text style={styles.orButton}>OR</Text>
        <SocialIcon
          title="Sign in with Facebook"
          button
          type="facebook"
          style={styles.socialButton}
        />
        <SocialIcon
          title="Sign in with Google"
          button
          type="google"
          style={styles.socialButton}
        />
        <Text style={{marginVertical: 10}}>New on XpressFood?</Text>
        {/* <View style={{}}> */}
        <AppButton
          title="Create an Account"
          btnType={"outlined"}
          outlineButtonStyle={{ alignSelf:'flex-end'}}
        />
        {/* </View> */}
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
  },
  button: {
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    marginVertical: 10,
    color: colors.grey3,
  },
  orButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  textInput1: {
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: colors.grey3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialButton: {
    width: '100%',
    margin: 0,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
  },
});
export default SignInScreen;
