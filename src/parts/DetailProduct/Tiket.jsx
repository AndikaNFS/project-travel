import React from "react";
import Map from "../../components/Map";
import "leaflet/dist/leaflet.css";

const tikets = [
  {
    name: "Start Jakarta",
    price: "2.500.000",
  },
  {
    name: "Start Jakarta",
    price: "2.500.000",
  },
  {
    name: "Start Jakarta",
    price: "2.500.000",
  },
];

const detailTikets = [
  {
    name: "Rincian Tiket",
    paragraf:
      "1 tiket untuk 1 kamar (kapasitas 5 orang), belum termasuk tiket trip Pulau Peucang",
  },
  {
    name: "Harga Termasuk",
    list: "1 kamar Cottage Fauna (kapasitas 5 orang).",
  },
  {
    name: "Harga Tidak Termasuk",
    list: "Tiket trip Pulau Peucang.",
    list2: "Kebutuhan dan obat-obatan pribadi.",
  },
  {
    name: "Ketentuan Tiket",
    list: "Minimal Pemesanan: 1 Tiket",
    list2: "Maksimum Pemesanan: 10 Tiket.",
  },
];

function Tiket() {
  return (
    <>
      <div className="mt-10">
        {/* START: PILIHAN TIKET */}
        <div className="">
          <div className="flex">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg">Pilihan Tiket</h4>
          </div>
          <div className="flex relative mt-4 ml-4">
            {tikets.map((tiket) => (
              <div
                key={tiket.name}
                className="h-24 w-52 ring-2 p-2 mr-4 relative ring-slate-300 rounded-xl  hover:shadow-lg hover:shadow-blue-500"
              >
                <span className="font-semibold">{tiket.name}</span>
                <div className="flex bg-gray-200">
                  <span className="absolute bottom-0 left-0 p-2 text-blue-500 font-semibold">
                    Rp {tiket.price}
                  </span>
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 absolute bottom-0 right-0 m-2"=
                >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* FINISH: PILIHAN TIKET */}
        {/* {detailTikets.map((detailTiket) => (
          <div key={detailTiket.name} className="">
            <div className="flex mt-12 mb-4">
              <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
              <h4 className="text-lg">{detailTiket.name}</h4>
            </div>
            <span>{detailTiket.paragraf}</span>
            <ol className="list-decimal pl-10">
              <li>{detailTiket.list}</li>
              <li>{detailTiket.list2}</li>
            </ol>
          </div>
        ))} */}

        {/* START: RINCIAN TIKET */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg">Rincian Tiket</h4>
          </div>
          <span>
            1 tiket untuk 1 kamar (kapasitas 5 orang), belum termasuk tiket trip
            Pulau Peucang
          </span>
        </div>
        {/* FINISH: RINCIAN TIKET */}

        {/* START: HARGA TERMASUK */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg">Harga Termasuk</h4>
          </div>
          <ol className="list-decimal pl-10">
            <li>
              1 tiket untuk 1 kamar (kapasitas 5 orang), belum termasuk tiket
              trip Pulau Peucang
            </li>
          </ol>
        </div>
        {/* FINISH */}

        {/* START: HARGA TIDAK TERMASUK */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg">Harga Tidak Termasuk</h4>
          </div>
          <ol className="list-decimal pl-10">
            <li>Tiket trip Pulau Peucang.</li>
            <li>Kebutuhan dan obat-obatan pribadi.</li>
          </ol>
        </div>
        {/* FINISH */}

        {/* START: KETENTUAN TIKET */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg">Ketentuan Tiket</h4>
          </div>
          <ol className="list-decimal pl-10">
            <li>Minimal Pemesanan: 1 Tiket</li>
            <li>Maksimum Pemesanan: 10 Tiket</li>
          </ol>
        </div>
        {/* FINISH */}

        {/* START: TITIK PERTEMUAN (MAPS) */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg">Titik Pertemuan</h4>
          </div>
          <div className="">
            <Map />
            <span>Alamat: Canggu, Kabupaten Badung, Bali</span>
          </div>
        </div>
        {/* FINISH */}

        {/* START: TENTANG PAKET WISATA */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg font-semibold ">Tentang Paket Wisata</h4>
          </div>
          <div className="">
            <span>
              Kamu bingung mau liburan kemana? Ikut bersama Pandooin aja ke
              pulau Peucang. Pada trip ini kami akan mengajak kamu untuk
              snorkeling, bermain di pantai, BBQ bersama, dan mendapatkan spot
              sunrise yang sangat cantik. Yuk pergi ke pulau Peucang bersama
              Pandooin!
            </span>
          </div>
        </div>
        {/* FINISH */}

        {/* START: INFORMASI TAMBAHAN */}
        <div className="">
          <div className="flex mt-12 mb-4">
            <div className="p-1.5 bg-blue-600 rounded-full mr-2"></div>
            <h4 className="text-lg font-semibold">Informasi Tambahan</h4>
          </div>
          <div className="">
            <h5 className="text-lg font-semibold mb-4">Tanggal trip 2023</h5>
            <p>Agustus: 4-6, 11-13, 18-20, dan 25-27</p>
            <p>September: 1-3, 8-10, 15-17, 22-24, dan 29-01</p>

            <h1 className="text-lg font-semibold mb-4 mt-4">Meeting Point</h1>
            <ol className="list-decimal pl-4">
              <li>
                Jakarta (Cawang) - Kebun jeruk, Slipi, Rest area karang
                tengah,Karawaci
                <li>
                  Serang - Indomaret Patung kemang/ Indomaret Ciceri Dkt
                  carefour/ Palima , Pandeglang , Menes , Labuan
                </li>
                <li>Sumur/Taman Jaya</li>
              </li>
            </ol>

            {/* START: KOUTA TRIP */}
            <div className="mt-4 mb-4">
              <h1 className="text-lg font-semibold">Kouta trip</h1>
              <span>10 Peserta</span>
            </div>
            {/* FINISH */}

            {/* START: SYARAT DAN KETENTUAN */}
            <div className="">
              <div className="mt-4 mb-4">
                <h1 className="text-lg font-semibold">Syarat dan ketentuan</h1>
                <ol className="list-decimal ml-10">
                  <li>
                    Peserta wajib bertanya ketersediaan trip ke CS Pandooin
                    (WhatsApp 0851-6300-5493) sebelum melakukan pemesanan trip.
                    <li>
                      Pemesanan dan pelunasan trip maksimal H-3 pukul 15.00 WIB
                      dari tanggal keberangkatan.
                    </li>
                    <li>
                      Peserta wajib memilih tanggal yang sesuai dengan tanggal
                      keberangkatan trip ketika melakukan pemesanan.
                    </li>
                    <li>
                      Peserta wajib mengubungi contact person trip untuk
                      konfirmasi meeting point.
                    </li>
                    <li>
                      Jadwal kegiatan yang tertulis dapat berubah sewaktu-waktu
                      serta menyesuaikan situasi dan kondisi di lapangan.
                    </li>
                    <li>
                      Jika trip tidak memenuhi kuota sampai -48 jam dari waktu
                      keberangkatan, maka Pandooin akan menghubungi peserta via
                      WhatsApp untuk proses refund 100%.
                    </li>
                    <li>
                      Pembatalan pesanan oleh peserta dilakukan maksimal -48 jam
                      dari waktu keberangkatan, setelah itu tidak ada refund.
                      Hubungi contact person trip ini jika ingin membatalkan
                      pesanan.
                    </li>
                  </li>
                </ol>
              </div>
            </div>
            {/* FINISH */}

            {/* START: CATATAN DAN TIPS */}
            <div className="mt-4 mb-4">
              <h1 className="text-lg font-semibold">Catatan dan tips</h1>
              <ol className="list-decimal ml-10">
                <li>Memakai pakaian yang nyaman dan menyerap keringat.</li>
                <li>Membawa pakaian ganti, perlengkapan mandi, dan handuk.</li>
                <li>
                  Membawa perlengkapan liburan ke pantai seperti topi, sunblock,
                  sunglasses, dll.
                </li>
                <li>Membawa air minum dan snack.</li>
              </ol>
            </div>
            {/* FINISH */}

            <div className="mt-4 mb-4">
              <h1 className="text-lg font-semibold">Informasi tambahan</h1>
              <ol className="list-decimal ml-10">
                <li>
                  Listrik hanya tersedia pada pukul 17.00 - 05.00.
                  <li>Semua jenis penginapan di Pulau Peucang non AC.</li>
                </li>
              </ol>
            </div>
            {/* FINISH */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tiket;
