'use client';

import {auth, gAuth, gitAuth, db} from '@/api/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import {setDoc, doc} from 'firebase/firestore'; 



export const signInFunC = async() =>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log('User logged in successfully!');
        } catch(err){
            console.log(`Error: ${err}`);
        }
    }

export const googleInFunC = async() =>{
        try{
            await signInWithPopup(auth, gAuth);
        } catch(err){
            console.log(`Error: ${err}`);
        }
    }

export const githubInFunC = async() =>{
        try{
            await signInWithPopup(auth, gitAuth);
        } catch(err){
            console.log(`Error: ${err}`);
        }
    }

   export const registerFunC = async(name, email, password) =>{
            try{
                await createUserWithEmailAndPassword(auth, email, password)
                const user = auth.currentUser;
                console.log(user);
                if(user){
                    await setDoc(doc(db, "users", user.uid),{
                        name: name,
                        email: email,
                        password: password
                    })
                }
                alert('User registered successfully!')
            } catch(err){
                console.log(`Error: ${err}`);
            }
        }

export const signOutFunC = async() =>{
            auth.signOut();
        }
