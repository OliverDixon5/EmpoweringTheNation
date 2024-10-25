import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SixWeekCoursesProps = {
  navigation: StackNavigationProp<any>;
};


const courses = [
  {
    name: 'Child Minding',
    fees: 'R750',
    purpose: 'To provide basic child and baby care',
    content: [
      'Birth to six-month old baby needs',
      'Seven-month to one year old needs',
      'Toddler needs',
      'Educational toys',
    ],
  },
  {
    name: 'Cooking',
    fees: 'R750',
    purpose: 'To prepare and cook nutritious family meals',
    content: [
      'Nutritional requirements for a healthy body',
      'Types of protein, carbohydrates and vegetables',
      'Planning meals',
      'Preparation and cooking of meals',
    ],
  },
  {
    name: 'Garden Maintenance',
    fees: 'R750',
    purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
    content: [
      'Water restrictions and the watering requirements of indigenous and exotic plants',
      'Pruning and propagation of plants',
      'Planting techniques for different plant types',
    ],
  },
];

const SixWeekCourses: React.FC<SixWeekCoursesProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>6 Week Course Summary</Text>

      
      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('CourseDetails', { course: course.name })}
        >
          <Text style={styles.course}>{`Course ${index + 1}: ${course.name}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  course: {
    fontSize: 18,
    color: '#1e90ff',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#eee',
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default SixWeekCourses;
