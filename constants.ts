
import type { NavLink, Product, Reference, BlogPost, Partner } from './types';

export const COMPANY_INFO = {
    name: "İNTER AKDENİZ ALÜMİNYUM LTD. ŞTİ.",
    address: "Çağlayan Mahallesi Barınaklar Bulvarı Pınar Apartmanı No:99A Muratpaşa / Antalya",
    phone1: "+90 (501) 250 43 03",
    phone2: "+90 (242) 324 04 24",
    email: "info@interakdenizaluminyum.com",
    instagram: "https://www.instagram.com/interakdenizlinearossa/",
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
    { name: "Alüminyum Doğrama", description: "Yüksek yalıtım ve dayanıklılık sunan, modern mimariye uygun estetik alüminyum kapı ve pencere sistemleri.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" },
    { name: "PVC Doğrama", description: "Enerji verimliliği ve üstün ses yalıtımı sağlayan, her bütçeye uygun, uzun ömürlü PVC kapı ve pencere çözümleri.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true" },
    { name: "Cephe Giydirme", description: "Binalara estetik ve modern bir görünüm kazandıran, ısı ve su yalıtımı sağlayan, dayanıklı kompozit ve alüminyum cephe sistemleri.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { name: "Cam Balkon / Kış Bahçesi", description: "Balkonlarınızı ve teraslarınızı dört mevsim yaşanabilir alanlara dönüştüren, fonksiyonel ve şık katlanır ve sürme cam sistemleri.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" },
    { name: "Pergola / Tente", description: "Dış mekanlarınıza gölge ve konfor katan, otomatik açılır-kapanır, modern tasarımlı bioklimatik pergola ve tente sistemleri.", image: "https://github.com/xbarisx2/logo/blob/main/cam-balkon.jpg?raw=true" },
    { name: "Korkuluk", description: "Güvenliği estetikle birleştiren, paslanmaz çelik, alüminyum ve cam malzemelerden üretilmiş modern merdiven ve balkon korkulukları.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-korkuluk.jpg?raw=true" },
    { name: "Sineklik", description: "Yaz aylarında haşerelerden korunurken doğal havalandırmayı kesmeyen, pratik ve dayanıklı pileli, stor ve sabit sineklik sistemleri.", image: "https://images.unsplash.com/photo-1505926853236-14bd2390a66b?auto=format&fit=crop&w=600&q=80" },
    { name: "Panjur", description: "Güvenlik, ısı yalıtımı ve mahremiyet sağlayan, manuel veya motorlu seçenekleriyle modern ve kullanışlı alüminyum panjur sistemleri.", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9af?auto=format&fit=crop&w=600&q=80" },
];

export const LINEA_ROSSA_PRODUCTS: Product[] = [
    { name: "LR-3200 Sürme Sistemi", description: "Minimalist tasarımı ve geniş cam yüzeyleri ile modern mekanlar için ideal, yüksek performanslı sürme kapı ve pencere sistemi.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { name: "LR-2600 Kaldır-Sür Sistemi", description: "Geniş açıklıklar için mükemmel sızdırmazlık ve kullanım kolaylığı sunan, üstün yalıtımlı kaldır-sür (Hebeschiebe) sistemi.", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80" },
    { name: "LR-1150 Cephe Sistemi", description: "Binalara estetik ve prestijli bir görünüm katan, yüksek ısı ve ses yalıtımı sağlayan modern giydirme cephe sistemi.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { name: "LR-1050 Pencere ve Kapı", description: "Klasik ve modern mimariye uyum sağlayan, yüksek performanslı, ısı yalıtımlı alüminyum pencere ve kapı sistemi.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
];


export const PARTNERS: Partner[] = [
    { name: 'Linea Rossa', logo: 'https://github.com/xbarisx2/logo/blob/main/l%C4%B1nea%20rossa.jpeg?raw=true' },
    { name: 'Pimapen', logo: 'https://github.com/xbarisx2/logo/blob/main/pimapen.jpeg?raw=true' },
    { name: 'Europen', logo: 'https://github.com/xbarisx2/logo/blob/main/europen.jpeg?raw=true' },
    { name: 'Albert Genau', logo: 'https://www.albertgenau.com/upload/logo/10/logo-tr.png?13496' },
    { name: 'Schüco', logo: 'https://github.com/xbarisx2/logo/blob/main/sch%C3%BCco.jpeg?raw=true' },
];

export const REFERENCES: Reference[] = [
    { name: "BİNBİR İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/B%C4%B0NB%C4%B0R%20%C4%B0N%C5%9EAAT.jpeg?raw=true" }, 
    { name: "ERDEM PETROL İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/ERDEM%20PETROL%20%C4%B0N%C5%9EAAT.jpeg?raw=true" }, 
    { name: "SOHO İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/soho_logo_1.png?raw=true" },
    { name: "GOLDEN LIFE", logo: "https://github.com/xbarisx2/logo/blob/main/golden%20life.jpg?raw=true" },
    { name: "BİLEM OTEL", logo: "https://github.com/xbarisx2/logo/blob/main/B%C4%B0LEM%20OTEL.jpeg?raw=true" },
    { name: "BOTTEGA", logo: "https://github.com/xbarisx2/logo/blob/main/bottega.jpeg?raw=true" },
    { name: "WALKERS CAFE", logo: "https://github.com/xbarisx2/logo/blob/main/WALKERS%20CAFE.jpeg?raw=true" }, 
    { name: "OPAL YAPI A.Ş", logo: "https://github.com/xbarisx2/logo/blob/main/OPAL%20YAPI%20A.%C5%9E.jpeg?raw=true" },
    { name: "HASAN AKALIN", logo: "https://picsum.photos/seed/HASAN/240/120" }, 
    { name: "ADLIHAN DERE", logo: "https://picsum.photos/seed/ADLIHAN/240/120" }, 
    { name: "ÖZDEN GRUP İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/%C3%B6zden%20in%C5%9Faat.jpeg?raw=true" },
    { name: "AHG GRUP İNŞAAT", logo: "https://picsum.photos/seed/AHG/240/120" }, 
    { name: "HASAN ÇERÇİLER MİMARLIK", logo: "https://github.com/xbarisx2/logo/blob/main/hasan%20%C3%A7er%C3%A7iler.jpeg?raw=true" }, 
    { name: "KEMPAŞ A.Ş.", logo: "https://picsum.photos/seed/KEMPAS/240/120" },
    { name: "KÖRFEZ İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/k%C3%B6rfez.jpeg?raw=true" }, 
    { name: "SEMUS RESTORAN", logo: "https://github.com/xbarisx2/logo/blob/main/semus.jpeg?raw=true" }, 
    { name: "İLHANLAR İNŞAAT", logo: "https://file-service-pixel-bylm.aistudio.google.com/asset/93188693-820d-4c99-9289-1f146608639e" },
    { name: "KÜSTÜR MİMARLIK", logo: "https://picsum.photos/seed/KUSTUR/240/120" }, 
    { name: "İDEA MİMARLIK", logo: "https://github.com/xbarisx2/logo/blob/main/%C4%B1dea.jpeg?raw=true" }, 
    { name: "SERTSAN İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/sert%20san.jpeg?raw=true" },
    { name: "TK İNŞAAT", logo: "https://picsum.photos/seed/TKINSAAT/240/120" }, 
    { name: "CAMSAŞ A.Ş", logo: "https://github.com/xbarisx2/logo/blob/main/cam%20sa%C5%9F.jpeg?raw=true" }, 
    { name: "PILLO", logo: "https://github.com/xbarisx2/logo/blob/main/pillo.jpeg?raw=true" },
    { name: "DORUK YAPIM", logo: "https://github.com/xbarisx2/logo/blob/main/Doruk%20yap%C4%B1m.jpeg?raw=true" }, 
    { name: "ÖZAY KUYUMCULUK GRUBU", logo: "https://github.com/xbarisx2/logo/blob/main/%C3%B6zay%20kuyumculuk.jpeg?raw=true" }, 
    { name: "İHSAN ÖZKOÇ KUYUMCULUK", logo: "https://file-service-pixel-bylm.aistudio.google.com/asset/07827194-e448-4f79-a804-004808794e08" },
    { name: "KAAN ÖZKOÇ", logo: "https://github.com/xbarisx2/logo/blob/main/kaan%20%C3%B6zkoc.jpeg?raw=true" },
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
