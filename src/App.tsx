import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Rating";

function hello() {
 alert("Hello IT-KAMASUTRA")
}
function App() {
    console.log("App rendering")
    return (
        <div>
            <img src={"https://unsplash.com/photos/UkwbRZkt8zM"}/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion title={"User"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}
function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}


export default App;
