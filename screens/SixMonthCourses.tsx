import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SixMonthCoursesProps = {
  navigation: StackNavigationProp<any>;
};


const courses = [
  {
    name: 'First Aid',
    fees: 'R1500',
    purpose: 'To provide first aid awareness and basic life support',
    content: [
      'Wounds and bleeding',
      'Burns and fractures',
      'Emergency scene management',
      'Cardio-Pulmonary Resuscitation (CPR)',
      'Respiratory distress e.g., Choking, blocked airway',
    ],
  },
  {
    name: 'Sewing',
    fees: 'R1500',
    purpose: 'To provide alterations and new garment tailoring services',
    content: [
      'Types of stitches',
      'Threading a sewing machine',
      'Sewing buttons, zips, hems and seams',
      'Alterations',
      'Designing and sewing new garments',
    ],
  },
  {
    name: 'Landscaping',
    fees: 'R1500',
    purpose: 'To provide landscaping services for new and established gardens',
    content: [
      'Indigenous and exotic plants and trees',
      'Fixed structures (fountains, statues, benches, tables, built-in braai)',
      'Balancing of plants and trees in a garden',
      'Aesthetics of plant shapes and colours',
      'Garden layout',
    ],
  },
  {
    name: 'Life Skills',
    fees: 'R1500',
    purpose: 'To provide skills to navigate basic life necessities',
    content: [
      'Opening a bank account',
      'Basic labour law (know your rights)',
      'Basic reading and writing literacy',
      'Basic numeric literacy',
    ],
  },
];

const SixMonthCourses: React.FC<SixMonthCoursesProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>6 Month Course Summary</Text>

      
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

export default SixMonthCourses;
