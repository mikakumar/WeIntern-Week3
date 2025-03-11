'use client';

import Image from "next/image";
import Link from "next/link"

import {useContext} from "react";
import { useRouter } from "next/navigation";

import { signOutFunC } from "./auth";

import Nav_icon from '../assets/ai.png';
import { PostContext } from "@/Context";

const Navbar = () =>{

    const {loggedIn} = useContext(PostContext);

    const router = useRouter();



            const kickOut = () =>{
                signOutFunC();
                router.push('/signin');
            }

    if(loggedIn){
        return(
            <>
            <div className="nav-container">
                <div>
                    <Link href="/">
                    <Image src={Nav_icon} width={60} height={60} alt='nav-logo' />
                    </Link>
                </div>
                <div className="nav-menu">
                    <ul>
                        <Link href="/posts">
                        <div className="nav-wrapper">
                        <li>Create post</li>
                        </div>
                        </Link>
                        <div className="nav-wrapper" onClick={kickOut}>
                        <li>Logout</li>
                        </div>
                    </ul>
                </div>
            </div>
            </>
        )
    }

    else{
    return(
        <>
        <div className="nav-container">
            <div>
                <Link href="/">
                <Image src={Nav_icon} width={60} height={60} alt='nav-logo' />
                </Link>
            </div>
            <div className="nav-menu">
                <ul>
                    <Link href="/signin">
                    <div className="nav-wrapper">
                    <li>Sign In</li>
                    </div>
                    </Link>
                    <Link href="/signup">
                    <div className="nav-wrapper">
                    <li>Sign Up</li>
                    </div>
                    </Link>
                </ul>
            </div>
        </div>
        </>
    )
}
}

export default Navbar;