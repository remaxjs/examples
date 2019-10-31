import * as React from 'react';
import { Button, Text } from "remax/wechat";
import { TouchEvent } from "remax/esm/adapters/wechat/components/baseTyping";
import './index.css';

interface Props {
  text: string;
  onClick?: (event: TouchEvent) => void;
}

const AddButton = ({ onClick, text }: Props) => {
  return (
    <Button className="add-button" hoverClass="none" onClick={onClick}>
      <Text className="add-icon">+</Text>
      <Text>{text}</Text>
    </Button>
  );
};

export default AddButton;
