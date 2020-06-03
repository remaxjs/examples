import * as React from 'react';
import { Button, Text } from 'remax/wechat';
import './index.css';
import VantButton from '@vant/weapp/lib/button'
import VantIcon from '@vant/weapp/lib/icon'

const AddButton = ({ onClick, text }) => {
  return (
    <VantButton color={"#323239"} bindclick={onClick}>
      <VantIcon custom-class="add-icon" name={"plus"}/>
      <Text>{text}</Text>
    </VantButton>
  );
};

export default AddButton;
