import Image from "next/image";
import Link from "next/link";
import bolsa from "../../assets/bolsa.jpg";

export default function Product() {
  return (
    <div className="flex gap-8 m-4">
      <div className="rounded bg-sky-300 px-5 py-6">Filtro</div>
      <div className="rounded bg-sky-300 px-5 py-6">
        <div className="">
          <span>Bolsas</span>
          <Link href="/">
            <Image src={bolsa} alt="/" width={500} height={500} />
            <span>Bolsa elegante</span>
            <br />
            <span>R$500,00</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
