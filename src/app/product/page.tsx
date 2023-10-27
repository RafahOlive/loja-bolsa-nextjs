import Image from "next/image";
import Link from "next/link";
import bolsa from "../../assets/bolsa.jpeg";
import { getProducts } from "../services/get-products";

export default async function Product() {
  const products = await getProducts()
  return (
    <div className="flex gap-8 m-4">
      <div className="rounded bg-sky-300 px-5 py-6">Filtro</div>
      <div className="rounded bg-sky-300 px-5 py-6">
        <div className="">
          <span>Bolsas</span>
          {products.map((product) => {
            return (
              <Link href="/">
                <Image src={bolsa} alt="/" width={500} height={500} />
                <span>{product.name}</span>
                <br />
                <span>{product.price}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
