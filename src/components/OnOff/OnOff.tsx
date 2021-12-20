import React from "react";

type PropsType = {
    on: boolean

}

export function OnOff(props: PropsType) {

    const onStyle ={
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green": "white"
    };
    const ofStyle ={
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '5px',
        padding: "2px",
        backgroundColor: props.on ? "white": "red"
    };
    const indicatorStyle ={
        width: '10px',
        height: '10px',
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '5px',
        backgroundColor: props.on ? "green":"red"
    };

    return <div>
        <div style={onStyle}>On</div>
        <div style={ofStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}