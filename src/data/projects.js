export const projects = [
  {
    slug: "klinklin-erp",
    number: "01",
    title: "Digitalisasi Operasional Layanan Kebersihan Multi-Cabang",
    client: "Klinklin Surabaya",
    context: "Fullstack Developer · Magang 3 Bulan · 2026",
    category: "Fullstack",
    description:
      "Sistem ERP terintegrasi yang menghubungkan platform mobile dan website melalui satu API terpusat, dengan alur bisnis yang dirancang khusus menyesuaikan sistem kerja operasional PT Klinklin Surabaya.",
    role: "Mengembangkan sistem secara fullstack mulai dari pembuatan REST API terpusat, membangun antarmuka website menggunakan Laravel Livewire, hingga melakukan konfigurasi VPS dan deployment sistem ke server produksi.",
    impact: [
      "Menyatukan operasional website dan aplikasi mobile ke dalam satu ekosistem ERP terintegrasi melalui API terpusat.",
      "Mengurangi waktu pengolahan data operasional harian hingga 40%.",
      "Mendeliver sistem yang stabil dan siap pakai berkat konfigurasi VPS dan proses deployment yang andal."
    ],
    tech: [
      "Laravel",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
      "REST API",
      "queue woker",
      "FCM",
      "VPS Deployment"
    ],
    image: "/projects/klin2.jpg",
    gallery: [
      "/projects/klin2.jpg",
      "/projects/klin3.jpg",
      "/projects/klin4.jpg",
    ],
    links: [{ label: "GitHub", href: "https://github.com/dhioanugrah" }],
    featured: true,
  },
  {
    slug: "warehouse-management",
    number: "02",
    title: "Sistem Pengelolaan Stok dan Produk untuk Operasional Gudang",
    client: "PT Hidrolik Indomitra Teknologi",
    context: "Project Manager & Fullstack Developer · Magang 3 Bulan · 2025",
    category: "Fullstack",
    description:
      "Merancang dan membangun Warehouse Management System (WMS) secara menyeluruh dari sisi manajerial hingga teknis untuk digitalisasi operasional gudang perusahaan.",
    role: "Project Manager & Fullstack Developer",
    impact: [
      "Sebagai Project Manager: Mengoordinasikan anggota tim untuk memenuhi target proyek serta mengatur sprint mingguan dengan pendekatan metode Waterfall.",
      "Sebagai Fullstack Developer: Membangun sistem backend dan frontend menggunakan Laravel Filament.",
      "Berhasil melakukan transisi digitalisasi untuk proses Warehouse Management perusahaan yang sebelumnya sepenuhnya masih manual."
    ],
    tech: ["Laravel", "Filament", "MySQL", "PHP", "Git"],
    image: "/projects/warehouse management/warehouse1.jpg",
    gallery: [
      "/projects/warehouse management/warehouse1.jpg",
      "/projects/warehouse management/warehouse2.jpg",
      "/projects/warehouse management/warehouse3.jpg",
      "/projects/warehouse management/warehouse4.jpg",
      "/projects/warehouse management/warehouse5.jpg",
      "/projects/warehouse management/warehouse6.jpg"
    ],
    links: [
      {
        label: "Repository GitHub",
        href: "https://github.com/dhioanugrah/final-kp",
      },
    ],
    featured: true,
  },
  {
    slug: "summit-itk",
    number: "03",
    title: "Sistem Informasi Penerimaan Mahasiswa Jalur Mandiri",
    client: "Summit ITK",
    context:
      "Backend Developer · Project Kolaboratif Bersama Dosen · 2023 — 2024",
    category: "Backend",
    description:
      "Bertanggung jawab dalam pengembangan fitur backend, integrasi sistem, dan penyempurnaan antarmuka untuk sistem penerimaan mahasiswa baru jalur mandiri (Summit ITK).",
    role: "Backend Developer (Pembuatan Logika CRUD, Algoritma UKT, dan Perbaikan UI Beranda).",
    impact: [
      "Memperbaiki dan menyempurnakan tampilan halaman beranda Summit ITK.",
      "Membuat fitur CRUD dan tampilan dashboard untuk memantau sebaran data calon mahasiswa baru di dashboard institut.",
      "Membangun algoritma dan rumus perhitungan otomatis Uang Kuliah Tunggal (UKT) yang terintegrasi di beranda."
    ],
    tech: ["Laravel", "PHP", "MySQL", "Git"],
    image: "/projects/summit1.jpg",
    gallery: [
      "/projects/summit1.jpg",
      "/projects/summit2.jpg",
      "/projects/summit3.jpg"
    ],
    links: [{ label: "Kunjungi", href: "https://summit.itk.ac.id/" }],
    featured: true,
  },
  {
    slug: "shoe-washing",
    title: "Backend Pengelolaan Pelanggan dan Pesanan Cuci Sepatu",
    client: "Shoe Washing Management System",
    context: "REST API Project · Agustus — November 2024",
    category: "Backend",
    description:
      "Membangun API untuk mengelola data pelanggan dan pesanan pada layanan cuci sepatu dengan perhatian pada konsistensi serta efisiensi pengolahan data.",
    role: "Membuat REST API, melakukan pengujian endpoint melalui Postman, serta memanfaatkan function, trigger, dan view untuk mendukung integritas database.",
    impact: [
      "Menciptakan arsitektur database yang tahan terhadap data redundan.",
      "Mengurangi waktu eksekusi query kompleks melalui implementasi view dan trigger yang efisien."
    ],
    tech: [
      "JavaScript",
      "MVC",
      "MySQL",
      "REST API",
      "Database Trigger",
      "Postman",
    ],
    image: "/projects/ERD.png",
    gallery: [
      "/projects/ERD.png"
    ],
    links: [
      {
        label: "Repository GitHub",
        href: "https://github.com/dhioanugrah/mbd/tree/main",
      },
    ],
    featured: false,
  },
  {
    slug: "botanical-garden-mobile",
    title: "Aplikasi Panduan Digital Kebun Raya Balikpapan",
    client: "Botanical Garden Journal",
    context: "Fullstack Mobile Developer · Agustus — Desember 2025",
    category: "Mobile",
    description:
      "Membangun aplikasi Flutter yang terhubung ke Laravel API untuk membantu pengunjung mengakses informasi saat berada di Kebun Raya Balikpapan.",
    role: "Pengembangan end-to-end dari perancangan API hingga implementasi mobile app menggunakan framework Flutter.",
    impact: [
      "Menyediakan panduan digital offline-first menggunakan sinkronisasi SQLite.",
      "Memudahkan akses informasi tanaman endemik secara real-time."
    ],
    tech: ["Flutter", "Dart", "Drift", "GoRoute"],
    image: "/projects/botanical-mobile.webp",
    gallery: [
      "/projects/botanical-mobile.webp"
    ],
    links: [
      {
        label: "Repository GitHub",
        href: "https://github.com/dhioanugrah/Mobile_KRB",
      },
    ],
    featured: false,
  },

  {
    slug: "kaltimfact",
    title: "KaltimFact",
    client: "PT Berkat Doa Kaltim",
    context: "Fullstack Developer · Agency Project · Juni 2025 — Sekarang",
    category: "Fullstack",
    description:
      "Membangun dan memelihara platform KaltimFact dari sisi frontend hingga backend, serta bertanggung jawab penuh atas infrastruktur server dan proses deployment.",
    role: "Pengembangan fitur secara fullstack, optimasi database, serta melakukan konfigurasi dan deployment aplikasi ke server produksi.",
    impact: [
      "Mendeliver sistem yang stabil dan dapat diandalkan dari fase pengembangan hingga peluncuran langsung (live).",
      "Menjaga uptime sistem mencapai 99.9% pasca-peluncuran dengan manajemen server yang baik."
    ],
    tech: ["Next.js", "Payload CMS", "Object Storage", "Server Deployment"],
    image: "/projects/kaltimfact1.jpg",
    gallery: [
      "/projects/kaltimfact1.jpg",
      "/projects/kaltimfact2.jpg"
    ],
    links: [{ label: "Kunjungi", href: "https://www.kaltimfact.com/" }],
    featured: false,
  },
  {
    slug: "learning-platform",
    title: "Platform E-Learning Interaktif dengan Code Compiler & Payment Gateway",
    client: "Proyek Kolaboratif Tim",
    context: "Fullstack Developer (Frontend & Backend) · Agustus — November 2024",
    category: "Fullstack",
    description:
      "Membangun platform e-learning modern secara kolaboratif tim, mencakup pengembangan sejumlah halaman frontend yang terintegrasi dengan API, serta pengembangan backend untuk modul sertifikat, kursus, kategori, kelas, dan bahasa interpreter.",
    role: "Fullstack Developer — Frontend: Membangun beberapa halaman yang terhubung langsung ke API (fetch data real-time). Backend: Mengembangkan dan mengelola modul Sertifikat, Kursus, Kategori, Kelas, dan Bahasa Interpreter termasuk desain schema Prisma dan ekspor endpoint-nya.",
    impact: [
      "Fitur Code Compiler interaktif langsung di browser untuk menjalankan kode JavaScript & Python tanpa instalasi tambahan.",
      "Sistem sertifikat digital otomatis diterbitkan saat pengguna berhasil menyelesaikan kelas.",
      "Integrasi Midtrans Payment Gateway (Virtual Account, QRIS) untuk pembelian kelas premium.",
      "Sistem multi-role (Siswa, Instruktur, Admin) dengan dashboard manajemen yang terpisah dan aman."
    ],
    tech: [
      "React 18",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "DaisyUI",
      "CodeMirror",
      "React Router DOM",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Firebase Auth",
      "Midtrans",
      "ImageKit"
    ],
    image: "/projects/elearning/elearning1.jpg",
    gallery: [
      "/projects/elearning/elearning1.jpg",
      "/projects/elearning/elearning2.jpg",
      "/projects/elearning/elearning3.jpg",
      "/projects/elearning/elearning4.jpg",
      "/projects/elearning/elearning5.jpg"
    ],
    links: [],
    featured: false,
  },
  {
    slug: "wisata-mangrove",
    title: "Website Wisata Mangrove Margomulyo",
    client: "Margomulyo Tourism",
    context: "Fullstack Developer · Maret — Juni 2025",
    category: "Fullstack",
    description:
      "Membangun website representatif untuk pihak Wisata Mangrove Margomulyo dengan sistem pengelolaan konten yang dinamis (CMS).",
    role: "Fullstack Developer (Frontend, Backend, dan Deployment Server)",
    impact: [
      "Mengembangkan website di mana seluruh konten frontend dapat dikelola secara penuh melalui dashboard admin.",
      "Bertanggung jawab atas proses konfigurasi dan deployment aplikasi ke server hingga live."
    ],
    tech: ["Laravel", "Filament", "Tailwind CSS", "Livewire"],
    image: "/projects/mangrove/mangrove1.jpg",
    gallery: [
      "/projects/mangrove/mangrove1.jpg",
      "/projects/mangrove/mangrove2.jpg",
      "/projects/mangrove/mangrove3.jpg"
    ],
    links: [
      {
        label: "Repository GitHub",
        href: "https://github.com/dhioanugrah/kkn",
      },
    ],
    featured: false,
  },
  {
    slug: "ecommerce-ai",
    number: "04",
    title: "E-Commerce Terintegrasi AI",
    client: "AI Store",
    context: "Fullstack Developer · November 2025",
    category: "Fullstack",
    description:
      "Membangun platform E-Commerce cerdas dari nol secara mandiri (Solo Developer), mencakup arsitektur backend, antarmuka frontend, hingga integrasi kecerdasan buatan (AI).",
    role: "Fullstack Developer (Frontend, Backend, & Optimasi Database)",
    impact: [
      "Mengembangkan SPA (Single Page Application) modern dan interaktif menggunakan Vue 3 (Composition API), Vite 7, Pinia 3, dan Tailwind CSS v4.",
      "Membangun RESTful API yang aman dengan Laravel 11, PHP 8.2+, otentikasi Sanctum, serta melakukan optimalisasi relasi dan kueri database pada MySQL/MariaDB.",
      "Mengintegrasikan Hugging Face Inference API (IndoBERT) untuk secara otomatis menganalisis dan mengklasifikasikan sentimen ulasan pembeli (Positif, Netral, Negatif)."
    ],
    tech: ["Vue 3", "Laravel 11", "Tailwind CSS", "Pinia", "Hugging Face AI", "MySQL"],
    image: "/projects/ecommerce ai/ecom1.jpg",
    gallery: [
      "/projects/ecommerce ai/ecom1.jpg",
      "/projects/ecommerce ai/ecom2.jpg",
      "/projects/ecommerce ai/ecom3.jpg",
      "/projects/ecommerce ai/ecom4.jpg",
      "/projects/ecommerce ai/ecom5.jpg"
    ],
    links: [
      {
        label: "Repository GitHub",
        href: "https://github.com/dhioanugrah/toko_elektronik_AI",
      },
    ],
    featured: true,
  },
];
