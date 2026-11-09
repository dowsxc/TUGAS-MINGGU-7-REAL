# KetemuKampus - Portal Lost & Found Kampus

Implementasi komponen dasar antarmuka pengguna untuk portal Lost & Found kampus menggunakan HTML, CSS, dan JavaScript murni.

## Deskripsi

KetemuKampus adalah platform untuk membantu mahasiswa melaporkan dan menemukan barang yang hilang di lingkungan kampus. Proyek ini mengimplementasikan 5 komponen dasar antarmuka:

1. **Header/Navbar** - Navigasi responsif dengan toggle menu mobile
2. **Hero Section** - Banner utama dengan pencarian dan statistik
3. **Kartu Produk** - Grid kartu barang dengan filter dan pencarian
4. **Form Login** - Formulir login dengan validasi real-time
5. **Footer** - Footer dengan navigasi dan informasi

## Struktur Proyek

```
tugas-web-komponen/
├── index.html          # Struktur HTML semantik
├── styles.css          # Styling dengan custom properties
├── script.js           # Interaktivitas JavaScript
└── README.md           # Dokumentasi proyek
```

## Fitur

### HTML
- Struktur semantik dengan tag `<header>`, `<main>`, `<section>`, `<footer>`
- Atribut ARIA untuk aksesibilitas
- Form dengan validasi HTML5

### CSS
- Custom properties (CSS variables) untuk warna dan spacing
- Grid dan Flexbox untuk layout responsif
- Mobile-first approach
- Smooth transitions dan animations
- Dukungan `prefers-reduced-motion`

### JavaScript
- Toggle menu mobile dengan animasi hamburger
- Validasi form login real-time
- Filter dan pencarian kartu produk
- Toggle password visibility
- Toast notification
- Smooth scroll navigation

## Cara Menjalankan

### Opsi 1: Langsung di Browser
1. Clone atau download repository ini
2. Buka file `index.html` di browser

### Opsi 2: Local Server (Recommended)
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js (http-server)
npx http-server -p 8000

# Menggunakan PHP
php -S localhost:8000
```

Kemudian buka `http://localhost:8000` di browser.

### Opsi 3: GitHub Pages
Repository ini dapat di-deploy langsung ke GitHub Pages:
1. Push ke repository GitHub
2. Settings → Pages → Source: main branch → Save
3. Akses di `https://username.github.io/tugas-web-komponen/`

## Komponen Detail

### 1. Header/Navbar (`#header`)
- **Lokasi**: `index.html` baris 12-37, `styles.css` baris 60-180
- **Perilaku**: Sticky di atas, responsif dengan hamburger menu di mobile
- **Keputusan desain**: Menggunakan `backdrop-filter` untuk efek blur modern

### 2. Hero Section (`#beranda`)
- **Lokasi**: `index.html` baris 41-95, `styles.css` baris 220-320
- **Perilaku**: Search bar dengan ikon, statistik dinamis
- **Keputusan desain**: Grid 2 kolom di desktop, single column di mobile

### 3. Kartu Produk (`#katalog`)
- **Lokasi**: `index.html` baris 98-248, `styles.css` baris 380-520
- **Perilaku**: Filter berdasarkan kategori, lokasi, pencarian
- **Keputusan desain**: Card-based layout dengan hover effect, empty state

### 4. Form Login (`#login`)
- **Lokasi**: `index.html` baris 251-311, `styles.css` baris 540-640
- **Perilaku**: Validasi email dan password, toggle password visibility
- **Keputusan desain**: Clean card design, error messages inline

### 5. Footer
- **Lokasi**: `index.html` baris 314-359, `styles.css` baris 660-720
- **Perilaku**: Grid 4 kolom di desktop, stack di mobile
- **Keputusan desain**: Organized links untuk navigasi dan informasi

## Interaktivitas JavaScript

| Fungsi | Deskripsi |
|--------|-----------|
| `showToast()` | Menampilkan notifikasi toast |
| `validasiLogin()` | Validasi form login |
| `filterCards()` | Filter kartu produk |
| Toggle menu | Buka/tutup menu mobile |
| Toggle password | Tampilkan/sembunyikan password |

## Aksesibilitas

- Label pada semua input form
- ARIA attributes (`aria-label`, `aria-expanded`, `aria-live`)
- Focus visible indicators
- Keyboard navigation support
- Color contrast memenuhi WCAG AA
- Dukungan `prefers-reduced-motion`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Teknologi

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- No dependencies atau framework

## Lisensi

Proyek ini dibuat untuk tujuan edukasi.
# TUGAS-MINGGU-7-REAL
