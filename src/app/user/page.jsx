'use client';

import {useState, useEffect} from "react";

import {getDoc} from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {doc} from 'firebase/firestore'; 



import Sidebar from '@/components/sidebar';

const User = () =>{

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
                auth.onAuthStateChanged(async(user)=>{
                    if(user){
                    const docRef = doc(db, "users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if(docSnap.exists()){
                        setUsername(docSnap.data().name);
                        setEmail(docSnap.data().email);
                        setPassword(docSnap.data().password);

                    }
                }
                })
            }, []);

   

    

    return(
        <>
        <div className="grid h-screen grid-cols-[.2fr_1fr]">
            <section className="bg-black text-white">
            <div className="flex-1">
                <Sidebar />
            </div>
            </section>
            <section className="flex flex-col h-[90%]">
                <div className="bg-black text-white h-[70vh] w-[50vw] mx-30 my-10">

                    <h1 className="text-center text-2xl mt-10 mb-20">User Details</h1>
                    <div className="mx-10">
                    <h2>Username: {username}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Password: xx-xxxxxxxxx</h2>
                    <a href="">Upgrade to Premium</a>
                    </div>
                   
                </div>
            </section>
            </div>
        </>
    )
}

export default User;