import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button onPress={() => navigation.navigate('tab')}>
        Press to see view components
      </Button>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
