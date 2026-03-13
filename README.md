# Mini E-Commerce React

## Deskripsi

Project ini merupakan aplikasi **Mini E-Commerce** yang dibuat menggunakan **React.js** dan **Context API** untuk mengelola state keranjang belanja (shopping cart).
Aplikasi ini memungkinkan pengguna untuk melihat katalog produk, mencari produk, melihat detail produk, serta menambahkan produk ke keranjang.

Data produk diambil dari **Fake Store API**.

---

## Fitur Aplikasi

* Menampilkan **katalog produk**
* **Search produk**
* **Product Detail Page**
* **Add to Cart**
* **Remove Item dari Cart**
* **Update Quantity (+ / -)**
* **Total harga keranjang**
* **Checkout**

---

## Teknologi yang Digunakan

* React.js
* React Router DOM
* Context API
* CSS
* Fake Store API

---

## Cara Menjalankan Project

1. Clone repository

```bash
git clone https://github.com/username/nama-repository.git
```

2. Masuk ke folder project

```bash
cd nama-repository
```

3. Install dependencies

```bash
npm install
```

4. Jalankan project

```bash
npm run dev
```

---

## Struktur Folder

```
src
│
├── assets
│
├── components
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── Loading.jsx
│   └── SearchBar.jsx      ← (Tugas)
│
├── pages
│   ├── Home.jsx
│   ├── ProductDetail.jsx  ← (Tugas)
│   └── Cart.jsx
│
├── services
│   └── api.js
│
├── context
│   └── CartContext.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

# Screenshot Aplikasi

## Home Page

Menampilkan daftar katalog produk yang diambil dari API.

![Home](https://i.ibb.co.com/LXC2Pv77/Screenshot-2.png)

---

## Product Detail Page

Menampilkan detail lengkap produk seperti gambar, deskripsi, dan harga.

![Product Detail](https://i.ibb.co.com/pHwBqbG/Screenshot-3.png)

---

## Cart Page

Menampilkan produk yang sudah ditambahkan ke keranjang serta total harga.

![Cart](https://i.ibb.co.com/Ng3YhZH5/Screenshot-4.png)

---

## Author

Nama : (Tasya Zahrani)
NPM : 2308107010006
Project : Mini E-Commerce React
