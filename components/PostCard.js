import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {COLORS} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default function PostCard(props) {
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
    <View style={styles.feedTab}>
      <View style={styles.userInfoContainer}>
        <Image
          source={props.userImage}
          resizeMode="contain"
          style={styles.userImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{props.name}</Text>
          <Text style={styles.postTime}>{props.time}</Text>
        </View>
        <TouchableOpacity onPress={() => alert('Post options')}>
          <AnimatedIcon
            name="ellipsis-h"
            size={25}
            color={COLORS.primary}
            style={animatedStyle}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.postText}>{props.text}</Text>
      <Image source={props.image} resizeMode="cover" style={styles.postImage} />

      <View style={styles.postActionsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert('You liked this post')}>
          <AnimatedIcon
            name="thumbs-o-up"
            size={25}
            color={COLORS.primary}
            style={animatedStyle}
          />
          <Text style={styles.actionText}>{props.likeCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert('You are trying to comment on this post')}>
          <AnimatedIcon
            name="comment-o"
            size={25}
            color={COLORS.primary}
            style={animatedStyle}
          />
          <Text style={styles.actionText}>{props.commentCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert('You are sharing this post')}>
          <Text style={styles.actionText}>Share</Text>
          <AnimatedIcon
            name="share-alt"
            size={25}
            color={COLORS.primary}
            style={animatedStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedTab: {
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'column',
  },
  userInfoContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 5,
  },
  userInfo: {
    flex: 4,
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: '500',
    fontSize: 15,
    color: COLORS.gray,
  },
  postTime: {
    textAlign: 'left',
    color:COLORS.gray
  },
  dotsIcon: {
    height: 20,
    width: 20,
  },
  postText: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    textAlign: 'left',
    color:COLORS.black
  },
  postImage: {
    width: '100%',
    height: 200,
    paddingVertical: 20,    
  },
  postActionsContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  actionIcon: {
    width: 30,
    height: 30,
  },
  actionText: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
    color:COLORS.black
  },
});
