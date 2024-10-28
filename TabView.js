import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Button} from 'react-native-paper';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
}
