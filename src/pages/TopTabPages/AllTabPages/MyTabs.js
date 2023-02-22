import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Comics from '../Comics';
import Characters from '../Characters';
import Series from '../Series';
import Stories from '../Stories';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Comics" component={Comics} />
      <Tab.Screen name="Characters" component={Characters} />
      <Tab.Screen name="Series" component={Series} />
      <Tab.Screen name="Stories" component={Stories} />
    </Tab.Navigator>
  );
};

export default MyTabs;
