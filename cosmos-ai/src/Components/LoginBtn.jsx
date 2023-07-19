import React from 'react'

export default function LoginBtn({ name, img }) {
    return (
        <div className='border rounded flex items-center gap-3 my-3 py-3 px-4 hover:cursor-pointer'>
            <img src={img} alt="" width={"25px"} />
            <h4>{name}</h4>
        </div>
    )
}
