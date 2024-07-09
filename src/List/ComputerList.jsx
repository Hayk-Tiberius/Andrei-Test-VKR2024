import React from "react";
import { useState, useEffect } from "react";
import data from "./citilint-data.json"
import ComputerKey from "./ComputerKey";

const filterArts = (searchText) => {
    if (!searchText) {
        return data
    }
    return data.filter(({ quantity }) =>
        quantity.toLowerCase().includes(searchText.toLowerCase())
    )
    
}


const ComputerList = () => {
    const [artList, setArtList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredArts = filterArts(searchTerm)
            setArtList(filteredArts) 
        },300)

        return () => clearTimeout(Debounce);
    }, [searchTerm]);

    return ( 
        <div className="Artists__main">  
            <div className="Button">
                <label>Количество необходимого товара </label>
                <input 
                    type="text"
                    autoComplete="off"
                    placeholder="Searching for an artist"
                    className="Artist_input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <ul>
                    <ComputerKey computerKey={artList}/>
                
                </ul>
            </div>
        </div>        
)
}

export default ComputerList