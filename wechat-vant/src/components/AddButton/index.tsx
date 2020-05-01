import * as React from 'react';
import {Button, Text} from 'remax/wechat';
import './index.css';
// 需要注意的是引用是使用lib下面的index.js，而不是dist下的
import VantIcon from '@vant/weapp/lib/icon'

const AddButton = ({onClick, text}) => {
    return (
        <Button className="add-button" hoverClass="none" onClick={onClick}>
            <VantIcon custom-class='add-icon' name={'plus'}/>
            <Text>{text}</Text>
        </Button>

    );
};

export default AddButton;
