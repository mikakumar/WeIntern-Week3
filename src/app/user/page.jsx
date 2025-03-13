'use client';

import {useState, useEffect} from "react";
import { useRouter } from "next/navigation";

import {getDoc} from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {doc} from 'firebase/firestore'; 



import Sidebar from '@/components/sidebar';

const User = () =>{

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const router = useRouter();

    useEffect(()=>{
                auth.onAuthStateChanged(async(user)=>{
                    if(user){
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if(docSnap.exists()){
                        setUsername(docSnap.data().name);
                        setEmail(docSnap.data().email);

                    }
                }
                })
            }, []);

    const premPush = () =>{
        router.push('/checkout')
    }
    

    return(
        <>
        <div className="main-layout">
            <section className="sidebar">
            <div className="flex-1">
                <Sidebar />
            </div>
            </section>
            <section>
                <div className="user-cont">

                    <h1 className="user-details">User Details</h1>
                    <div className="mx-10 mb-10">
                    <h2>Username: {username}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Password: xx-xxxxxxxxx</h2>
                    </div>

                    <div className="prem-wrapper">
                    <button className="prem-link" onClick={premPush}>Upgrade to Premium</button>
                    
                    </div>
                   
                </div>
            </section>
            </div>
        </>
    )
}

export default User;