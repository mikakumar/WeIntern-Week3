"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";



import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { signInFunC, googleInFunC, githubInFunC } from "./auth";
import { PostContext } from "@/Context";

const SignIn = () =>{

    const {toggleLogIn} = useContext(PostContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailFlip, setEmailFlip] = useState(false);
    const [keyFlip, setKeyFlip] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const router = useRouter();

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

   
    const dragIn = () =>{
        signInFunC(email, password);
        router.push('/user');
        toggleLogIn();  
    }

    
    return(
        <>
        <div className="signin-container">
            <form action={dragIn}>
            <div>
            {emailFlip && <div>
                <MdAlternateEmail className="input-icon text-white"/>
            </div> }
           {!emailFlip && <div>
            <MdAlternateEmail className="input-icon text-black"/>
            </div>}
            <input type="email" placeholder="Email" onFocus={emailBlack} onBlur={emailWhite}
            className="input-box"
            
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
            <div className="button-wrapper mt-2">
                <input type="submit" className="auth-submit" value="Sign In" />
                </div>
                </form>
        </div>

        <div>
        
        <div className="flex">
        <FaGoogle className="relative top-[3.5vh] text-black left-13 text-xl z-1"/>
        <div className="other-login-wrapper">
            <button className="google-button" onClick={googleInFunC}>Google</button>
            </div>

            <FaGithub className="relative top-[3.5vh] text-black left-4 text-xl z-1"/>
        <div className="other-login-wrapper-git">
            <button className="google-button" onClick={githubInFunC}>Github</button>
            </div>
            </div>
        </div>

        
        
        </>
    )
}

export default SignIn;