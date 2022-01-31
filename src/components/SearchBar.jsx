import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation , Link } from 'wouter'


export default function SearchBar() {

    const [keyword, setKeyword] = useState("")
    const [path, pushLocation] = useLocation("")


    
    const handleSubmit =e=>{
        e.preventDefault()
        pushLocation(`/item/${keyword}`)
    }
    const handleChange=e=>{
        setKeyword(e.target.value)
    }

    {
    return (
    <div class="topnav">
        <a class="active" href=""><img src='https://user-images.githubusercontent.com/21125579/77843325-83920880-718b-11ea-96af-4ab797403845.png'/></a>
        <form onSubmit={handleSubmit}>
        <input type="text" value= {keyword} placeholder="Nunca dejes de buscar"  onChange={handleChange} />
        </form>
    </div>
    )
    }
}

//{event => {setSearchKeyword(event.target.value)}}

