import React from 'react'
import {useParams} from "react-router-dom"

const Determine = () => {
    const { key, color, background } = useParams()
    return (
        <div>
            {
                isNaN(key)?
                <h1 style={{color: color, backgroundColor: background}} >{"The word is: " + key}</h1>
                :
                <h1 style={{color: color, backgroundColor: background}} >{"The number is: " + key}</h1>
            }
        </div>
    )
}

export default Determine