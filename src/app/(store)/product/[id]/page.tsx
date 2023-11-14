import Image from "next/image";
import { Line } from "@/app/components/line";
import BuyButton from "@/app/components/buyButton";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const request = await fetch(
    "http://localhost:3000/api/product/" + params.id,
    {
      method: "GET",
    }
  );

  let product = await request.json();
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
        <div>{product.price}</div>
        <Line />
        <BuyButton priceId={product.defaultPriceId} />
      </div>
    </div>
  );
}
