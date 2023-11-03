import Image from "next/image";
import Logo from "../../public/example.svg";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div className="bg-sky-200 container mx-auto flex">
      <div className="flex flex-col gap-8 pt-14 pl-14">
        <h5 className="text-base">Verão 2020</h5>
        <h1 className="text-6xl">Nova coleção</h1>
        <h4>
          Nós sabemos que precisa de estilo, então clique e veja as variedades
        </h4>
        <Link href="/product">
          <button
            className="bg-sky-600 text-slate-50 rounded w-52 h-16
        text-2xl"
          >
            Compre agora!
          </button>
        </Link>
      </div>
      <div className="">
        <Image alt="logo" src={Logo} />
      </div>
    </div>
  );
}
