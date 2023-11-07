import { getProducts } from "../stripe/get-products";
import { z } from "zod";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const gotpProduct = await getProducts();

  const id = z.string().parse(params.id);

  const product = gotpProduct.find((product) => product.id === id);

  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 400 });
  }

  return Response.json(product);
}
