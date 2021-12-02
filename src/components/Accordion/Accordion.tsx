import React from "react";

function Accordion(props: any) {
    console.log("Accordion rendering")
    return <div>
        ---{props.title}---
        <AccordionTitle />
        <AccordionBody/>
    </div>
}
function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <h3>Меню</h3>
    )
}
function AccordionBody() {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
export default Accordion;