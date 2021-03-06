import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, Story} from "@storybook/react/dist/ts3.4/client/preview/types-7-0";



export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback=action('accordion mode change event fired')
const Template:(args: AccordionPropsType) => any =(args: AccordionPropsType) => <Accordion {...args} />;

export const MenuCollapsedMode2 = Template.bind({});
// @ts-ignore
MenuCollapsedMode2.args = {
    titleValue:'Menu',
    collapsed:true,
    onChange:callback,
};

export const MenuCollapsedMode = ()=><Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersUnCollapsedMode = ()=><Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>

export const ModeChanging= ()=>{
    const [value, setValue] =useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}