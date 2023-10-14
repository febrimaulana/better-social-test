# Mobile Test

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Structure Folder

Struktur Folder menggunakan konsep ATOMIC Design (http://bradfrost.com/blog/post/atomic-web-design/)
tetapi di sini saya haya menggunakan atoms, molecules, organisms serta pages

```src
|-- assets
| |-- icons
| |-- anything_all_asset
| |-- index.tsx
|
|-- components
| |-- atoms
| |-- molecules
| |-- organisms
| |-- index.tsx
|
|-- configs
| |-- reduxs
| |-- Routing
| |-- anything_configuration
| |-- index.tsx
|
|-- constants
| |-- anything.constants
| |-- index.tsx
|
|-- dtos
| |-- anything.dto
| |-- index.tsx
|
|-- pages
| |-- anything.page
| |-- index.tsx
|
|-- utils
| |-- anything.util
| |-- index.tsx
|
|-- App.tsx
|-- MainApp.tsx
```

# SOAL A

# Topik: Komunikasi dengan Manajer Produk.

- jika user melakukan vote secara kode nantinya akan di handle secara synchronous atau asynchronous ?
  - jika di handle secara synchronous maka aka membutuhkan action loading pada UI agar user tau kalo proses nya sedang berlangsung dan mungkin perlu snackbar error jika terjadi gagal hit ke api
  - sedangkan kalo di handle secara asynchronous maka tidak perlu action loading pada UI karena proses nya akan berjalan di background dan jika terjadi gagal hit ke api apa yang harus di lakukan karena database tidak terupdate dan secara ui sudah terupdate votenya karena action menambahkan vote nya tidak menunggu apakah api nya berhasil atau tidak

# SOAL C1

# Fitur "Orang yang Mungkin Anda Kenal" - Dokumentasi

## Deskripsi

Fitur ini bertujuan untuk memberikan rekomendasi pengguna yang mungkin dikenal oleh pengguna berdasarkan koneksi dan minat umum.

## Struktur Data

### Tabel Pengguna (`users`)

- `id`: ObjectId (PK)
- `phone`: string
- `email`: string
- `username`: string
- `fullname`: string
- `foto_profile`: string
- `user_interest_id`: array ObjectId (FK) optional default value []
- `created_at`: date
- `update_at`: date

### Tabel Pengikut Pengguna (`users_followers`)

- `id`: ObjectId (PK)
- `user_id`: ObjectId (FK)
- `user_follower_id`: ObjectId (FK)
- `created_at`: date
- `update_at`: date

### Tabel Minat Pengguna (`users_interests`)

- `id`: ObjectId (PK)
- `name`: string
- `created_at`: date
- `update_at`: date

## Mengatasi Kasus-kasus Ekstrim

### Kasus 1: Tidak Ada Pengguna yang Terkait/Terhubung

Jika tidak ada pengguna yang terkait atau terhubung, fitur ini tidak akan memberikan rekomendasi. Namun, Anda dapat mempertimbangkan:

- **Berbasis Koneksi Bersama (Mutual Connections)**: Rekomendasikan pengguna yang memiliki teman bersama. Misalnya, jika Pengguna A dan B memiliki teman bersama C, maka rekomendasikan A kepada B dan sebaliknya.
- **Profil Serupa (Similar Profiles)**: Gunakan informasi dari profil pengguna untuk menemukan pengguna dengan minat atau karakteristik serupa.
- **Aktivitas Terkini (Recent Activity)**: Jika ada data aktivitas pengguna, pertimbangkan untuk menyarankan pengguna yang baru-baru ini berinteraksi atau melakukan aktivitas yang sama.
- **Perilaku Pengguna (User Behavior)**: Analisis perilaku pengguna, seperti jenis konten yang mereka sukai atau komentar yang mereka tinggalkan, untuk menemukan kemungkinan pertemanan yang cocok.

### Kasus 2: Terlalu Banyak Pengguna yang Terkait/Terhubung

Jika terlalu banyak pengguna yang terkait, Anda dapat menerapkan strategi berikut:

- **Filter berbasis minat**: Gunakan algoritma yang mempertimbangkan minat, aktivitas, atau kesamaan lainnya untuk menyaring rekomendasi dan memprioritaskan pengguna yang maling relevan.
- **Pengurangan tingkat keterhubungan**: Batasi seberapa jauh rekomendasi dapat pergi dalam jaringan koneksi.
  - Misalnya, jika seorang pengguna memiliki ribuan koneksi, Anda dapat mempertimbangkan untuk hanya menampilkan rekomendasi dari koneksi tingkat pertama atau kedua.
- **Optimisasi Basis Data dengan Indexing**: Pastikan struktur basis data dioptimalkan dengan menggunakan indeks pada kolom yang sering digunakan dalam operasi pencarian atau penyaringan. Indeks dapat mempercepat proses akses data, terutama pada tabel besar.
  - Contoh, jika Anda sering melakukan pencarian berdasarkan minat pengguna, pertimbangkan untuk membuat indeks pada kolom `interest` di tabel `users_interests`.
- **Prioritaskan Kontak Telepon**: Jika pengguna memiliki teman yang terdaftar pada aplikasi namun belum saling mengikuti, pertimbangkan untuk menampilkan rekomendasi dari kontak telepon tersebut terlebih dahulu.
- **Pagination**: Istilahkan hasil rekomendasi teman dengan menggunakan sistem paginasi. Tampilkan sejumlah rekomendasi pada setiap halaman untuk menghindari membebani pengguna dengan terlalu banyak informasi sekaligus.
  - Contoh, Anda dapat menampilkan 10 rekomendasi teman per halaman dan berikan opsi untuk melihat halaman berikutnya.

## Pengujian Fitur

Penting untuk menguji fitur ini sebelum diterapkan secara luas. Berikut adalah beberapa strategi pengujian yang dapat Anda terapkan:

- **Uji Fungsional**: Pastikan fitur berfungsi dengan benar dan menghasilkan rekomendasi yang sesuai dengan tujuannya.

- **Uji Beban**: Simulasikan beban tinggi pada sistem untuk memastikan bahwa fitur ini dapat menangani skala besar tanpa mempengaruhi kinerja keseluruhan aplikasi.

- **Uji Kasus Ekstrem**: Uji kasus ekstrem seperti jumlah pengguna yang sangat besar atau sangat kecil.

- **Uji A/B**: Lakukan eksperimen A/B dengan sekelompok pengguna untuk membandingkan efektivitas fitur ini dengan cara lain.

- **Uji Pengguna**: Dapatkan umpan balik dari pengguna untuk memahami apakah rekomendasi yang diberikan relevan dan membantu.

- **Pemantauan Real-Time**: Pantau performa fitur secara real-time setelah diterapkan.

Dengan struktur data dan pendekatan ini, Anda dapat mengimplementasikan fitur "Orang yang Mungkin Anda Kenal" dengan efisien dan dapat diimplementasikan dalam skala besar dengan mudah. Pastikan untuk mempertimbangkan masukan pengguna dan memperbarui fitur sesuai kebutuhan dan umpan balik yang diterima dari pengguna.

# SOAL C2

# Fitur "Saran terbaik bagi pengguna" - Dokumentasi

1. **Filter Berbasis Minat:**

   - Ambil minat dari pengguna yang saat ini masuk.
   - Bandingkan minat pengguna saat ini dengan minat pengguna lain di basis data.
   - Pilih pengguna dengan minat yang paling mirip sebagai rekomendasi pertama.

2. **Prioritaskan Kontak Telepon:**

   - Periksa kontak telepon pengguna yang saat ini masuk.
   - Bandingkan nomor telepon dalam kontak dengan nomor telepon pengguna lain di basis data.
   - Pilih pengguna yang terdaftar di kontak tetapi belum diikuti sebagai rekomendasi pertama.

3. **Filter Berbasis Koneksi Bersama (Mutual Connections):**

   - Ambil daftar teman dari pengguna yang saat ini masuk.
   - Temukan teman-teman bersama dengan pengguna lain di basis data.
   - Pilih pengguna yang memiliki teman bersama sebagai rekomendasi kedua.

4. **Filter Berdasarkan Aktivitas Terkini:**

   - Jika tersedia, ambil data aktivitas terkini dari pengguna.
   - Temukan pengguna lain yang memiliki aktivitas serupa.
   - Pilih pengguna dengan aktivitas terkini yang paling mirip sebagai rekomendasi ketiga.

5. **Filter Berdasarkan Profil Serupa:**

   - Gunakan informasi dari profil pengguna saat ini.
   - Bandingkan profil pengguna saat ini dengan profil pengguna lain di basis data.
   - Pilih pengguna dengan profil serupa sebagai rekomendasi keempat.

6. **Pengurangan Tingkat Keterhubungan:**

   - Jika ada terlalu banyak rekomendasi, pertimbangkan untuk membatasi tingkat keterhubungan.
   - Misalnya, batasi rekomendasi hanya pada tingkat pertama atau kedua dari jaringan koneksi.

7. **Optimisasi Basis Data dengan Indexing:**
   - Pastikan bahwa struktur basis data dioptimalkan dengan menggunakan indeks pada kolom yang sering digunakan dalam operasi pencarian atau penyaringan.
