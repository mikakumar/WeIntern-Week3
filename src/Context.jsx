"use client";

import {createContext, useState, useEffect} from "react";

import {getDoc} from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {doc} from 'firebase/firestore'; 

import {convertSubcurrency} from "@/components/subcurrency";
import { authCheck } from "./components/auth";

const PostContext = createContext();

function ContextProvider({children}){

     const [clientSecret, setClientsecret] = useState('');

     
     const [loggedIn, setLoggedIn] = useState(false);
     const [premuser, setPremuser] = useState(false);

          useEffect(()=>{

            authCheck();

            const tlogin = localStorage.getItem('loggedIn', loggedIn);
            if(tlogin == null){
                setLoggedIn(false);
                localStorage.setItem('loggedIn', 'false');
            }
            else if(tlogin == true){
                setLoggedIn(true);
                const tname = localStorage.getItem('username', username);
                    setUsername(tname);
                    const temail = localStorage.getItem('email', email);
                    setEmail(temail);
            } 
            
            else{
                setLoggedIn(false);
                localStorage.setItem('loggedIn', false);
            }
            if(loggedIn == null){
                setLoggedIn(false);
                localStorage.setItem('loggedIn', false);
            }
                     


                     fetch("/api/checkout", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({amount: convertSubcurrency(5.99)}),
                     })
                     .then((res)=>res.json())
                     .then((data)=>setClientsecret(data.clientSecret))
                 }, []);

    const toggleLogIn = () =>{
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
    }

    const toggleLogOut = () =>{
        setLoggedIn(false);
        localStorage.setItem('loggedIn', false);
    }

     const togglePrem = () => {
        setPremuser(true);
     }

     

   return(
           <PostContext.Provider value={{loggedIn, toggleLogIn, toggleLogOut, premuser, togglePrem, clientSecret}}>
               {children}
           </PostContext.Provider>
       )
}

export {PostContext, ContextProvider};