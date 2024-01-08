import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PostCard from '../components/PostCard';
import {images} from '../constants';

const Feed = ({navigation}) => {
  const posts = [
    {
      id: 1,
      name: 'Edgar Tinkamanyire',
      userImage: images.edgar,
      time: '10:00am',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: images.img001,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 2,
      name: 'Brenda Kyomuhendo',
      userImage: images.brenda,
      time: '10:00am',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: images.img002,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 3,
      name: 'Wamala Raymond Bazanye',
      userImage: images.defaultImg,
      time: '10:00am',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: images.img003,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 4,
      name: 'David Jhiel',
      userImage: images.david,
      time: '10:00am',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
      image: images.img004,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 5,
      name: 'Nagasha Hussein',
      userImage: images.nagasha,
      time: '10:00am',
      text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      image: images.img005,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 6,
      name: 'Ben Nkadeal',
      userImage: images.ben,
      time: '10:00am',
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      image: images.img006,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 7,
      name: 'Edgar Wamani',
      userImage: images.defaultImg,
      time: '10:00am',
      text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
      image: images.img008,
      likeCount: '35',
      commentCount: '67',
    },
    {
      id: 8,
      name: 'Joel Chikali',
      userImage: images.joel,
      time: '10:00am',
      text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      image: images.img009,
      likeCount: '35',
      commentCount: '67',
    },
  ];

  const renderPost = ({item}) => (
    <PostCard
      name={item.name}
      userImage={item.userImage}
      time={item.time}
      text={item.text}
      image={item.image}
      likeCount={item.likeCount}
      commentCount={item.commentCount}
      navigation={navigation}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    padding: 10,
  },
});

export default Feed;
