import type { NavLink, Product, Reference, BlogPost, Partner } from './types';

export const COMPANY_INFO = {
    name: "İNTER AKDENİZ ALÜMİNYUM LTD. ŞTİ.",
    address: "Çağlayan Mahallesi Barınaklar Bulvarı Pınar Apartmanı No:99A Muratpaşa / Antalya",
    phone1: "0501 250 43 03",
    phone2: "0242 324 04 24",
    email: "info@interakdenizaluminyum.com",
    instagram: "https://instagram.com/interakdenizaluminyum",
    whatsapp: "https://wa.me/905012504303",
};

export const NAVIGATION_LINKS: NavLink[] = [
    { name: 'Ana Sayfa' },
    { name: 'Kurumsal', subLinks: [{name: 'Hakkımızda', id: 'hakkimizda', page: 'Kurumsal'}, {name: 'Vizyonumuz', id: 'vizyonumuz', page: 'Kurumsal'}, {name: 'Misyonumuz', id: 'misyonumuz', page: 'Kurumsal'}] },
    { name: 'Ürünlerimiz', subLinks: [{name: 'Tüm Ürünlerimiz', page: 'Ürünlerimiz'}, {name: 'Linea Rossa', page: 'Linea Rossa'}] },
    { name: 'İş Ortaklarımız' },
    { name: 'Referanslarımız' },
    { name: 'Medya' },
    { name: 'Blog' },
    { name: 'İletişim' },
];

export const PRODUCTS: Product[] = [
    { name: "Alüminyum Doğrama", description: "Yüksek yalıtım ve dayanıklılık sunan, modern mimariye uygun estetik alüminyum kapı ve pencere sistemleri.", image: "https://picsum.photos/seed/aludograma/600/400" },
    { name: "PVC Doğrama", description: "Enerji verimliliği ve üstün ses yalıtımı sağlayan, her bütçeye uygun, uzun ömürlü PVC kapı ve pencere çözümleri.", image: "https://picsum.photos/seed/pvcdograma/600/400" },
    { name: "Cephe Giydirme", description: "Binalara estetik ve modern bir görünüm kazandıran, ısı ve su yalıtımı sağlayan, dayanıklı kompozit ve alüminyum cephe sistemleri.", image: "https://picsum.photos/seed/cephe/600/400" },
    { name: "Cam Balkon / Kış Bahçesi", description: "Balkonlarınızı ve teraslarınızı dört mevsim yaşanabilir alanlara dönüştüren, fonksiyonel ve şık katlanır ve sürme cam sistemleri.", image: "https://picsum.photos/seed/cambalkon/600/400" },
    { name: "Pergola / Tente", description: "Dış mekanlarınıza gölge ve konfor katan, otomatik açılır-kapanır, modern tasarımlı bioklimatik pergola ve tente sistemleri.", image: "https://picsum.photos/seed/pergola/600/400" },
    { name: "Korkuluk", description: "Güvenliği estetikle birleştiren, paslanmaz çelik, alüminyum ve cam malzemelerden üretilmiş modern merdiven ve balkon korkulukları.", image: "https://picsum.photos/seed/korkuluk/600/400" },
    { name: "Sineklik", description: "Yaz aylarında haşerelerden korunurken doğal havalandırmayı kesmeyen, pratik ve dayanıklı pileli, stor ve sabit sineklik sistemleri.", image: "https://picsum.photos/seed/sineklik/600/400" },
    { name: "Panjur", description: "Güvenlik, ısı yalıtımı ve mahremiyet sağlayan, manuel veya motorlu seçenekleriyle modern ve kullanışlı alüminyum panjur sistemleri.", image: "https://picsum.photos/seed/panjur/600/400" },
];

export const LINEA_ROSSA_PRODUCTS: Product[] = [
    { name: "LR-3200 Sürme Sistemi", description: "Minimalist tasarımı ve geniş cam yüzeyleri ile modern mekanlar için ideal, yüksek performanslı sürme kapı ve pencere sistemi.", image: "https://picsum.photos/seed/lr3200/600/400" },
    { name: "LR-2600 Kaldır-Sür Sistemi", description: "Geniş açıklıklar için mükemmel sızdırmazlık ve kullanım kolaylığı sunan, üstün yalıtımlı kaldır-sür (Hebeschiebe) sistemi.", image: "https://picsum.photos/seed/lr2600/600/400" },
    { name: "LR-1150 Cephe Sistemi", description: "Binalara estetik ve prestijli bir görünüm katan, yüksek ısı ve ses yalıtımı sağlayan modern giydirme cephe sistemi.", image: "https://picsum.photos/seed/lr1150/600/400" },
    { name: "LR-1050 Pencere ve Kapı", description: "Klasik ve modern mimariye uyum sağlayan, yüksek performanslı, ısı yalıtımlı alüminyum pencere ve kapı sistemi.", image: "https://picsum.photos/seed/lr1050/600/400" },
];


export const PARTNERS: Partner[] = [
    { name: 'Linea Rossa', logo: 'https://picsum.photos/seed/linearossa-logo/200/100' },
    { name: 'Pimapen', logo: 'https://picsum.photos/seed/pimapen-logo/200/100' },
    { name: 'Europen', logo: 'https://picsum.photos/seed/europen-logo/200/100' },
    { name: 'Albert Genau', logo: 'https://picsum.photos/seed/albertgenau-logo/200/100' },
    { name: 'Schüco', logo: 'https://picsum.photos/seed/schuco-logo/200/100' },
];

export const REFERENCES: Reference[] = [
    { name: "BİNBİR İNŞAAT", logo: "https://picsum.photos/seed/BINBIR/240/120" }, 
    { name: "ERDEM PETROL İNŞAAT", logo: "https://picsum.photos/seed/ERDEM/240/120" }, 
    { name: "SOHO İNŞAAT", logo: "https://picsum.photos/seed/SOHO/240/120" },
    { name: "BİLEM OTEL – BOTTEGA RESTAURANT & NİGHT CLUB", logo: "https://picsum.photos/seed/BILEM/240/120" }, 
    { name: "WALKERS CAFE", logo: "https://picsum.photos/seed/WALKERS/240/120" }, 
    { name: "OPAL YAPI A.Ş", logo: "https://picsum.photos/seed/OPAL/240/120" },
    { name: "HASAN AKALIN", logo: "https://picsum.photos/seed/HASAN/240/120" }, 
    { name: "ADLIHAN DERE", logo: "https://picsum.photos/seed/ADLIHAN/240/120" }, 
    { name: "ÖZDEN GRUP İNŞAAT", logo: "https://picsum.photos/seed/OZDEN/240/120" },
    { name: "AHG GRUP İNŞAAT", logo: "https://picsum.photos/seed/AHG/240/120" }, 
    { name: "ÇERÇİLER MİMARLIK", logo: "https://picsum.photos/seed/CERCILER/240/120" }, 
    { name: "KEMPAŞ A.Ş.", logo: "https://picsum.photos/seed/KEMPAS/240/120" },
    { name: "KÖRFEZ İNŞAAT", logo: "https://picsum.photos/seed/KORFEZ/240/120" }, 
    { name: "SEMUS RESTORAN", logo: "https://picsum.photos/seed/SEMUS/240/120" }, 
    { name: "İLHANLAR İNŞAAT", logo: "https://picsum.photos/seed/ILHANLAR/240/120" },
    { name: "KÜSTÜR MİMARLIK", logo: "https://picsum.photos/seed/KUSTUR/240/120" }, 
    { name: "İDEA MİMARLIK", logo: "https://picsum.photos/seed/IDEA/240/120" }, 
    { name: "SERTSAN İNŞAAT", logo: "https://picsum.photos/seed/SERTSAN/240/120" },
    { name: "TK İNŞAAT", logo: "https://picsum.photos/seed/TKINSAAT/240/120" }, 
    { name: "CAMSAŞ A.Ş", logo: "https://picsum.photos/seed/CAMSAS/240/120" }, 
    { name: "PİCCO MİMARLIK", logo: "https://picsum.photos/seed/PICCO/240/120" },
    { name: "DORUK YAPIM", logo: "https://picsum.photos/seed/DORUK/240/120" }, 
    { name: "ÖZAY KUYUMCULUK GRUBU", logo: "https://picsum.photos/seed/OZAY/240/120" }, 
    { name: "İHSAN ÖZKOÇ KUYUMCULUK", logo: "https://picsum.photos/seed/IHSAN/240/120" },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "modern-mimaride-aluminyum-cephe",
        title: "Modern Mimaride Alüminyum Cephe Sistemlerinin Yeri ve Önemi",
        author: "İnter Akdeniz Alüminyum",
        date: "24 Temmuz 2024",
        image: "https://picsum.photos/seed/blogfacade/1200/600",
        category: "Cephe Sistemleri",
        excerpt: "Günümüz mimarisi, estetik, sürdürülebilirlik ve enerji verimliliği gibi gereksinimleri ön planda tutmaktadır. Alüminyum, bu bağlamda modern cephe sistemlerinin vazgeçilmez malzemesidir.",
        content: [
            { type: 'p', text: "Günümüz mimarisi, sadece estetik kaygıları değil, aynı zamanda sürdürülebilirlik, enerji verimliliği ve dayanıklılık gibi fonksiyonel gereksinimleri de ön planda tutmaktadır. Bu bağlamda, binaların dış kabuğu olan cephe sistemleri, bir yapının karakterini belirleyen en önemli unsurlardan biri haline gelmiştir. Alüminyum, sunduğu benzersiz avantajlarla modern cephe sistemlerinin vazgeçilmez malzemesi olarak öne çıkmaktadır." },
            { type: 'h2', text: "Neden Alüminyum? Estetik ve Fonksiyonelliğin Mükemmel Uyumu" },
            { type: 'p', text: "Alüminyum, hafif olmasına rağmen son derece dayanıklı bir metaldir. Bu özelliği, binaların taşıyıcı sistemlerine ek yük getirmeden geniş ve karmaşık cephe tasarımlarının uygulanmasına olanak tanır. Aynı zamanda, korozyona karşı doğal bir dirence sahip olması, dış hava koşullarına maruz kalan cepheler için uzun ömürlü ve bakım gerektirmeyen bir çözüm sunar. Alüminyum profiller, istenilen her renkte elektrostatik toz boya veya eloksal kaplama ile kaplanabilir, bu da mimarlara sınırsız bir tasarım özgürlüğü sağlar." },
        ]
    },
    {
        slug: "pvc-vs-aluminyum-dograra",
        title: "Pencere Seçimi: PVC mi, Alüminyum Doğrama mı?",
        author: "Mimar Ahmet Yılmaz",
        date: "15 Temmuz 2024",
        image: "https://picsum.photos/seed/blogpvc/1200/600",
        // FIX: Corrected typo to match BlogCategory type.
        category: "Doğrama Çözümler",
        excerpt: "Eviniz veya projeniz için doğru pencere malzemesini seçmek, hem estetik hem de performans açısından kritik bir karardır. PVC ve alüminyum doğramanın artılarını ve eksilerini karşılaştırıyoruz.",
        content: [
            { type: 'p', text: "Pencere ve kapı doğraması seçimi, bir yapının hem görünümünü hem de yalıtım performansını doğrudan etkiler. Piyasada en yaygın iki seçenek olan PVC ve Alüminyum arasında karar vermek zor olabilir. Her iki malzemenin de kendine özgü avantajları ve dezavantajları bulunmaktadır." },
            { type: 'h2', text: "Maliyet ve Performans" },
            { type: 'p', text: "Genellikle PVC doğramalar, alüminyum doğramalara göre daha ekonomiktir. Isı yalıtımında da doğal yapısı gereği oldukça başarılıdır. Ancak alüminyum, daha yüksek statik dayanıklılığa sahip olduğu için çok geniş açıklıklarda ve yüksek katlı binalarda tercih edilir." },
        ]
    },
    {
        slug: "isi-yalitimli-cam-teknolojileri",
        title: "Isı Yalıtımlı Cam Teknolojileri ve Enerji Tasarrufu",
        author: "İnter Akdeniz Alüminyum",
        date: "02 Temmuz 2024",
        image: "https://picsum.photos/seed/blogglass/1200/600",
        category: "Teknik Bilgiler",
        excerpt: "Doğru cam seçimi, bir yapının enerji verimliliğini önemli ölçüde etkiler. Konfor E, Sinerji ve diğer ısı yalıtımlı cam teknolojilerinin avantajlarını ve çalışma prensiplerini inceliyoruz.",
        content: [
            { type: 'p', text: "Modern pencereler sadece birer açıklık değil, aynı zamanda birer teknoloji harikasıdır. Özellikle ısı yalıtımlı camlar (Isıcam), binaların enerji tüketimini azaltmada kilit bir rol oynar. Bu camlar, aralarında argon gibi yalıtkan gazlar bulunan iki veya daha fazla cam plakanın birleşiminden oluşur." },
            { type: 'h2', text: "Low-E Kaplamalar" },
            { type: 'p', text: "Low-E (düşük emisyonlu) kaplamalar, camın iç yüzeyine uygulanan mikroskobik ince metalik bir tabakadır. Bu kaplama, kışın içerideki sıcak havanın dışarı kaçmasını engellerken, yazın ise dışarıdaki sıcaklığın içeri girmesini sınırlar. Bu sayede dört mevsim konfor ve enerji tasarrufu sağlanır." },
        ]
    },
    {
        slug: "kis-bahcesi-tasarim-ipuclari",
        title: "Dört Mevsim Yaşam Alanı: Kış Bahçesi Tasarım İpuçları",
        author: "İç Mimar Zeynep Kaya",
        date: "28 Haziran 2024",
        image: "https://picsum.photos/seed/blogwintergarden/1200/600",
        category: "Genel",
        excerpt: "Kış bahçeleri, evinize doğayı taşıyan, aydınlık ve ferah alanlar yaratır. Fonksiyonel ve estetik bir kış bahçesi tasarlarken nelere dikkat etmeniz gerektiğini bu yazımızda bulabilirsiniz.",
        content: [
            { type: 'p', text: "Kış bahçesi, ev ile bahçe arasında bir geçiş alanı yaratarak doğayla iç içe, konforlu bir mekan sunar. Doğru planlama ve tasarımla, bu alanlar yılın her günü kullanılabilecek değerli bir yaşam alanına dönüşebilir." },
            { type: 'h2', text: "Malzeme ve Konumlandırma" },
            { type: 'p', text: "Kış bahçesinin iskeletinde genellikle alüminyum veya PVC gibi dayanıklı ve bakım gerektirmeyen malzemeler tercih edilir. Konumlandırma ise en önemli faktörlerden biridir. Güneş ışığından maksimum düzeyde faydalanmak için genellikle güney cephesi idealdir. Ancak kullanım amacınıza göre farklı yönler de değerlendirilebilir." },
        ]
    }
];