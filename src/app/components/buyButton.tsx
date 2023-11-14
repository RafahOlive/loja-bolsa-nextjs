"use client";
export default function BuyButton({ priceId }: any) {
  async function handleBuyProduct() {
    const request = await fetch(
      "http://localhost:3000/api/product/checkout/" + priceId,
      {
        method: "POST",
      }
    );
    const response = await request.json();
    const responseUrl = response.url
    console.log(responseUrl)
    window.location.href = responseUrl
  }

  return (
    <button
      onClick={handleBuyProduct}
      className="bg-slate-200 w-full h-12 mt-4 rounded"
    >
      Checkout
    </button>
  );
}
