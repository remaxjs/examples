import * as React from 'react';
import { View, navigateTo, Button } from 'remax/wechat';
import './index.css';

export default () => {
  
    return <View className="page-todos">index <Button onClick={()=> {
       navigateTo({ url: '../new/index' });
    }}>page new</Button></View>;
};
