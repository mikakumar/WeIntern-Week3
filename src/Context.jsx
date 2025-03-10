"use client";

import {createContext, useState, useEffect} from "react";

import {getDoc} from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {doc} from 'firebase/firestore'; 


const PostContext = createContext();

function ContextProvider({children}){

     const [username, setUsername] = useState('');

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setUsername(docSnap.data().name)
            }
        })
    }, [])

   return(
           <PostContext.Provider value={username}>
               {children}
           </PostContext.Provider>
       )
}

export {PostContext, ContextProvider};