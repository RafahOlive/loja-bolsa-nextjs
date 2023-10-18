import Link from "next/link";

import { FaFacebook, } from "react-icons/fa6";

export default function LightHeader() {
    return (
      <div className="bg-slate-50 h-14 px-6 flex justify-between items-center gap-4">
        <div className="text-slate-900 text-2xl font not-italic -tracking-wider">
          <span>V Bolsas</span>
        </div>
        <nav className="text-slate-500 flex gap-4 ">
            <Link href='/'>Pagina Inicial</Link>
            <Link href='/'>Explorar</Link>
            <Link href='/'>Quem somos</Link>
        </nav>
        <div className="text-sky-500 flex gap-4">
          <span>Login / Registrar</span>
          <span>Lupa</span>
          <span>carrinho</span>
          <span>FAV</span>
        </div>
      </div>
    );
}