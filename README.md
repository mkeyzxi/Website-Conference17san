# Website Perayaan HUT RI ke-80 RT III Karema Utara

Website ini dibuat untuk menyemarakkan dan mempermudah akses informasi seputar perayaan Hari Ulang Tahun Republik Indonesia ke-80 di lingkungan RT III Karema Utara, Kecamatan Mamuju.

## Tema Acara

**"Bersatu** Berdaulat **Rakyat Sejahtera Indonesia Maju"**

## Fitur Utama

- **Countdown Timer:** Menghitung mundur menuju tanggal 17 Agustus 2025.

- **Informasi Acara:** Detail mengenai rangkaian kegiatan, jenis lomba, dan jadwal acara.

- **Pendaftaran Lomba:** Informasi mengenai pendaftaran lomba, baik individu maupun tim.

- **Informasi Panitia:** Daftar penanggung jawab acara.

- **Lokasi Acara:** Peta interaktif menggunakan Google Maps untuk mempermudah peserta menemukan lokasi.

## Teknologi yang Digunakan

- **React:** Library JavaScript untuk membangun antarmuka pengguna.

- **TypeScript:** Superset JavaScript yang menambahkan pengetesan tipe statis.

- **Vite:** Build tool modern yang sangat cepat untuk pengembangan web.

- **Tailwind CSS:** Framework CSS yang memudahkan styling.

- **Lucide React:** Koleksi ikon untuk React.

## Struktur Proyek

```
/
├── public/
│   ├── img/
│   │   ├── HUTRI80.png
│   │   └── Indonesia-flag.jpg
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Location.tsx
│   │   ├── Organizers.tsx
│   │   └── ...
│   ├── utils/
│   │   └── handleWa.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Cara Menjalankan Proyek (Lokal)

### Prerequisites

Pastikan Anda sudah menginstal **Node.js** dan **npm** atau **yarn** di komputer Anda.

### Langkah-langkah

1. **Clone repositori:**

   ```bash
   git clone [https://github.com/mkeyzxi/Website-Conference17san.git](https://github.com/mkeyzxi/Website-Conference17san.git)
   cd Website-Conference17san
   ```

2. **Instal dependensi:**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan aplikasi di mode development:**

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

   Aplikasi akan berjalan di `http://localhost:5173` (atau port lain).

## Lisensi

Proyek ini bersifat open-source dan berada di bawah lisensi MIT.
