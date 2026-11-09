/**
 * KetemuKampus - Script
 * Portal Lost & Found Kampus
 * 
 * Interaktivitas:
 * - Toggle menu mobile
 * - Filter & pencarian kartu produk
 * - Toast notification
 */

// ========================================
// Utility Functions
// ========================================

/**
 * Menampilkan toast notification
 * @param {string} message - Pesan yang ditampilkan
 * @param {number} duration - Durasi tampilan dalam ms (default 3000)
 */
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// ========================================
// 1. Toggle Menu Mobile
// ========================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('open');
});

// Tutup menu saat klik link navigasi
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('open');
  });
});

// ========================================
// 2. Filter & Pencarian Kartu Produk
// ========================================

const cardsGrid = document.getElementById('cardsGrid');
const cards = document.querySelectorAll('.product-card');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const filterKategori = document.getElementById('filterKategori');
const filterLokasi = document.getElementById('filterLokasi');
const filterTanggal = document.getElementById('filterTanggal');
const btnResetFilter = document.getElementById('btnResetFilter');
const itemCount = document.getElementById('itemCount');

/**
 * Filter kartu produk berdasarkan kriteria
 */
function filterCards() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const category = filterKategori.value;
  const location = filterLokasi.value;
  
  let visibleCount = 0;
  
  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const cardCategory = card.dataset.category;
    const cardLocation = card.dataset.location;
    
    let show = true;
    
    // Filter pencarian
    if (searchTerm && !title.includes(searchTerm)) {
      show = false;
    }
    
    // Filter kategori
    if (category !== 'semua' && cardCategory !== category) {
      show = false;
    }
    
    // Filter lokasi
    if (location && cardLocation !== location) {
      show = false;
    }
    
    if (show) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });
  
  // Update jumlah item
  itemCount.textContent = visibleCount;
  
  // Tampilkan empty state jika tidak ada hasil
  if (visibleCount === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
  }
}

// Event listeners untuk filter
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  filterCards();
});

searchInput.addEventListener('input', filterCards);
filterKategori.addEventListener('change', filterCards);
filterLokasi.addEventListener('change', filterCards);
filterTanggal.addEventListener('change', filterCards);

// Reset filter
btnResetFilter.addEventListener('click', () => {
  searchInput.value = '';
  filterKategori.value = 'semua';
  filterLokasi.value = '';
  filterTanggal.value = '';
  filterCards();
  showToast('Filter berhasil direset.');
});

// ========================================
// 3. Tombol Lapor & Buat Laporan
// ========================================

const btnLapor = document.getElementById('btnLapor');
const btnBuatLaporan = document.getElementById('btnBuatLaporan');

btnLapor.addEventListener('click', () => {
  showToast('Fitur lapor barang akan segera hadir!');
});

btnBuatLaporan.addEventListener('click', () => {
  showToast('Fitur buat laporan akan segera hadir!');
});

// ========================================
// 4. Tombol "Lihat Detail" pada kartu
// ========================================

document.querySelectorAll('.product-card .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.product-card');
    const title = card.querySelector('.card-title').textContent;
    showToast(`Detail "${title}" akan segera hadir!`);
  });
});

// ========================================
// 5. Smooth scroll untuk link navigasi
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Skip jika hanya "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// 6. Tutup toast manual
// ========================================

const toastClose = document.getElementById('toastClose');
const toast = document.getElementById('toast');

toastClose.addEventListener('click', () => {
  toast.classList.remove('show');
});

// ========================================
// Inisialisasi
// ========================================

console.log('KetemuKampus initialized successfully!');
