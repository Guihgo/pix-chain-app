import React from 'react'
import { useEffect, useState } from "react"

export default function Offline() {

    const [value, setOnline] = useState(navigator.onLine);
    
    useEffect(()=>{

    })

    return (
        <>
        <div>You are Offline!</div>
        </>
    )
}