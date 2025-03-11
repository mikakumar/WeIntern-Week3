'use client';

import {useState, useEffect, useContext} from "react";
import { useRouter } from "next/navigation";

import {getDoc} from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {doc} from 'firebase/firestore'; 
import { PostContext } from "@/Context";

import { signOutFunC } from "./auth";

const Sidebar = () =>{

    const {username, toggleLogOut} = useContext(PostContext);

    const router = useRouter();
        
    const kickOut = () =>{
        signOutFunC();
        toggleLogOut();
        router.push('/signin');
    }

    return (
        <>        
                <div className="mt-5">
                    <h2>Welcome {username}</h2>
                </div>
                <div className="blog-signout-wrapper">
                <button className="blog-signout-button" onClick={kickOut}>Sign Out</button>
                </div>
        </>
    )
}

export default Sidebar;