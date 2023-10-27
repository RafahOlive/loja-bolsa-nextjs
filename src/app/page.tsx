import Image from "next/image";
import Logo from "../../public/example.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-sky-200 flex h-screen mt-14 ml-14 mr-20 mb-14">
      <div className="flex flex-col gap-8 pt-14 pl-14">
        <h5 className="text-base">Verão 2020</h5>
        <h1 className="text-6xl">Nova coleção</h1>
        <h4>
          Nos sabemos que precisa de estilo, então clique e veja as variedades
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
      <div className="relative left-32">
        <Image alt="logo" src={Logo} />
      </div>
    </div>
  );
}
