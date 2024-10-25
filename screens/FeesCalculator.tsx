import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const FeesCalculator = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [numberOfCourses, setNumberOfCourses] = useState('1 course'); 
  const [currency, setCurrency] = useState('USD');
  const [totalFees, setTotalFees] = useState(0);

  const courses = [
    { name: 'First Aid', fee: 2000 },
    { name: 'Sewing', fee: 1500 },
    { name: 'Child Minding', fee: 1000 },
    { name: 'Cooking', fee: 1200 },
    { name: 'Garden Maintenance', fee: 800 },
    { name: 'Landscaping', fee: 1800 },
    { name: 'Life Skills', fee: 900 },
  ];

  const handleCalculate = () => {
    const selected = courses.find(course => course.name === selectedCourse);
    if (selected) {
      let discount = 0;

      
      switch (numberOfCourses) {
        case '1 course':
          discount = 0;
          break;
        case '2 courses':
          discount = 5;
          break;
        case '3 courses':
          discount = 10;
          break;
        case 'More than 3 courses':
          discount = 15;
          break;
        default:
          discount = 0;
      }

    
      const feeAfterDiscount = selected.fee - (selected.fee * discount / 100);
      setTotalFees(feeAfterDiscount);
    } else {
      setTotalFees(0); 
    }
  };

  return (
    <View style={styles.container}>
      <Text>Select a Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a course" value="" />
        {courses.map((course, index) => (
          <Picker.Item key={index} label={course.name} value={course.name} />
        ))}
      </Picker>

      <Text>Select Number of Courses:</Text>
      <Picker
        selectedValue={numberOfCourses}
        onValueChange={(itemValue) => setNumberOfCourses(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="1 course (no discount)" value="1 course" />
        <Picker.Item label="2 courses (5% discount)" value="2 courses" />
        <Picker.Item label="3 courses (10% discount)" value="3 courses" />
        <Picker.Item label="More than 3 courses (15% discount)" value="More than 3 courses" />
      </Picker>

      <Text>Select Currency:</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(itemValue) => setCurrency(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="ZAR" value="ZAR" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>

      <Button title="Calculate Total Fees" onPress={handleCalculate} />

      <Text style={styles.total}>Total Fees: {currency} {totalFees.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FeesCalculator;