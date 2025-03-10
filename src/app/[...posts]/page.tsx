
import {db } from "@/api/firebase-config";
import { collection, getDocs} from "firebase/firestore";

import { signOutFunC } from "@/components/auth";
import { getPosts, handleCompletion } from "@/actions";

import { PostContext } from "@/Context";



export default async function Post(){

    const postCollection = collection(db, "posts");

    const posts = await getDocs(postCollection);
    const filteredPosts = posts.docs.map((post)=>({
        id: post.id,
        ...post.data()
    }));
    

    const kickOut = () =>{
        signOutFunC();
    }

    return(
        <>
        <div className="grid h-screen grid-cols-[.2fr_1fr]">
            <section className="bg-black text-white">
                <div className="flex-1">
                <div className="mt-5">
                    <h2>Posts</h2>
                </div>
                <div className="blog-signout-wrapper">
                <a className="blog-signout-button" href="/signin">Sign Out</a>
                </div>
                </div>
            </section>
            <section className="flex flex-col h-[90%]">
                <div className="flex-1">
                    <h2>Posts</h2>
                    {filteredPosts && 
                    filteredPosts.map((showPost)=> 
                    
                    <h3 className= "p-5">{showPost.title}</h3>
                )
                    }
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