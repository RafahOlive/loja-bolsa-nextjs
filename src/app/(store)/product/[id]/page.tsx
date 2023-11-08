import Image from "next/image";
import { getProducts, productProps } from "../../../api/stripe/get-products";
import { z } from "zod";
import { Line } from "@/app/components/line";
import BuyButton from "@/app/components/buyButton";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const gotpProduct = await getProducts();
  const id = z.string().parse(params.id);
  const product = gotpProduct.find((product) => product.id === id);

  console.log("Resposta do products", product);

  return (
    <div className="container flex gap-8 mx-auto">
      <div className="h-screen w-full border-2 border-gray-500 rounded bg-sky-300 flex justify-center items-center">
        <Image src={product!.imageUrl} width={500} height={500} alt="/" />
      </div>
      <div className="h-screen w-full border-2 border-gray-500 rounded bg-sky-300 p-4">
        <h1>{product!.name}</h1>
        <h2>Produto oficial</h2>
        <div>estrelas de avaliação</div>
        <div>Icones redondos de rede social</div>
        <Line />
        <BuyButton />
      </div>
    </div>
  );
}
