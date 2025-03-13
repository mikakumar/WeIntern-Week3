"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {registerFunC} from '@/components/auth';

import { RiProfileLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";


const SignUp = () =>{

    const [tname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameFlip, setNameFlip] = useState(false);
    const [emailFlip, setEmailFlip] = useState(false);
    const [keyFlip, setKeyFlip] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const router = useRouter();

    const nameBlack = () =>{
        setNameFlip(false);
    }

    const nameWhite = () =>{
        setNameFlip(true);
    }


    const emailBlack = () =>{
        setEmailFlip(false);
    }

    const emailWhite = () =>{
        setEmailFlip(true);
    }

    const keyBlack = () =>{
        setKeyFlip(false);
    }

    const keyWhite = () =>{
        setKeyFlip(true);
    }

    const passwordCheck = () =>{
        setPasswordVisible(!passwordVisible);
    }



    
    const signUpFunC = () =>{
        registerFunC(tname, email, password);
        router.push('/blogs');
        
    }

    
    return(
        <>
        <div className="signup-container">
            <form action={signUpFunC}>
            <div>
            {nameFlip && <div>
                <RiProfileLine className="input-icon text-white top-16"/>
            </div> }
           {!nameFlip && <div>
            <RiProfileLine className="input-icon text-black top-16"/>
            </div>}
            <input type="text" placeholder="Full name"
            onChange={(e)=>setName(e.target.value)}
            className="input-box mt-7 mb-3" onFocus={nameBlack} onBlur={nameWhite}
            />
            </div>
            <div>
            {emailFlip && <div>
                <MdAlternateEmail className="input-icon text-white"/>
            </div> }
           {!emailFlip && <div>
            <MdAlternateEmail className="input-icon text-black"/>
            </div>}
            <input type="email" placeholder="Email"
            className="input-box mb-3" onFocus={emailBlack} onBlur={emailWhite}
            onChange={(e)=>setEmail(e.target.value)}
             />
             </div>
             <div>
             {keyFlip &&    
            <div>
             <FaKey className="input-icon text-white" />
             </div>
            }
             {!keyFlip &&    
            <div>
             <FaKey className="input-icon text-black" />
             </div>
            }
            <input type={passwordVisible ? "text" : "password"} placeholder="Password"
            className="input-box text-white focus:text-black" onFocus={keyBlack} onBlur={keyWhite}
            onChange={(e)=>setPassword(e.target.value)}
            />
             {!passwordVisible && <div className="password-check">
            {keyFlip && <div>
                <FaEye className="text-white" onClick={passwordCheck} />
                </div>}
                {!keyFlip && <div>
                <FaEye className="text-black" onClick={passwordCheck} />
                </div>}
            
            </div>}
            {passwordVisible && <div className="password-check">
                {keyFlip && <div>
                <FaEyeLowVision className="text-white" onClick={passwordCheck} />
                </div>}
                {!keyFlip && <div>
                <FaEyeLowVision className="text-black" onClick={passwordCheck} />
                </div>}
            </div>}
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