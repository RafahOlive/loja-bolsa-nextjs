import { stripe } from "./stripe";
import Stripe from "stripe";

export interface productProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  defaultPriceId?: string;
}

export const getProducts = async (): Promise<productProps[]> => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const product = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pr-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) /100),
      defaultPriceId: price.id,
    };
  });
  return product
};
