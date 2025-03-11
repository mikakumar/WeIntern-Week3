
import { NextRequest, NextResponse } from "next/server";

const stripePI = require("stripe")(process.env.STRIPE_SECRET);

export async function CheckoutPOST(request: NextRequest) {
    try{
    const amount = 5.99;    

    const paymentIntent = await stripePI.paymentIntent.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: {enabled:true}
    });

    return NextResponse.json({clientSecret : paymentIntent.client_secret});

    } catch(error){
        console.log(`Error: ${error}`);
    }

}
