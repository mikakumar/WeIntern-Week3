
"use client";

import { useRouter } from "next/navigation";

import { signOutFunC } from "@/components/auth"
import { handleCompletion } from "@/actions"


export default function Postpage(){

    const router = useRouter();
    

    const kickOut = () =>{
        signOutFunC();
        router.push('/signin')
    }

    return(
        <>
        <div className="grid h-screen grid-cols-[.2fr_1fr]">
            <section className="bg-black text-white">
                <div className="flex-1">
                <div className="mt-5">
                    <h2>Welcome </h2   >
                </div>
                <div className="blog-signout-wrapper">
                <button className="blog-signout-button" onClick={kickOut} >Sign Out</button>
                </div>
                </div>
            </section>
            <section className="flex flex-col h-[90%]">
                <div className="flex-1">
                    <p>New posts</p>
                    </div>
                    <div>
                    <div className=" bg-gray-700 p-10">
                        
                        <form action={handleCompletion}>
                        <div className="flex gap-5">
                            <textarea name="prompt" id="prompt"
                            placeholder="Create post"
                            className="bg-white pl-9 pt-5 w-full resize-none rounded-md"
                            ></textarea>
                            <div className="prompt-submit-wrapper">
                            <input 
                            className="prompt-submit-button text-center"
                            type="submit" value="Submit" />
                            </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}