import React, { useRef, useState } from "react";

function FormOrder() {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-xl font-sans font-semibold mb-6">
          Data Diri Pemesanan
        </h1>
        <form>
          <div class="inline-block relative w-64 mb-4">
            <select class="block appearance-none w-96 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Pilih Sapaan</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg> */}
            </div>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nama Lengkap"
            className="w-96 mb-4"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-96 mb-4"
          />
          <div className="flex">
            <div class="inline-block relative w-32">
              <select class="block appearance-none w-30 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>+62</option>
                <option>+63</option>
                <option>+64</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                {/* <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg> */}
              </div>
            </div>
            <input
              type="number"
              name=""
              id=""
              placeholder="No. WhatsApp"
              className="w-64"
            />
          </div>
          <div className="mt-4 flex flex-col w-96">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              className="w-96"
            ></textarea>
            <span className=" text-xs text-gray-400 flex justify-center">
              Tuliskan catatan terkait kebutuhan khusus untuk perjalananmu
            </span>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-sans font-semibold mb-6">Detail Pesanan</h1>
        <div className="">
          <span className="text-gray-500 text-lg">Tanggal Trip</span>
          <input
            type="date"
            name=""
            id=""
            onChange={handleChange}
            ref={dateInputRef}
          />
          {/* <p>Selected Date: {date}</p> */}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-sans font-semibold mb-6">
          Punya Kode Voucher?
        </h1>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Masukkan kode voucher"
            className="w-96"
          />
          <button className="w-96 rounded-full ring-1 ring-slate-300 mt-4 h-10 bg-slate-100">
            Terapkan
          </button>

          <div className="rounded-lg bg-secondary-200"></div>
        </form>
      </div>
    </div>
  );
}

export default FormOrder;
