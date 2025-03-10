"use server";

import { getBlogs, handleCompletion } from "@/actions";




export default async function PostDisplay(){

    const username = auth.onAuthStateChanged(async(user)=>{
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return(docSnap.data().name)
        }
    })

    const blogs = await getBlogs();
    


    return(
        <>
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
        </>
    )
}