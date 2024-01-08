import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {COLORS, images} from '../constants';
import Checkbox from 'expo-checkbox';

const SignUp = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          flexDirection: 'column',
        },
        styles.background,
      ]}>
      <View style={{flex: 1}}>
        <View style={styles.centering}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.imageLogo}
          />
        </View>
        <View style={[{flex: 1, flexWrap: 'wrap'}, styles.positionCenter]}>
          <View>
            <Text
              style={[{color: COLORS.black, textAlign: 'center', padding: 20}]}>
              Finish setting up your account Create a password to register an
              account for free. You will access:
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, padding: 20}}>
        <TextInput
          placeholder="Name"
          keyboardType="default"
          maxLength={45}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.gray,
            width: '100%',
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Email"
          keyboardType="default"
          maxLength={45}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.gray,
            width: '100%',
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          maxLength={45}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: COLORS.gray,
            width: '100%',
            marginBottom: 20,
          }}
        />
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Checkbox
            style={{height: 20, width: 20}}
            value={isSelected}
            color={COLORS.lightGray}
            onValueChange={setSelection}
          />
          <Text
            style={[
              {
                paddingLeft: 10,
                color: COLORS.black,
              },
            ]}>
            Accept terms and conditions
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
              width: 200,
              borderRadius: 30,
              padding: 10,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.white}}>Yes, Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 10,
    flex: 1,
  },
  background: {
    height: '100%',
  },
  centering: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
  },
  positionCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default SignUp;
