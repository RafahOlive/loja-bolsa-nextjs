import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../services/get-products";

export default async function Product() {
  const products = await getProducts();
  return (
    <div className="container flex gap-8 mx-auto">
      <div className="h-auto w-48 rounded bg-sky-300 px-5 py-6">Filtro</div>
      <div className="h-screen w-full rounded bg-sky-300 px-5 py-6">
      <h1>Bolsas</h1>
        <div className="flex gap-3 flex-wrap">
          {products.map((product) => {
            return (
                <Link href="/" className="flex flex-col gap-1" key={product.id}>
                  <span>{product.name}</span>
                  <Image
                    src={product.imageUrl}
                    alt="/"
                    width={300}
                    height={300}
                  />
                  <span>{product.price}</span>
                </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
