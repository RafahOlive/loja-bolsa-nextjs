import { getServerSession } from "next-auth";
import Link from "next/link";

import { FaMagnifyingGlass, FaCartShopping, FaHeart } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import { options } from "../api/auth/[...nextauth]/options";

export default async function LightHeader() {
  const session = await getServerSession(options);
  return (
    <div className="bg-slate-50 h-14 px-6 flex justify-between items-center gap-4">
      <div className="text-slate-900 text-2xl font not-italic -tracking-wider">
        <span>V Bolsas</span>
      </div>
      <nav className="text-slate-500 flex gap-4 ">
        <Link href="/">Pagina Inicial</Link>
        <Link href="/">Explorar</Link>
        <Link href="/">Quem somos</Link>
      </nav>
      <div className="text-sky-500 flex items-center gap-4">
        <>
          {session ? (
            <>
              <span>Bem vindo</span>
              <Link href="/api/auth/signout">Sair</Link>
            </>
          ) : (
            <Link href="/login" className="flex items-center gap-1">
              <HiOutlineUser />
              <span>Login / Registrar</span>
            </Link>
          )}
        </>
        <Link href="/">
          <FaMagnifyingGlass />
        </Link>
        <Link href="/">
          <FaCartShopping />
        </Link>
        <Link href="/">
          <FaHeart />
        </Link>
      </div>
    </div>
  );
}
