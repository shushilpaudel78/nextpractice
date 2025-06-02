import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='py-4 px-5'>
            <h1>hello from services Page</h1>

            <div className="flex gap-2">
                <p className=''>
                    <Link
                        className='text-red-500 '
                        href='/services/webdevelopment'
                    >web Development</Link>
                </p>
                <p className=''>
                    <Link
                        className=''
                        href='/services/appdevelopment'
                    >App Development</Link>
                </p>
            </div>


        </div>
    )
}

export default page