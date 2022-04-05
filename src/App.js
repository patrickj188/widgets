import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"

const items = [
    {
        title: "what is React?",
        content: "React is a front end JS Framework"
    },
    {
        title: "why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How do you use react?",
        content: "You Use React by creating components"
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The shade of Blue',
        value: 'blue'
    }
]


export default  () => {
    const [selected, setSelected] =useState([options[0]])

    return (
        <div>
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options} 
            />

        </div>
    )

}
