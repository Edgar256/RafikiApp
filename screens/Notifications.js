import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Notification} from '../components';

const Notifications = () => {
  const notificationsData = Array.from({length: 20}, (_, index) => ({
    id: index.toString(),
  }));

  const renderNotification = ({item}) => <Notification />;

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        keyExtractor={item => item.id}
        renderItem={renderNotification}
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

export default Notifications;
