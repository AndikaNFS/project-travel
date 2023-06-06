import React from "react";

function DetailCheckout() {
  return (
    <div className="divide-y">
      <div className="mb-8 flex items-center">
        <img
          src="/images/img-logo-travee.png"
          alt=""
          className=" w-38 h-20 mr-7"
        />
        <div className="flex flex-col">
          <div class="flex items-center top-8 left-0 right-0 px-4 py-2 bg-white h-7 w-36 rounded-full ring-2 ring-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-5 w-5 mr-2"
            >
              <path d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72H144V56zm176 72H288V56c0-30.9-25.1-56-56-56H152C121.1 0 96 25.1 96 56v72H64c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64c0 17.7 14.3 32 32 32s32-14.3 32-32H256c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM112 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <h3 class=" text-[12px] pt-2 text-black font-bold pb-2">
              Paket Wisata
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </h3>
          </div>
          <h1 className="text-xl font-sans font-semibold">
            Additional Cottage Fauna
          </h1>
          <p className="text-gray-400">[OPEN TRIP] Pulau Peucang</p>
          <div className="flex flex-col mt-2">
            <span>Harga:</span>
            <span className=" text-blue-500">Rp 650.000/pax</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-8 mt-4">
          <span className="font-semibold">Subtotal</span>
          <div className="flex justify-between">
            <ul className="list-disc pl-5">
              <li>Paket Wisata x 1</li>
            </ul>
            <span>Rp 650.000</span>
          </div>
        </div>
        <div className="mb-4 mt-4">
          <span className="font-semibold">Tambahan</span>
          <div className="flex justify-between">
            <ul className="list-disc pl-5">
              <li>Biaya Layanan</li>
            </ul>
            <span className="text-green-400 font-sans">GRATIS</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-4 flex justify-between">
          <h4 className="">Total Pembayaran</h4>
          <span className="text-blue-500">Rp 650.000</span>
        </div>
      </div>
    </div>
  );
}

export default DetailCheckout;
