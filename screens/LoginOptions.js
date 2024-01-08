import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {COLORS, images, SIZES} from '../constants';

const LoginOptions = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      <ImageBackground
        source={images.playingLad}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          flex: 1,
        }}>
        <View style={{width: '100%', flexDirection: 'row', flex: 8}}>
          <Image
            source={images.logoWhite}
            resizeMode="contain"
            style={styles.imageLogo}
          />
        </View>
        <View style={{flexDirection: 'row', padding: 20, flex: 1}}>
          <TouchableOpacity
            style={{
              color: COLORS.white,
              flex: 1,
              padding: 5,
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderRadius: 30,
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                padding: 5,
              }}>
              SIGNUP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              color: '#FFFFFF',
              flex: 1,
              padding: 5,
              borderWidth: 0,
              borderRadius: 30,
              margin: 5,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                padding: 5,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            flex: 3,
            textAlign: 'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.accountText}>Already have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    color: '#FFFFFF',
  },
  imageLogo: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    marginTop: 100,
    flex: 1,
  },
  accountText: {
    marginRight: 10,
    color: COLORS.lightGray,
  },
  loginLink: {
    color: COLORS.white,
    fontSize: SIZES.h3,
  },
});

export default LoginOptions;
