import * as React from 'react';
import { View, Text } from 'remax/alipay';
import Badge from 'mini-antui/es/badge';

export default () => {
  return (
    <View className="page-todos">
      <Badge>
        <View slot="inner">
          <Text>Hello</Text>
        </View>
      </Badge>
    </View>
  );
};
