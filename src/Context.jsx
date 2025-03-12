"use client";

import {createContext, useState, useEffect} from "react";
import {convertSubcurrency} from "@/components/subcurrency";

const tlogin = localStorage.getItem('loggedIn');

const PostContext = createContext();

function ContextProvider({children}){

     const [clientSecret, setClientsecret] = useState('');

     
     const [loggedIn, setLoggedIn] = useState();
     const [premuser, setPremuser] = useState(false);

          useEffect(()=>{

            setLoggedIn(tlogin);
            
                if(loggedIn){
                
                if(tlogin == true){
                    setLoggedIn(true);
                    localStorage.setItem('loggedIn', loggedIn);
                } 
                
                else{
                    setLoggedIn(false);
                    localStorage.setItem('loggedIn', loggedIn);
                }
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