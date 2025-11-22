"use client"
import React from 'react'
import './construction.css'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    return (
        <div className='parent'>
            Nothing to see here
            <button className='child' onClick={() => { router.push("/") }}>Go Home</button>
        </div>
    )
}

export default page