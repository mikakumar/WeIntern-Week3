
import {db } from "@/api/firebase-config";
import { collection, doc, getDoc, getDocs} from "firebase/firestore";

import { signOutFunC } from "@/components/auth";
import { getPosts, handleCompletion } from "@/actions";


import Sidebar from '@/components/sidebar';



export default async function Post(){

    const postCollection = collection(db, "posts");

    const posts = await getDocs(postCollection);
    const lastPost = posts.docs[posts.docs.length-1];
    const postRef = doc(db, 'posts', lastPost.id);
    const postSnap = await getDoc(postRef);
    const postData = postSnap.data();
    
    return(
        <>
        <div className="grid h-screen grid-cols-[.2fr_1fr]">
            <section className="bg-black text-white">
            <div className="flex-1">
                <Sidebar />
            </div>
            </section>
            <section className="flex flex-col h-[90%]">
                <div className="flex-1">
                    <h2 className="text-2xl mb-2">{postData?.title}</h2>
                    <div>
                        <h2>Metadata</h2>
                        <p>{postData?.metadata}</p>
                    </div>
                    <div className="mb-2">
                        <h2>Content</h2>
                        <div dangerouslySetInnerHTML={{__html: postData?.content || ''}} />
                    </div>
                    <div>
                        <h2>Keywords</h2>
                        <p>{postData?.keywords}</p>
                    </div>
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