import { getProduct } from "../../stripe/get-products";
import { z } from "zod";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = z.string().parse(params.id);

  const productIdResponse = await getProduct(id);

  if (!productIdResponse) {

    return Response.json({ message: "Product not found" }, { status: 400 });
  }
  return Response.json(productIdResponse);
}

