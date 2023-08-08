import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  const [dateTime, setDateTime] = useState('');

  const writeToSheet = async (dateTime) => {
    // 上述程式碼放在此處

    try {
      const now = new Date();
      const dateTimeString = now.toLocaleString();
      await writeToSheet(dateTimeString);
      console.log('已成功寫入 Google Sheets');
    } catch (err) {
      console.error('寫入 Google Sheets 時出錯:', err);
    }
  };

  const onPressButton = () => {
    writeToSheet(dateTime);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        <Text style={{ color: 'white', fontWeight: '900' }}>打卡</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyComponent;