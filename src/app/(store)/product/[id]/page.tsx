import Image from "next/image";
import { getProducts } from "../../../api/stripe/get-products";
import { z } from "zod";
import { Line } from "@/app/components/line";
import axios from "axios";


export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const gotpProduct = await getProducts();
  const id = z.string().parse(params.id);
  const product = gotpProduct.find((product) => product.id === id);

    async function handleBuyProduct() {
    try{
      const response = await axios.post('/api/checkout', {
        priceId: product?.defaultPriceId,
      })
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;

    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datado / Sentry)
      alert('Falha ao redirecinar ao checkout')
    }
  }

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
        <button
          onClick={handleBuyProduct}
          className="bg-slate-200 w-full h-12 mt-4 rounded"
        >
          COMPRAR AGORA
        </button>
      </div>
    </div>
  );
}
