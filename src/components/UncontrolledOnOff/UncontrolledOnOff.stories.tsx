import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callback=action('on or off clicked')
export const OnMode = ()=><UncontrolledOnOff defaultON={true} onChange={callback}/>
export const OffMode = ()=><UncontrolledOnOff defaultON={false} onChange={callback}/>
export const DefaultInputValue = ()=><input  defaultValue={'yo'} />

