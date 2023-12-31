import React from 'react'
import LoginBtn from '../Components/LoginBtn'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Register() {
    const [displayEmail, setDisplayEmail] = React.useState(false)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleHider = () => {
        setDisplayEmail(!displayEmail)
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let userDetails = {
            'email': email,
            'password': password
        }

        axios
            .post('http://localhost:5000/user/register', userDetails)
            .then((res) => {
                alert(res.data.message)
            })
    }


    return (
        <div className='flex justify-center text-center items-center h-screen'>
            <div className=' w-96 mt-80'>
                <h2 className=' text-4xl font-bold mb-4'>Create your account</h2>
                <p>Note that phone verification may be required for signup. Your number will only be used to verify your identity for security purposes.</p>
                {displayEmail && (<><label htmlFor="email" className=''>Email address</label><br /></>)}
                <input type="email" className='border w-full p-2 my-2' onClick={handleHider} onChange={handleEmail} value={email}/>
                <input type="password" className='border w-full p-2 my-2' onChange={handlePassword} value={password}/>
                <div className=' bg-custom-green text-white p-3 rounded my-4 hover:cursor-pointer hover:bg-green-700' onClick={handleSubmit}>Continue</div>
                <p className='m-2'>Already have an account?<span className=' text-green-500 ml-2'><Link to='/login'>Log in</Link></span></p>
                <div className="flex items-center mt-4 mb-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <LoginBtn name="Continue with Google" img="https://th.bing.com/th/id/OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></LoginBtn>
                <LoginBtn name="Continue with Microsoft Account" img="https://th.bing.com/th?q=Microsoft+Icon.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></LoginBtn>
                <LoginBtn name="Continue with Apple" img="data:image/jpeg;base64,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"></LoginBtn>
            </div>
        </div>
    )
}
