import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Metrics from '../Themes/Metrics'

export default function App({ route, navigation }) {


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage Symptoms</Text>  
      <ScrollView style={styles.symptomsContainer}>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Persistent sad, anxious, or "empty" mood</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Feelings of hopelessness</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Feelings of guilt</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Loss of interest in hobbies and activities</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Decreased energy and fatigue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Difficulty concentrating</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Insomnia</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Problems with appetite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Suicidal thoughts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Consistent physical symptoms like headaches</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading: {
      marginTop: 40,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    symptomsContainer: {
      flexDirection: 'column',
      marginTop: 10,
      flex: 1
    },
    symptomsInnerContainer: {
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderWidth: 2,
      borderColor: 'black',
      height: 50,
      width: Metrics.screenWidth * .9,
      textAlign: 'center',
      borderRadius: 35 / 2
    },
    symptom: {
      fontSize: 16
    }
  });