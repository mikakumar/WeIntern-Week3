'use client';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

if(process.env.STRIPE_KEY === undefined){
    throw new Error('KEY not defined');
}
const StripePromise = loadStripe(process.env.STRIPE_KEY);

const PaymentPage = () =>{

    const amount = 5.99;

    function convertToSubcurrency(amount, factor=100){
        return Math.round(amount*factor);
    }

    return(
        <>
        <div>
        <Elements 
                    stripe={StripePromise}
                    options={{
                        mode: "payment",
                        amount: convertToSubcurrency(amount),
                        currency: "usd"
                    }}
                    ></Elements>
        </div>
        </>
    )
}

export default PaymentPage;