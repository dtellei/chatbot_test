import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


export default function App({ route, navigation }) {
  const [messages, setMessages] = useState([]);

  const bot = {
    _id: 2,
    name: 'Mental Health Bot',
    avatar: 'https://placeimg.com/140/140/any',
  }

  useEffect(() => {
    setMessages([
      
      {
        _id: 2,
        text: "How are you feeling today?",
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: 'Bad',
              value: 'bad',
            },
            {
              title: 'Okay',
              value: 'okay',
            },
            {
              title: 'Good',
              value: 'good',
            },
            {
              title: 'Great',
              value: 'great',
            },
          ],
        },
        createdAt: new Date(),
        user: bot,
      },
      {
        _id: 1,
        text: "Hey there! Welcome to Mental Health Chat Bot. My name is Botsy. I am here to help you talk about what's on your mind.",
        createdAt: new Date(),
        user: bot,
      }
    ])
  }, [])


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
  />
    
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