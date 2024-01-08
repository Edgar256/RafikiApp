import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Feed, MyProfile, Notifications} from '../screens';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerTitleAlign: 'center',
        activeTintColor: COLORS.primary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.gray,
          borderTopWidth: 1,
          paddingBottom: 2,
        },
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.white,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'News Feed',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={35}
              style={{marginBottom: 1}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bell"
              ccolor={color}
              size={35}
              style={{marginBottom: 1}}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={35}
              style={{marginBottom: 1}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
