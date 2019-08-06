import * as React from 'react';
import { Button, Text, Platform } from 'remax';
import './index.css';
import clsx from 'clsx';

const AddButton = ({ onClick, text }) => {
  return (
    <Button
      className={clsx('add-button', { wechat: Platform.isWechat })}
      hoverClass="none"
      onClick={onClick}
    >
      <Text className="add-icon">+</Text>
      <Text>{text}</Text>
    </Button>
  );
};

export default AddButton;
