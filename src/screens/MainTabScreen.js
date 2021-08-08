import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#C9480B"
    barStyle={{ backgroundColor: '#FA6C30' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Início',
        tabBarColor: '#FA6C30',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#d9480b',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Perfil',
        tabBarColor: '#FA6C30',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#05375A',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FA6C30',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Início',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FA6C30"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

// const DetailsStackScreen = ({ navigation }) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#d9480b',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <DetailsStack.Screen
//       name="Details"
//       component={DetailsScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#d9480b"
//             onPress={() => navigation.openDrawer()}
//           ></Icon.Button>
//         ),
//       }}
//     />
//   </DetailsStack.Navigator>
// );

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FA6C30',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <ProfileStack.Screen
      name="Perfil"
      component={ProfileScreen}
      // options={{
      //   headerLeft: () => (
      //     <Icon.Button
      //       name="ios-menu"
      //       size={25}
      //       backgroundColor="#FA6C30"
      //       onPress={() => navigation.openDrawer()}
      //     ></Icon.Button>
      //   ),
      // }}
    />
  </ProfileStack.Navigator>
);

// const ExploreStackScreen = ({ navigation }) => (
//   <ExploreStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#05375A',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   >
//     <ExploreStack.Screen
//       name="Explore"
//       component={ExploreScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#05375A"
//             onPress={() => navigation.openDrawer()}
//           ></Icon.Button>
//         ),
//       }}
//     />
//   </ExploreStack.Navigator>
// );
