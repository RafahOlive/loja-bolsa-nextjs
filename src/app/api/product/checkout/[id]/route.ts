import { stripe } from "../../../stripe/stripe";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: params.id,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/product",
        cancel_url: "http://localhost:3000/product",
      });
      return Response.json(session);
    } catch (err) {
      alert("Falha ao direcionar ao Checkout");
    }
  } else {
  }
}
