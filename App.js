import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import googlesheet from './Component/googlesheet';

const App = () => {
  const [dateTime, setDateTime] = useState('');

  const onPressButton = () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    setDateTime(dateTimeString);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{dateTime}</Text>
      <Text>{dateTime}</Text>
      <TouchableOpacity
        style={{
          borderRadius: 99,
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: 'blue',
        }}
        onPress={onPressButton}
      >
        <Text style={{color: 'white', fontWeight: 900}}>打卡</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default App;