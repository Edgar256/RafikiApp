import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,  
  Animated, 
} from 'react-native';
import {COLORS} from '../constants/theme';
import {images} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const Welcome = ({navigation}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  const rotateInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate: rotateInterpolate}],
  };

  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', justifyContent: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'row',
          marginVertical: 70,
          flex: 1,
        }}>
        <Image source={images.logo} resizeMode="contain" style={styles.image} />
      </View>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: COLORS.primary,
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 1,
          height: '40%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '70%'}}>
            <Text style={{fontSize: 45, fontWeight: 500, color: COLORS.white}}>
              Welcome to RafikiApp
            </Text>
            <Text style={{fontSize: 18, color: COLORS.white}}>
              Meet. Connect. Discover - Friends
            </Text>
          </View>
          <View
            style={{position: 'relative', flex: 1, flexDirection: 'column'}}>
            <TouchableOpacity
              style={{paddingVertical: 60, paddingHorizontal: 20}}
              onPress={() => navigation.navigate('LoginOptions')}>
              <AnimatedIcon
                name="arrow-right"
                size={65}
                color={COLORS.secondary}
                style={animatedStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'row',
            flex: 1,
          }}>
          <Icon name="ellipsis-h" size={45} color={COLORS.white} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingVertical: 20,
    height: '100%',
    flexDirection: 'column',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Welcome;
