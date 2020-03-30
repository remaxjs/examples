import * as React from 'react';
import { Form, Input, Textarea, Button } from 'remax/one';
import './index.css';

export default function FormDemo() {
  function handleReset(e: any) {
    console.log(e);
  }

  function handleSubmit(e: any) {
    console.log(e);
  }

  return (
    <Form onReset={handleReset} onSubmit={handleSubmit}>
      <Input name="input" defaultValue="input" />
      <Textarea name="textarea" defaultValue="textarea" />
      <Button type="reset">reset</Button>
      <Button type="submit">submit</Button>
    </Form>
  );
}
