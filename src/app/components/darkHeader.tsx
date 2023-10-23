import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function DarkHeader() {
  return (
    <div className="bg-slate-700 text-slate-50 h-14 px-6 flex justify-between items-center gap-4">
      <div className="flex gap-7">
        <div className="flex items-center gap-1">
          <FaWhatsapp />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineMail />
          <span>mail@example.com</span>
        </div>
      </div>
      <span>Melhor loja de bolsas</span>
      <div className="flex gap-4">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
