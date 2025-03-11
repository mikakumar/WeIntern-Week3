'use server'
import { db } from "@/api/firebase-config";
import { addDoc, collection, getDocs, query, orderBy, limit} from "firebase/firestore";
import OpenAI from "openai";


const openapi = new OpenAI({
    apiKey: process.env.OPEN_API
})

const postCollection = collection(db, "posts");

export async function handleCompletion(formData: FormData){
    const blogTopic  = formData.get('prompt') as string;
    const short_prompt = `write a short and simple blog post about ${blogTopic}`;
    const long_prompt = `write a long and detailed blog post about ${blogTopic}targeting relevant keywords. The content should be formatted in SEO-friendly HTML including a HTML title tag and meta description.
    
    The output format must be a JSON object with the following format: 
    {
        "title": title here,
        "content": blog post here,
        "metaInfo": meta description here,
        "keywords": relevant keywords here
    }`;
    // const n_prompt = `write a blog post in ${n} words or fewer about ${blogTopic}`;
    const seo_prompt = `write a long and SEO-friendly blog post about ${blogTopic}`;

    try{
        const short_query = await openapi.chat.completions.create({
            messages: [
                {role: 'system', content: 'You are a professional blog post writer'},
                {role: 'user', content: short_prompt}
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: 500
        });

        const long_query = await openapi.chat.completions.create({
            messages: [
                {role: 'system', content: 'You are a professional blog post writer'},
                {role: 'user', content: long_prompt}
            ],
            model:'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: 1000
        });

        const seo_query = await openapi.chat.completions.create({
            messages: [
                {role: 'system', content: 'You are a professional blog post writer'},
                {role: 'user', content: seo_prompt}
            ],
            model:'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: 1000
        });

        const content = seo_query.choices[0].message.content;
        if(!content){
            throw new Error("Error generating blog post")
        }
        const parsedContent = JSON.parse(content);
        const post = await addDoc(postCollection, {
           title: parsedContent.title,
           content: parsedContent.content,
           metaInfo: parsedContent.metaInfo,
           keywords: parsedContent.keywords
        });

    } catch(error){
        console.log(`Error: ${error}`);
    }  
}

export async function getPosts(){
    const data = await getDocs(postCollection);
    return data;
}