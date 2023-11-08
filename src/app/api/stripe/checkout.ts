import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "./stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const priceId = 'price_1O8P5hFTOMjZvoW2I14QzP3c';
    const checkoutSession = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ],
        mode: 'payment',
    })

    return res.status(201).json({
        checkoutUrl: 'http://localhost:3000/'
    })
}