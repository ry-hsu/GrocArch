import { React, useState } from 'react'
//import data from './Components/ListData.JSON'

function List(props) {
    const data = [
        {id:1,text:"Dev"},
        {id:2,text:"Cup"},
        {id:3,text:"Boot"},
        {id:4,text:"DevOps"},
        {id:5,text:"Dynabox"}];

    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List;