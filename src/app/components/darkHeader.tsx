import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function DarkHeader() {
  return (
    <div className="bg-slate-700 text-slate-50 h-14 px-6 flex justify-between items-center gap-4">
      <div className="flex gap-7">
        <span>(225) 555-0118</span>
        <span>mail@example.com</span>
      </div>
      <span>Melhor loja de bolsas</span>
      <div className="flex gap-4">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
