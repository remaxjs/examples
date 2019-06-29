import * as React from 'react';
import { Button, Text } from '@remax/components';
import './index.css';

const AddButton = ({ onClick, text }) => {
  return (
    <Button className="add-button" hover-class="none" onClick={onClick}>
      <Text className="add-icon">+</Text>
      <Text>{text}</Text>
    </Button>
  );
};

export default AddButton;
