import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';  

type CourseDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetails'>;
type CourseDetailsRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

type CourseDetailsProps = {
  navigation: CourseDetailsNavigationProp;
  route: CourseDetailsRouteProp;
};

const CourseDetails: React.FC<CourseDetailsProps> = ({ route }) => {
  const { courseName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{courseName} Course Details</Text>
      
      <Text style={styles.label}>Fees:</Text>
      <Text style={styles.info}>R2,000</Text>
      
      <Text style={styles.label}>Purpose:</Text>
      <Text style={styles.info}>To equip individuals with basic {courseName} skills.</Text>
      
      <Text style={styles.label}>Content:</Text>
      <Text style={styles.info}>
        Comprehensive lessons on {courseName}, practical workshops, and hands-on experience.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 15,
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CourseDetails;

