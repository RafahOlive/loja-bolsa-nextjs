import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../api/stripe/get-products";

export default async function Product() {
  const products = await getProducts();
  return (
    <div className="container flex gap-8 mx-auto">
      <div className="h-auto w-48 rounded bg-sky-300 px-5 py-6">Filtro</div>
      <div className="h-screen w-full rounded bg-sky-300 px-5 py-6">
      <h1>Bolsas</h1>
        <div className="flex gap-3 flex-wrap justify-start">
          {products.map((product) => {
            return (
                <Link href={`/product/${product.id}`} className="flex flex-col gap-1" key={product.id}>
                  <span>{product.name}</span>
                  <Image className="w-40 h-40"
                    src={product.imageUrl}
                    alt="/"
                    width={160}
                    height={160}
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
