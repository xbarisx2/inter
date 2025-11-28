
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

export const HERO_SLIDES = [
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa4.jpg?raw=true",
        title: "PVC KAPI PENCERE SİSTEMLERİ",
        subtitle: "Üstün Yalıtım ve Dayanıklılık"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa1.png?raw=true",
        title: "PANJUR VE KEPENK SİSTEMLERİ",
        subtitle: "Güvenlik ve Konforun Estetik Hali"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa2.webp?raw=true",
        title: "ALÜMİNYUM MİMARİ SİSTEMLER",
        subtitle: "Modern Yapılar İçin Yenilikçi Çözümler"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa5.jpg?raw=true",
        title: "CAM BALKON SİSTEMLERİ",
        subtitle: "Manzaranızı Kesintisiz Yaşayın"
    }
];

export const NAVIGATION_LINKS: NavLink[] = [
    { name: 'Ana Sayfa' },
    { 
        name: 'Kurumsal', 
        subLinks: [
            {name: 'Hakkımızda', id: 'hakkimizda', page: 'Kurumsal'}, 
            {name: 'Vizyonumuz', id: 'vizyonumuz', page: 'Kurumsal'}, 
            {name: 'Misyonumuz', id: 'misyonumuz', page: 'Kurumsal'}
        ] 
    },
    { 
        name: 'Ürünlerimiz',
        subLinks: [
            {
                name: "Linea Rossa GRANDE Serileri",
                subLinks: [
                    { name: "Linea Rossa GLR 27 Minimal Yalıtımsız Sürme Sistemi", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 33 G-slide Sürme Sistemi", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 36 Yalıtımlı Sürme Sistemi", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR-37 Minimal Yalıtımlı Sürme Sistemi", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 50 – GLR 51 Giriş Kapısı Sistemleri", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 53 Açılır Sistem", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 63 Katlanır Kapı", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 64 Katlanır Kapı", page: "Linea Rossa" },
                    { name: "Linea Rossa GLR 95 Modüler Panel Cephe", page: "Linea Rossa" }
                ]
            },
            {
                name: "Linea Rossa Pencere ve Kapı Sistemleri",
                subLinks: [
                    { name: "LR-1050 Pencere Sistemi", page: "Linea Rossa" },
                    { name: "LR-3200 Yüksek Performans Sürme", page: "Linea Rossa" },
                    { name: "LR-2600 Kaldır-Sür (Hebeschiebe)", page: "Linea Rossa" }
                ]
            },
            {
                name: "Alüminyum Profil Katalogları",
                subLinks: [
                    { name: "Aldoks Serisi", page: "Ürünlerimiz" },
                    { name: "C60 Yalıtımlı Seri", page: "Ürünlerimiz" },
                    { name: "Cephe Sistemleri", page: "Ürünlerimiz" },
                    { name: "Ofis Bölme Sistemleri", page: "Ürünlerimiz" }
                ]
            },
            {
                name: "Solar Montaj Sistemleri",
                subLinks: [
                    { name: "Solar Konstrüksiyon", page: "Ürünlerimiz" },
                    { name: "Çatı Bağlantı Elemanları", page: "Ürünlerimiz" }
                ]
            }
        ]
    },
    { name: 'İş Ortaklarımız' },
    { name: 'Referanslarımız' },
    { name: 'Medya' },
    { name: 'Blog' },
    { name: 'İletişim' },
];

export const PRODUCTS: Product[] = [
    { name: "Aldoks Serisi", description: "Ekonomik, hafif ve geniş kullanım alanına sahip, vitrin ve kapı uygulamaları için ideal yalıtımsız doğrama sistemi.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" },
    { name: "C60 Yalıtımlı Seri", description: "Yüksek ısı ve ses yalıtımı sağlayan, enerji tasarruflu binalar için tasarlanmış polyamid bariyerli kapı ve pencere sistemi.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
    { name: "Sistem Serisi (Işıklık)", description: "Çatı ışıklıkları ve kış bahçesi tavanları için özel tasarlanmış, su tahliye kanallı ve sızdırmazlık garantili profil sistemi.", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Sürme (Sliding) Serisi", description: "Dar alanlarda maksimum kullanım sağlayan, balkon, teras ve geniş açıklıklar için geliştirilmiş sürme doğrama profilleri.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { name: "Cephe Sistemleri", description: "Silikon, kapaklı ve yarı kapaklı giydirme cephe uygulamaları için yüksek mukavemetli alüminyum profil çözümleri.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true" },
    { name: "Korkuluk ve Küpeşte", description: "Merdiven, balkon ve galeri boşlukları için kare ve yuvarlak formlarda estetik ve güvenli alüminyum korkuluk sistemleri.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-korkuluk.jpg?raw=true" },
    { name: "Cam Balkon Profilleri", description: "Katlanır ve sürme cam balkon sistemleri için tasarlanmış, hava ve su sızdırmazlığı sağlayan özel ray ve kasa profilleri.", image: "https://github.com/xbarisx2/logo/blob/main/cam-balkon.jpg?raw=true" },
    { name: "Ofis Bölme Sistemleri", description: "Modern ofisler için şeffaf, modüler ve ses yalıtımlı cam bölme duvar profilleri ve aksesuarları.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { name: "Güneş Kırıcılar", description: "Bina cephelerinde güneş kontrolü sağlayan, estetik görünümlü sabit veya hareketli alüminyum güneş kırıcı profiller.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { name: "Panjur ve Kepenk", description: "Güvenlik ve güneş kontrolü için kullanılan, motorlu ve manuel kullanıma uygun alüminyum panjur ve kepenk profilleri.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { name: "Kompozit Panel", description: "Dış cephe kaplamalarında kullanılan, yanmaz (B1/A2), uzun ömürlü ve geniş renk seçenekli alüminyum kompozit paneller.", image: "https://images.unsplash.com/photo-1460317442991-0ec2aa247f7b?auto=format&fit=crop&w=600&q=80" },
    { name: "Sineklik Profilleri", description: "Pencere ve kapı sistemlerine entegre edilebilen, pileli, menteşeli ve sabit sineklik sistemleri için alüminyum profiller.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
    { name: "Tente ve Pergola", description: "Açık alanları yaşam alanına dönüştüren, motorlu ve ışıklı biyoklimatik pergola sistem profilleri.", image: "https://images.unsplash.com/photo-1632920235889-7080927c3d79?auto=format&fit=crop&w=600&q=80" },
    { name: "Mobilya Profilleri", description: "Mutfak, banyo ve gardırop kapakları için dekoratif çerçeve ve kulp profilleri.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" },
    { name: "Menfez Profilleri", description: "Havalandırma boşlukları ve banyo kapıları için kullanılan sabit kanatlı alüminyum menfez profilleri.", image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" },
];

export const LINEA_ROSSA_PRODUCTS: Product[] = [
    { name: "LR-3200 Sürme Sistemi", description: "Minimalist tasarımı ve geniş cam yüzeyleri ile modern mekanlar için ideal, yüksek performanslı sürme kapı ve pencere sistemi.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { name: "LR-2600 Kaldır-Sür Sistemi", description: "Geniş açıklıklar için mükemmel sızdırmazlık ve kullanım kolaylığı sunan, üstün yalıtımlı kaldır-sür (Hebeschiebe) sistemi.", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80" },
    { name: "LR-1150 Cephe Sistemi", description: "Binalara estetik ve prestijli bir görünüm katan, yüksek ısı ve ses yalıtımı sağlayan modern giydirme cephe sistemi.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { name: "LR-1050 Pencere ve Kapı", description: "Klasik ve modern mimariye uyum sağlayan, yüksek performanslı, ısı yalıtımlı alüminyum pencere ve kapı sistemi.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
];


export const PARTNERS: Partner[] = [
    { name: 'Linea Rossa Milano', logo: 'https://github.com/xbarisx2/logo/blob/main/l%C4%B1nea%20rossa.jpeg?raw=true' },
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
    { name: "HASAN AKALIN", logo: "https://image.pollinations.ai/prompt/modern%20minimalist%20construction%20logo%20HASAN%20AKALIN%20blue%20white%20background" }, 
    { name: "ADLIHAN DERE", logo: "https://image.pollinations.ai/prompt/elegant%20architecture%20logo%20ADLIHAN%20DERE%20white%20background" }, 
    { name: "ÖZDEN GRUP İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/%C3%B6zden%20in%C5%9Faat.jpeg?raw=true" },
    { name: "AHG GRUP İNŞAAT", logo: "https://image.pollinations.ai/prompt/strong%20construction%20logo%20AHG%20GRUP%20white%20background" }, 
    { name: "HASAN ÇERÇİLER MİMARLIK", logo: "https://github.com/xbarisx2/logo/blob/main/hasan%20%C3%A7er%C3%A7iler.jpeg?raw=true" }, 
    { name: "KEMPAŞ A.Ş.", logo: "https://image.pollinations.ai/prompt/corporate%20company%20logo%20KEMPAS%20AS%20white%20background" },
    { name: "KÖRFEZ İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/k%C3%B6rfez.jpeg?raw=true" }, 
    { name: "SEMUS RESTORAN", logo: "https://github.com/xbarisx2/logo/blob/main/semus.jpeg?raw=true" }, 
    { name: "İLHANLAR İNŞAAT", logo: "https://image.pollinations.ai/prompt/modern%20construction%20logo%20ILHANLAR%20INSAAT%20white%20background" },
    { name: "KÜSTÜR MİMARLIK", logo: "https://image.pollinations.ai/prompt/creative%20architecture%20logo%20KUSTUR%20MIMARLIK%20white%20background" }, 
    { name: "İDEA MİMARLIK", logo: "https://github.com/xbarisx2/logo/blob/main/%C4%B1dea.jpeg?raw=true" }, 
    { name: "SERTSAN İNŞAAT", logo: "https://github.com/xbarisx2/logo/blob/main/sert%20san.jpeg?raw=true" },
    { name: "TK İNŞAAT", logo: "https://image.pollinations.ai/prompt/building%20construction%20logo%20TK%20INSAAT%20white%20background" }, 
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
        category: "Doğrama Çözümler",
        excerpt: "Bahçenizin keyfini kışın da sürmek ister misiniz? Kış bahçesi sistemleri ile doğayla iç içe, sıcak ve konforlu yaşam alanları oluşturmanın püf noktaları.",
        content: [
            { type: 'p', text: "Kış bahçeleri, evinize ekstra bir oda kazandırmanın yanı sıra, doğanın güzelliklerini yıl boyunca yaşamanıza olanak tanır. Ancak doğru bir kış bahçesi tasarımı için dikkat edilmesi gereken bazı teknik ve estetik detaylar vardır." },
            { type: 'h2', text: "Yalıtım ve Havalandırma" },
            { type: 'p', text: "Kış bahçesinin en önemli unsuru yalıtımdır. Isı yalıtımlı alüminyum profiller ve yüksek performanslı camlar kullanılarak, kışın soğuktan, yazın ise aşırı sıcaktan korunmak mümkündür. Ayrıca, terleme ve nem oluşumunu engellemek için doğru bir havalandırma sistemi şarttır. Tavanda açılır cam paneller veya yan cephelerdeki sürme sistemler, doğal hava sirkülasyonu sağlar." },
        ]
    }
];
