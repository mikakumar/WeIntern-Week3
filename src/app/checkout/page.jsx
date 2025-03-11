'use client';

import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import {convertSubcurrency} from "@/components/subcurrency";
import { useContext } from "react";
import { PostContext } from "@/Context";

const Checkout = () =>{

    const amount = 5.99;
    const stripePromise = loadStripe(process.env.STRIPE_KEY);

    const stripe = useStripe();
    const elements = useElements();

    const {clientSecret} = useContext(PostContext);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements)
            return;

        const submitEle = await elements.submit();
        if(!submitEle){
            return;
        }

        const confirmPay = await stripe.confirmPayment({
            elements, 
            clientSecret,
            confirmParams: {
                return_url: `http://www.localhost:3000/payment-success?amount=${amount}`
            }
        })
    }

    
    

    return(
        <>
        <div className="">
            <div></div>
        </div>
        <Elements 
        stripe={stripePromise}
        options={{
            mode: "payment",
            amount: convertSubcurrency(amount),
            currency: "usd"
        }}
        >
        <form className="bg-white p-2 rounded-md" onSubmit={handleSubmit}>
            {clientSecret && <PaymentElement />}
            <button disabled={!stripe}
            className="bg-black text-white font-bold w-full mt-3 disabled:opacity-50 rounded-md"
            >
                Pay</button>
        </form>
        </Elements>
        </>
    )
}

export default Checkout;