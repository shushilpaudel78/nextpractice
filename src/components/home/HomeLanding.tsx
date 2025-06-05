'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


export const HomeLanding = () => {

    const photo = [
        '/images/cat.jpg',
        '/images/dice.jpg',
        '/images/light.jpeg',
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photo.length)

        }, 1000)


    }, [photo.length])


    return (
        <div className='w-full'>
            <div className="max-w-[1200px] m-auto">
                <h1 className='text-center font-bold text-[30px]'>Images</h1>

                <div className="w-full flex justify-center py-5">

                    <div className="w-1/2 h-[300px] relative">
                        <Image
                            className='object-cover'
                            fill
                            src={photo[currentIndex]} alt="images" />
                    </div>

                </div>

                <div className=" w-full flex gap-2 justify-center">

                    {photo.map((_, index) => (

                        <div
                            key={index}
                            className={ `w-[20px] h-[20px] rounded-full bg-red-500  ${index==currentIndex?'bg-blue-600':''}`}>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
