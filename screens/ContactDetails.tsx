import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ContactDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      
      {/* Venue 1 */}
      <Text style={styles.venueHeader}>Venue 1</Text>
      <Text style={styles.info}>Address: 123 Main Street, Johannesburg</Text>
      <Text style={styles.info}>Phone: +27 123 456 789</Text>
      <Text style={styles.info}>Email: info@empoweringthenation.co.za</Text>
      
      {/* Venue 2 */}
      <Text style={styles.venueHeader}>Venue 2</Text>
      <Text style={styles.info}>Address: Ground Flr office 3, President Place, 78 President Street, F H Odendaal St, Cnr, Germiston, 1400</Text>
      <Text style={styles.info}>Phone: +27 011 789 1234</Text>
      
      {/* Venue 3 */}
      <Text style={styles.venueHeader}>Venue 3</Text>
      <Text style={styles.info}>Address: 52 14th Rd, Noordwyk, Midrand, 1687</Text>
      <Text style={styles.info}>Phone: +27 010 555 6789</Text>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  venueHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default ContactDetails;
