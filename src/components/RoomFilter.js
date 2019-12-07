import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUniue = (items, value)=>{
    return [...new Set(items.map(item=> item[value]))]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext)
    const {type, handleChange, capacity, price, minPrice, maxPrice,minSize,maxSize, breakfast, pets} = context
    let types = getUniue(rooms, "type");
    types = ["all", ...types]
    // maps to jsx
    types = types.map((item, index)=>{
        return (
            <option value={item} key={index}>
                {item}
            </option>
        )
    })
    return (
        <section className = "filter-container">
            <Title title="search rooms"/>
            <form className ="filter-form">
                {/* {select type} */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select
                            name="type"
                            id = "type"
                            value ={type}
                            className="form-control"
                            onChange={handleChange}
                            >
                                {types}
                        </select>
                    </div>
                {/* {end select type} */}
            </form>
        </section>
    )
}
