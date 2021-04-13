import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>Support</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });