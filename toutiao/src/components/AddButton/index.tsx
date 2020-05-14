import * as React from 'react';
import { Button, Text } from 'remax/toutiao';
import './index.css';

const AddButton = ({ onClick, text }) => {
  return (
    <Button className="add-button" hoverClassName="none" onClick={onClick}>
      <Text className="add-icon">+</Text>
      <Text>{text}</Text>
    </Button>
  );
};

export default AddButton;
