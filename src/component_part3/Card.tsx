import React from 'react'
import image from '../aseests/Holding_thumb-p-500.webp'

const Card = () => {
    return (
        <>
            <div className='flex flex-col mt-32'>
                <img className='w-72 rounded-lg' src={image} alt="" />
                <div className='w-72 tracking-tighter leading-5 text-start mt-12'>
                    We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                </div>
            </div>
        </>
    )
}

export default Card