import React from 'react'

export const LoginPage = () => {
    return (
        <div className='w-full py-10'>
            <div className="max-w-[1200px] m-auto">

                <h1 className='text-center text-bold text-[30px] text-cyan-600'>Login</h1>
                <div className="flex justify-center w-full">
                    <div className="w-1/2 ">
                        <form
                            className='flex flex-col gap-3 w-full'>
                            <div className="border">
                                <input
                                    className='w-full px-2 border-none h-full outline-none'
                                    type="password" placeholder='username' />
                            </div>
                            <div className="border">
                                <input
                                    className='w-full px-2 border-none h-full outline-none'
                                    type="password" placeholder='password' />
                            </div>

                            <button className='border px-5 py-2 cursor-pointer'>Login</button>
                        </form>
                    </div>


                </div>


            </div>


        </div>
    )
}
