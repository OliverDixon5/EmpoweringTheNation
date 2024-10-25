import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SixMonthCourses from './screens/SixMonthCourses';
import SixWeekCourses from './screens/SixWeekCourses';
import CourseDetails from './screens/CourseDetails';
import FeesCalculator from './screens/FeesCalculator';
import ContactDetails from './screens/ContactDetails';
import { RootStackParamList } from './types';  

const Stack = createStackNavigator<RootStackParamList>(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCourses} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCourses} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="FeesCalculator" component={FeesCalculator} />
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
