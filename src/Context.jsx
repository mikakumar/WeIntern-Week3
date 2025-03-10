import {createContext, useState, useEffect} from "react";

import {collection, getDoc, getDocs } from "firebase/firestore";

import { auth, db } from "@/api/firebase-config";
import {setDoc, doc} from 'firebase/firestore'; 

const postContext = createContext();

function contextProvider({children}){

     const [username, setUsername] = useState('');

    const fetchUserData = async() =>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                
            }
            }
        })
    }

    useEffect(()=>{
        fetchUserData()
    })

   return(
           <postContext.Provider value={{fetchUserData}}>
               {children}
           </postContext.Provider>
       )
}