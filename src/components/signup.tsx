"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {registerFunC} from '@/components/auth';

import { RiProfileLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const SignUp = () =>{

    const [tname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState('');

    const router = useRouter();


    
    const signUpFunC = () =>{
        registerFunC(tname, email, password);
        router.push('/blogs');
        
    }

    
    return(
        <>
        <div className="signup-container">
            <form action={signUpFunC}>
            <div>
            <RiProfileLine className="input-icon top-16" />
            <input type="text" placeholder="Full name"
            onChange={(e)=>setName(e.target.value)}
            className="input-box mt-7 mb-3"
            />
            </div>
            <div>
            <MdAlternateEmail className="input-icon"/>
            <input type="email" placeholder="Email"
            className="input-box mb-3"
            onChange={(e)=>setEmail(e.target.value)}
             />
             </div>
             <div>
             <FaKey className="input-icon" />
            <input type="password" placeholder="Password"
            className="input-box"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <FaEye className="password-check" />
            </div>
            <div className="button-wrapper mt-3">
                <input type="submit" className="auth-submit" value="Sign Up" />
                </div>
                </form>
        </div>
        
        </>
    )
}

export default SignUp;