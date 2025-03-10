'use client';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const StripePromise = loadStripe(process.env.STRIPE_KEY);

const PaymentPage = () =>{
    return(
        <>
        <div>
        </div>
        </>
    )
}

export default PaymentPage;