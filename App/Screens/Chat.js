import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';
 
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

export default function App({ route, navigation }) {
  return (
    <ChatBot steps={steps} />
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