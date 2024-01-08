import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {COLORS, images} from '../constants';

const MyProfile = () => {
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: COLORS.white}}>
      <View
        resizeMode="cover"
        style={{width: '100%', height: '100%', position: 'fixed'}}>
        <ScrollView
          style={{
            position: 'relative',
            width: '100%',
            zIndex: 44,
            paddingBottom: 60,
            overflow: 'scroll',
            flexDirection: 'column',
          }}>
          <View style={{position: 'relative', zIndex: 50}}>
            <ImageBackground
              source={images.img009}
              resizeMode="cover"
              style={{
                width: '100%',
                height: 150,
                flexDirection: 'column',
                zIndex: 50,
              }}></ImageBackground>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: 200,
                position: 'absolute',
                top: 50,
                zIndex: 50,
                width: '100%',
              }}>
              <Image
                source={images.edgar}
                style={{
                  width: 200,
                  height: 200,
                  marginHorizontal: 'auto',
                  borderRadius: 100,
                  borderWidth: 5,
                  borderColor: COLORS.secondary,
                }}></Image>
            </View>
          </View>
          <View
            style={{
              paddingTop: 100,
              backgroundColor: COLORS.white,
              zIndex: 45,
            }}>
            <Text style={[styles.text, styles.h2]}>Edgar Tinkamanyire</Text>
            <Text style={styles.text}>Software Engineer</Text>
            <Text style={[styles.text, styles.orange]}>365 Followers</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusText: {paddingVertical: 10, paddingLeft: 3, fontSize: 10},
  h2: {fontSize: 25},
  text: {
    width: '100%',
    textAlign: 'center',
    color: COLORS.white,
    paddingVertical: 3,
    fontSize: 16,
    color: COLORS.black,
  },
  orange: {
    color: COLORS.secondary,
  },
});

export default MyProfile;
