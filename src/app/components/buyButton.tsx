"use client";

import axios from "axios";
import { getProducts } from "../api/stripe/get-products";
import { z } from "zod";

export default async function BuyButton(){
  let defaultPriceId: string;
  
  const gotpProduct = await getProducts();
  const product = gotpProduct.find((product) => {product.defaultPriceId === defaultPriceId});


  async function handleBuyProduct() {
    try {
      const response = await axios.post("/api/checkout", {
        priceId: product?.defaultPriceId,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datado / Sentry)
      alert("Falha ao redirecinar ao checkout");
    }
  }

  return (
    <button
      onClick={() => handleBuyProduct}
      className="bg-slate-200 w-full h-12 mt-4 rounded"
    >
      COMPRAR AGORA
    </button>
  );
}
