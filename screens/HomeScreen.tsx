import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const scaleAnim = new Animated.Value(1);


  useEffect(() => {
    Alert.alert("Welcome", "Explore the courses and calculate fees!");
  }, []);

  
  const handlePress = (screen: string, message: string) => {
  
    console.log(`Navigating to ${message}`);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => navigation.navigate(screen));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Empowering the Nation!</Text>

      <Image 
        source={require('./assets/Logo.png')} 
        style={styles.logo} 
      />

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity onPress={() => handlePress('SixMonthCourses', '6 Month Courses')}>
          <Text style={styles.link}>6 Month Courses</Text>
        </TouchableOpacity>
      </Animated.View>

      
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity onPress={() => handlePress('SixWeekCourses', '6 Week Courses')}>
          <Text style={styles.link}>6 Week Courses</Text>
        </TouchableOpacity>
      </Animated.View>

      
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity onPress={() => handlePress('FeesCalculator', 'Fees Calculator')}>
          <Text style={styles.link}>Calculate Fees</Text>
        </TouchableOpacity>
      </Animated.View>

      
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity onPress={() => handlePress('ContactDetails', 'Contact Us')}>
          <Text style={styles.link}>Contact Us</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center' 
  },
  welcomeText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 40 
  },
  link: { 
    fontSize: 20, 
    color: '#1e90ff', 
    marginVertical: 15, 
    textAlign: 'center' 
  },
  logo: {
    width: 100, 
    height: 100, 
    alignSelf: 'center', 
    marginBottom: 20, 
  },
});

export default HomeScreen;

