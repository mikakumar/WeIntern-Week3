"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";



import { MdAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

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
    const [noClickPasswordVisible, setNoClickPasswordVisible] = useState(false);
    const [clickedPasswordVisible, setClickedPasswordVisible] = useState(false);

    const router = useRouter();

   
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
            <MdAlternateEmail className="input-icon"/>
            <input type="email" placeholder="Email"
            className="input-box"
            
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