import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import MeterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons.js';
import TabViewExample from './TabView';
import {Button} from 'react-native-paper';
import Order from './Order';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',

          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                borderRadius: 50,
                padding: 8,
                backgroundColor: focused ? '#38ACEE' : '',
              }}>
              <Icon name="home" color={focused ? 'white' : color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Txns"
        component={Txn}
        options={{
          headerShown: false,
          tabBarLabel: 'Txns',

          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                borderRadius: 50,
                padding: 8,
                backgroundColor: focused ? '#38ACEE' : '',
              }}>
              <Icon name="home" color={focused ? 'white' : color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',

          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                borderRadius: 50,
                padding: 8,
                backgroundColor: focused ? '#38ACEE' : '',
              }}>
              <MeterialCommunityIcon
                name="stethoscope"
                color={focused ? 'white' : color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',

          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                borderRadius: 50,
                padding: 8,
                backgroundColor: focused ? '#38ACEE' : '',
              }}>
              <Icon1
                name="menu"
                color={focused ? 'white' : color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const DATA = Array.from({length: 50}, (_, i) => ({
  id: (i + 1).toString(),
  title: `Item ${i + 1}`,
}));

const Home = () => {
  const renderItem = ({item}) => (
    <View style={{padding: 20, borderBottomWidth: 1}}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const Txn = () => {
  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data} // Data for the FlatList
      keyExtractor={item => item.id} // Unique key for each item
      renderItem={renderItem} // Function to render each item
    />
  );
};

const Menu = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>Menu</Text>
    </View>
  );
};

const Orders = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="orders"
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="tab"
        component={TabViewExample}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
});
