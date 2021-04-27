import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Chat from '../Screens/Chat';
import Symptoms from '../Screens/Symptoms';
import SymptomDetails from '../Screens/SymptomDetails'; 
import Support from '../Screens/Support';
import Journal from '../Screens/Journal'

const ChatStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
}

const SymptomStack = createStackNavigator();

function SymptomsStackScreen() {
  return (
    <SymptomStack.Navigator>
      <SymptomStack.Screen name="Symptoms" component={Symptoms} />
      <SymptomStack.Screen name="Details" component={SymptomDetails} />
    </SymptomStack.Navigator>
  );
}

const SupportStack = createStackNavigator();

function SupportStackScreen() {
  return (
    <SupportStack.Navigator>
      <SupportStack.Screen name="Support" component={Support} />
    </SupportStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Chat') {
                            iconName = "chatbox-ellipses"
                        } else if (route.name === 'Journal') {
                            iconName = "journal"
                        } else if (route.name === 'Manage Symptoms') {
                            iconName = "thermometer"
                        } else if (route.name === 'Support') {
                            iconName = "ios-help-buoy"
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
                tabBarOptions={{
                    labelStyle: { fontSize: 10 },
                    activeTintColor: '#03c2fc',
                    style: { height: '8%', paddingTop: '1%', paddingBottom: '1%' }
                }}
            > 
                <Tab.Screen name="Chat" component={Chat}/>
                <Tab.Screen name="Journal" component={Journal} />
                <Tab.Screen name="Manage Symptoms" component={Symptoms}/>
                <Tab.Screen name="Support" component={Support}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}