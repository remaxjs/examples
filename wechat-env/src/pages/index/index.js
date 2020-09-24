import * as React from 'react';
import { View, Image, Text } from 'remax/wechat';
import logo from '@/assets/logo.png';
import './index.css';

export default () => {
  return (
    <View className="page">
      <View className="user">
        <Image className="avatar" src={logo} />
      </View>
      <Text className="text-center white">Greet from env: {process.env.REMAX_APP_GREET}</Text>
    </View>
  );
};
