import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType, } from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff'
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontolledRating";



function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    console.log("App rendering")
    return (
        <div className={"App"}>


            <OnOff on={switchOn} onChange={setSwitchOn}/>


            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<UncontrolledAccordion titleValue='Menu'/>*/}
            <UncontrolledRating/>
            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}/>*/}

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
