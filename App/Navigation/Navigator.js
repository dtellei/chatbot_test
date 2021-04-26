import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../Screens/Chat';
import Symptoms from '../Screens/Symptoms'; 
import Support from '../Screens/Support';
import Journal from '../Screens/Journal'


const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator> 
                <Tab.Screen name="Chat" component={Chat}/>
                <Tab.Screen name="Journal" component={Journal} />
                <Tab.Screen name="Manage Symptoms" component={Symptoms}/>
                <Tab.Screen name="Support" component={Support}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}