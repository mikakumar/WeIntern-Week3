"use client";

import {createContext, useState, useEffect} from "react";

import {getDoc} from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {doc} from 'firebase/firestore'; 

import {convertSubcurrency} from "@/components/subcurrency";

const PostContext = createContext();

function ContextProvider({children}){


     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const [clientSecret, setClientsecret] = useState('');

     
     const [loggedIn, setLoggedIn] = useState(false);
     const [premuser, setPremuser] = useState(false);

          useEffect(()=>{
            if(loggedIn == null){
                setLoggedIn(false);
            }
                     auth.onAuthStateChanged(async(user)=>{
                         if(user==null){
                             setLoggedIn(false);
                         }
                         else{
                         const docRef = doc(db, "users", user.uid);
                         const docSnap = await getDoc(docRef);
                         if(docSnap.exists()){
                             setLoggedIn(true);
                             setUsername(docSnap.data().name);
                             setEmail(docSnap.data().email);
                             setPassword(docSnap.data().password);
                         }
                         else{
                             setLoggedIn(false);
                         }
                     }
                     });


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
    }

    const toggleLogOut = () =>{
        setLoggedIn(false);
    }

     const togglePrem = () => {
        setPremuser(true);
     }

     

   return(
           <PostContext.Provider value={{loggedIn, toggleLogIn, toggleLogOut, premuser, togglePrem, clientSecret, username, email, password}}>
               {children}
           </PostContext.Provider>
       )
}

export {PostContext, ContextProvider};