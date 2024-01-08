import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {images} from '../constants';

const Notification = () => {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 60,
          }}>
          <Image
            source={images.edgar}
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 60,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 5,
            flexDirection: 'column',
          }}>
          <View
            style={{
              marginLeft: 5,
              flexDirection: 'column',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: SIZES.h3,
                  color: COLORS.primary,
                  fontWeight: 400,
                  marginBottom: 2,
                  paddingRight: 4,
                }}>
                Edgar Tinkamanyire
              </Text>
              <Text
                style={{
                  fontSize: SIZES.body4,
                  color: COLORS.gray,
                  marginBottom: 2,
                }}>
                likes your post
              </Text>
            </TouchableOpacity>
            <Text style={{
                  fontSize: 12,
                  color: COLORS.gray,
                  marginBottom: 2,
                }}>XX/XX/XXXX</Text>
          </View>
        </View>
      </View>
    );
  };

  export default Notification;