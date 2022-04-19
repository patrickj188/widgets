import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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




export default () => {
const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>

            <Route path='/list'>
                <Search />
            </Route>

            <Route path='/dropdown'>
                <Dropdown
                label="Select a Color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}

                />
            </Route>

            <Route path='/translate'>
                <Translate />
            </Route>

        </div>
    )

}
