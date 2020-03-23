import * as React from 'react';
import { Button, Text, TapEvent } from 'remax/one';
import './index.css';

interface Props {
  onTap: (event: TapEvent) => void;
  text: string;
}

const AddButton = ({ onTap, text }: React.PropsWithChildren<Props>) => {
  return (
    <Button className="add-button" hoverClassName="none" onTap={onTap}>
      <Text className="add-icon">+</Text>
      <Text>{text}</Text>
    </Button>
  );
};

export default AddButton;
