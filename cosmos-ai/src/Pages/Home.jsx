import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='bg-gray-800 h-screen flex text-white justify-center items-center'>
            <div className=' text-center'>
                <div className='flex gap-2 justify-center m-4'>
                    <img src="https://th.bing.com/th/id/OIP.hNFHjGK5VSM-0kWkqfR4jQHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="cosmos" width={"70px"} />
                </div>
                <h2 className='my-1'>Welcome to Cosmos</h2>
                <h3 className='my-1'>Log in with your OpenAI account to continue</h3>
                <div className='flex gap-2 justify-center m-4'>
                    <button className='rounded bg-custom-green px-2 py-2 text-white  hover:bg-green-800 text-xs'><Link to={'/login'}>Log in</Link></button>
                    <button className='rounded bg-custom-green px-2 py-2 text-white  hover:bg-green-800 text-xs'><Link to={'/register'}>Sign up</Link></button>
                </div>
            </div>
        </div>
    )
}
