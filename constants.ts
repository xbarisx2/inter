
import type { NavLink, Product, Reference, BlogPost, Partner, ProductSection } from './types';

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
        title: "PVC Kapı, Pencere Sistemleri",
        subtitle: "Üstün Yalıtım ve Dayanıklılık"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa1.png?raw=true",
        title: "Panjur ve Kepenk Sistemleri",
        subtitle: "Güvenlik ve Konforun Estetik Hali"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa2.webp?raw=true",
        title: "Alüminyum Mimari Sistemleri",
        subtitle: "Modern Yapılar İçin Yenilikçi Çözümler"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa5.jpg?raw=true",
        title: "Cam Balkon Sistemleri",
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
                name: "LINEA ROSSA Sistemleri",
                page: "Linea Rossa", 
                subLinks: [
                    { name: "Yalıtımlı Sürme Sistemleri", page: "Linea Rossa", id: "yalitimli-surme" },
                    { name: "Yalıtımsız Sürme Sistemleri", page: "Linea Rossa", id: "yalitimsiz-surme" },
                    { name: "Stick Cephe Sistemleri", page: "Linea Rossa", id: "stick-cephe" },
                    { name: "Panel Cephe Sistemleri", page: "Linea Rossa", id: "panel-cephe" },
                    { name: "Katlanır Kapı Sistemleri", page: "Linea Rossa", id: "katlanir-kapi" },
                    { name: "Açılır Yalıtımlı Sistemler", page: "Linea Rossa", id: "acilir-yalitimli" },
                    { name: "Açılır Yalıtımsız Sistemler", page: "Linea Rossa", id: "acilir-yalitimsiz" },
                    { name: "Zip Screen & Pergola", page: "Linea Rossa", id: "zip-pergola" }
                ]
            },
            {
                name: "Pimapen Sistemleri",
                page: "Pimapen",
                subLinks: [
                    { name: "PVC Pencere ve PVC Kapı Sistemleri", page: "Pimapen", id: "pvc-pencere-kapi" },
                    { name: "Nirvana", page: "Pimapen", id: "nirvana" },
                    { name: "Carisma", page: "Pimapen", id: "carisma" },
                    { name: "Sürgülü Kapı & Pencere Sistemleri", page: "Pimapen", id: "surgulu" },
                    { name: "Panjur & Kepenk Sistemleri", page: "Pimapen", id: "panjur-kepenk" },
                    { name: "Pencere ve Kapı Donanım Sistemleri", page: "Pimapen", id: "donanim" }
                ]
            },
            {
                name: "Alüminyum Profil Katalogları",
                page: "Alüminyum",
                subLinks: [
                    { name: "Aldoks Serisi", page: "Alüminyum", id: "aldoks" },
                    { name: "C60 Yalıtımlı Seri", page: "Alüminyum", id: "c60" },
                    { name: "Cephe Sistemleri", page: "Alüminyum", id: "cephe" },
                    { name: "Ofis Bölme Sistemleri", page: "Alüminyum", id: "ofis" }
                ]
            },
            {
                name: "Solar Montaj Sistemleri",
                page: "Solar",
                subLinks: [
                    { name: "Solar Konstrüksiyon", page: "Solar", id: "konstruksiyon" },
                    { name: "Çatı Bağlantı Elemanları", page: "Solar", id: "baglanti" }
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

export const ALUMINUM_SECTIONS: ProductSection[] = [
    {
        id: "aldoks",
        title: "Aldoks Serisi",
        items: [
            { name: "Aldoks Doğrama", description: "Ekonomik, hafif ve geniş kullanım alanına sahip, vitrin ve kapı uygulamaları için ideal yalıtımsız doğrama sistemi.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    {
        id: "c60",
        title: "C60 Yalıtımlı Seri",
        items: [
            { name: "C60 Kapı ve Pencere", description: "Yüksek ısı ve ses yalıtımı sağlayan, enerji tasarruflu binalar için tasarlanmış polyamid bariyerli kapı ve pencere sistemi.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    {
        id: "cephe",
        title: "Cephe Sistemleri",
        items: [
            { name: "Giydirme Cephe", description: "Silikon, kapaklı ve yarı kapaklı giydirme cephe uygulamaları için yüksek mukavemetli alüminyum profil çözümleri.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true" }
        ]
    },
    {
        id: "ofis",
        title: "Ofis Bölme Sistemleri",
        items: [
             { name: "Cam Bölme", description: "Modern ofisler için şeffaf, modüler ve ses yalıtımlı cam bölme duvar profilleri ve aksesuarları.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" }
        ]
    }
];

export const SOLAR_SECTIONS: ProductSection[] = [
    {
        id: "konstruksiyon",
        title: "Solar Konstrüksiyon",
        items: [
            { name: "Arazi Tipi Montaj", description: "Güneş enerjisi santralleri için dayanıklı ve hızlı monte edilebilen arazi tipi konstrüksiyon sistemleri.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80" },
            { name: "Çatı Tipi Montaj", description: "Eğimli ve düz çatılar için özel tasarlanmış, sızdırmazlık garantili solar montaj profilleri.", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    {
        id: "baglanti",
        title: "Çatı Bağlantı Elemanları",
        items: [
            { name: "Kanca ve Klipsler", description: "Farklı kiremit ve çatı tiplerine uygun paslanmaz çelik bağlantı kancaları ve panel tutucu klipsler.", image: "https://images.unsplash.com/photo-1621905252507-b355f6a38029?auto=format&fit=crop&w=600&q=80" }
        ]
    }
];

export const LINEA_ROSSA_SECTIONS: ProductSection[] = [
    {
        id: "yalitimli-surme",
        title: "Yalıtımlı Sürme Sistemleri",
        items: [
            { 
                name: "LR-3100 - Linea Rossa", 
                description: "Yalıtımlı Sürme Sistemi: Yüksek ısı bariyerli, modern mimari için ideal sürme sistemi.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3100.webp",
                technicalDetails: {
                    features: [
                        "Daha İyi Su, Hava Yalıtımı ve Enerji Tasarrufu",
                        "Üretim ve Montaj Kolaylığı",
                        "%50 Azaltılmış Orta Kenet ile Minimal Mimari Çözüm",
                        "Sistem İçinde Çözülmüş Özel Sineklik Tasarımı",
                        "Projeye Uygun Özel Tasarım ve Seçenekleri",
                        "Paslanmaz Çelik Ray ve Bu Ray Üzerinde Hareket Eden Özel Rulmanlarla Yüksek Dayanım ve Kullanım Konforu",
                        "Özel Dizayn Edilmiş ve Yüksek Dayanımlı Çok Noktadan Kilitleme Sistemi",
                        "Polyamit Profillerle Boşluksuz Orta Kenet Detayı",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "32 mm" },
                        { label: "Kanat Yüksekliği", value: "75 mm" },
                        { label: "Kasa Yüksekliği", value: "44 mm" },
                        { label: "Kenetli Orta Kanat Genişliği", value: "34 – 78,5 mm" },
                        { label: "Cam Kalınlığı", value: "20 – 22 mm" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "120 kg" },
                        { label: "Yalıtım Köprüsü", value: "20 mm" },
                        { label: "Isı Yalıtımı EN ISO 10077-2", value: "Uf=3,8 W/m2K" }
                    ]
                }
            },
            { 
                name: "LR-3200 - Linea Rossa", 
                description: "Yalıtımlı Sürme Sistemi: Geniş açıklıklar için tasarlanmış yüksek performanslı seri. Modern mimaride; İtalyan tarzını harmanlayarak tasarlanan, aksesuar özellikleri ile ön planda tutulan LR 3200 ile tanışmaya hazır olun.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3200.webp",
                technicalDetails: {
                    features: [
                        "Daha İyi Su, Hava Yalıtımı ve Enerji Tasarrufu",
                        "Üretim ve Montaj Kolaylığı",
                        "Kolay ve Yumuşak Bir Sürme İçin Özel Çelik Ray ve Rulman Sıfıra Yakın Sürtünme",
                        "Ağır Yük Taşımaya Müsait Rulmanlar",
                        "Kilit Karşılığı Sürme Kasanın İçine Monte Edilebilen Tekli veya Çoklu Kilit Uygulanabilirliği",
                        "Özel Takozu Sayesinde Daha Mukavemetli Toplama Olanağı",
                        "Sistem İçinde Çözülmüş Özel Sineklik Tasarımı",
                        "Projeye Uygun Özel Tasarım ve Seçenekleri",
                        "Paslanmaz Çelik Ray ve Bu Ray Üzerinde Hareket Eden Özel Rulmanlarla Yüksek Dayanım ve Kullanım Konforu",
                        "Özel Dizayn Edilmiş ve Yüksek Dayanımlı Çok Noktadan Kilitleme Sistemi",
                        "Polyamit Profillerle Boşluksuz Orta Kenet Detayı",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "38 mm" },
                        { label: "Kanat Yüksekliği", value: "92,5 mm" },
                        { label: "Profil Et Kalınlığı", value: "1,3 - 1,8 mm" },
                        { label: "Cam Kalınlığı", value: "20 – 26 mm" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "120 kg" },
                        { label: "Profil Geometrik Düzgünlük", value: "EN ISO 12020-2 Compliant" }
                    ]
                }
            },
            { 
                name: "LR-3300 - Linea Rossa", 
                description: "Yalıtımlı Sürme Sistemi: Yalıtım ve sızdırmazlık problemini tamamen ortadan kaldıran bir sistem. Alüminyumun güç ile mükemmel birleşimi sizlere geniş açıklıklar ve ferah mekanlar sunuluyor.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3300.webp",
                technicalDetails: {
                    features: [
                        "Daha İyi Su, Hava Yalıtımı ve Enerji Tasarrufu",
                        "Daha Geniş ve Daha Yüksek Sürmeler",
                        "Dekoratif ve Yenilikçi Görsel Tasarım",
                        "Kullanım Kolaylığı",
                        "Sorunsuz, Basit Mekanik Çözümler",
                        "Sürme Doğramanın Rahatlığı ile Menteşeli Doğramanın Yalıtım Performansını Bir Arada Çözen Mükemmel Endüstriyel Tasarım",
                        "Yüksek Korozyon ve \"ultraviyole\" dayanımı",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "74 mm" },
                        { label: "Kanat Yüksekliği", value: "77 mm" },
                        { label: "Kasa Yüksekliği", value: "44 mm" },
                        { label: "Kenetli Orta Kanat Genişliği", value: "84 mm" },
                        { label: "Cam Kalınlığı", value: "24-30 mm" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "250 kg" },
                        { label: "Yalıtım Köprüsü", value: "20 mm" }
                    ]
                }
            },
            { 
                name: "LR-3400 - Linea Rossa", 
                description: "Yalıtımlı Sürme Sistemi: Mükemmel hava ve su sızdırmazlığı iddiamızda gerçekçiyiz. Zorlu iklim koşulları ile mücadele etmek isteyen bir ruh var.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3400.webp",
                technicalDetails: {
                    features: [
                        "Kaldır-Sür ve Normal Sürme Yapma İmkanı",
                        "300 kg Taşıma Kapasitesi",
                        "90° Kesim Kasa Profili, 45° Kesimli Kanat Profili",
                        "Çok Noktadan Kilitleme",
                        "Mükemmel Hava ve Su Sızdırmazlığı (Hava Yalıtımı: A4, Su Yalıtımı: 1050Pa)",
                        "Merkezde Bulunan Trex Aparatı Sayesinde Tüm Kasa Boyunca Mükemmel Su Tahliye Performansı ve Isı Yalıtımı (Uw:1,5 w/m² K)"
                    ],
                    specifications: [
                        { label: "Kasa Genişliği", value: "106 mm" },
                        { label: "Kasa Yüksekliği", value: "50,5 mm" },
                        { label: "Kanat Genişliği", value: "45 mm" },
                        { label: "Orta Dikme Genişliği", value: "86/106 mm" }
                    ]
                }
            },
            { 
                name: "LR-3500 - Linea Rossa", 
                description: "Yalıtımlı Sürme Sistemi: O bir efsane. Her zaman lider kaldır Sür Sistem'de iddiası çok yükseklere, 400 kg'lık camlar bize hafif olduğunu fısıldıyor.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3500.webp",
                technicalDetails: {
                    features: [
                        "Daha İyi Su, Hava Yalıtımı ve Enerji Tasarrufu",
                        "Üretim ve Montaj Kolaylığı",
                        "HBSB Mekanizma ile 250 kg Kanat Taşıma Kapasitesi",
                        "Projeye Uygun Özel Tasarım ve Seçenekleri",
                        "Paslanmaz Çelik Ray ve Bu Ray Üzerinde Hareket Eden Özel Rulmanlarla Yüksek Dayanım ve Kullanım Konforu",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "57 mm" },
                        { label: "Kanat Yüksekliği", value: "92,5 mm" },
                        { label: "Kasa Yüksekliği", value: "45 mm" },
                        { label: "Cam Kalınlığı", value: "28 mm" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "250 kg" },
                        { label: "Yalıtım Köprüsü", value: "24 mm" }
                    ]
                }
            },
            { 
                name: "LR-3700 - Linea Rossa", 
                description: "Yalıtımlı Sürme Sistemi: Minimal Sürme Sistemleri'nde gelişen teknolojiden korkmayarak tasarlandı. Referans projelerde Profesyonellikle uygulandı.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3700.webp",
                technicalDetails: {
                    features: [
                        "Üst ve Alt Kilitleme Sistemi Sayesinde Güvenlik Ön Plana Alınmıştır.",
                        "Kasa ve Kanat Profilinin Duvar İçine Gömülmesi Sayesinde Dış Ortamın Manzarasının Evinizin İçindeyken Bile Hissetmenizi Sağlamaktadır.",
                        "Her Kanatta Çift Yönde Bulunan Rulmanlar Sayesinde 800kg Kanat Taşıma Kapasitesi",
                        "Üç Cam Uygulama İmkanı",
                        "Yüksek Isı ve Ses Performansı"
                    ],
                    specifications: [
                        { label: "Kasa Genişliği", value: "129 mm" },
                        { label: "Kasa Yüksekliği", value: "50 mm" },
                        { label: "Kanat Genişliği", value: "42 mm" },
                        { label: "Orta Dikme Genişliği", value: "23 mm" }
                    ]
                }
            },
        ]
    },
    {
        id: "yalitimsiz-surme",
        title: "Yalıtımsız Sürme Sistemleri",
        items: [
            { 
                name: "LR-2100 - Linea Rossa", 
                description: "Yalıtımsız Sürme Sistemi: Ekonomik ve fonksiyonel, iç mekan ve balkon kapatmaları için ideal.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-2100.webp",
                technicalDetails: {
                    features: [
                        "Geniş Profil Seçenekleri ile Optimum Çözümler",
                        "Sistem İçinde Çözülmüş Özel Sineklik Tasarımı",
                        "Üretim ve Montaj Kolaylığı",
                        "%50 Azaltılmış Orta Kenet ile Minimal Mimari Çözüm",
                        "Projeye Uygun Özel Tasarım ve Seçenekleri",
                        "Paslanmaz Çelik Ray ve Bu Ray Üzerinde Hareket Eden Özel Rulmanlarla Yüksek Dayanım ve Kullanım Konforu",
                        "Özel Dizayn Edilmiş ve Yüksek Dayanımlı Çok Noktadan Kilitleme Sistemi",
                        "Polyamit Profillerle Boşluksuz Orta Kenet Detayı",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "32 mm" },
                        { label: "Kanat Yüksekliği", value: "75 mm" },
                        { label: "Kasa Yüksekliği", value: "44 mm" },
                        { label: "Kenetli Orta Kanat Genişliği", value: "34 - 78,5 mm" },
                        { label: "Cam Kalınlığı", value: "20 - 22 mm" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "120 kg" }
                    ]
                }
            },
            { 
                name: "LR-2200 - Linea Rossa", 
                description: "Yalıtımsız Sürme Sistemi: Pratik kullanım ve kolay montaj sağlayan sürme serisi.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-2200.webp",
                technicalDetails: {
                     features: [
                        "Üretim ve Montaj Kolaylığı",
                        "Kolay ve Yumuşak Bir Sürme İçin Özel Çelik Ray ve Rulman Sıfıra Yakın Sürtünme",
                        "Ağır Yük Taşımaya Müsait Rulmanlar",
                        "Kilit Karşılığı Sürme Kasanın İçine Monte Edilebilen Tekli veya Çoklu Kilit Uygulanabilirliği",
                        "Özel Takozu Sayesinde Daha Mukavemetli Toplama Olanağı",
                        "Sistem İçinde Çözülmüş Özel Sineklik Tasarımı",
                        "Projeye Uygun Özel Tasarım ve Seçenekleri",
                        "Paslanmaz Çelik Ray ve Bu Ray Üzerinde Hareket Eden Özel Rulmanlarla Yüksek Dayanım ve Kullanım Konforu",
                        "Özel Dizayn Edilmiş ve Yüksek Dayanımlı Çok Noktadan Kilitleme Sistemi",
                        "Polyamit Profillerle Boşluksuz Orta Kenet Detayı",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "38 mm" },
                        { label: "Kanat Yüksekliği", value: "92,5 mm" },
                        { label: "Profil Et Kalınlığı", value: "1,3 - 1,8 mm" },
                        { label: "Cam Kalınlığı", value: "20 – 26 mm" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "120 kg" },
                        { label: "Profil Geometrik Düzgünlük", value: "EN ISO 12020-2 Compliant" }
                    ]
                }
            },
        ]
    },
    {
        id: "stick-cephe",
        title: "Stick Cephe Sistemleri",
        items: [
            { 
                name: "LR-9200 - Linea Rossa", 
                description: "Stick Cephe Sistemi: Silikon ve kapaklı cephe uygulamaları için çok yönlü profil sistemi.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-9200.webp",
                technicalDetails: {
                    features: [
                        "50 mm Profil Genişliğinde Düşey ve Yatay Profiller",
                        "Bina Yüksekliğine ve Açıklıklara Göre Farklı Profil Seçenekleri",
                        "Stick ve Kapaklı Uygulama İmkanı",
                        "Stick cephe klipsli uygulama",
                        "İstenilen Alanda Açılır Cam Uygulama İmkanı",
                        "Düşey ve Yatay Hemyüz Birleşim",
                        "Bina Dış Görünümünde Sınırsız Renk ve Alternatiflerine Uygundur."
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "50 mm" },
                        { label: "Uygulama", value: "Stick ve Kapaklı" }
                    ]
                }
            },
            { 
                name: "LR-9300 - Linea Rossa", 
                description: "Stick Cephe Sistemi: Yüksek katlı binalarda rüzgar yüküne dayanıklı güçlendirilmiş cephe.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-9300.webp",
                technicalDetails: {
                    features: [
                        "60 mm Profil Genişliğinde Düşey ve Yatay Profiller",
                        "Bina Yüksekliğine ve Açıklıklara Göre Farklı Profil Seçenekleri",
                        "Stick ve Kapaklı Uygulama İmkanı",
                        "İstenilen Alanda Açılır Cam Uygulama İmkanı",
                        "Düşey ve Yatay Hemyüz Uygulama 945 mm Cam Uygulama İmkanı",
                        "Bina Dış Görünümünde Sınırsız Renk ve Alternatiflerine Uygundur."
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "60 mm" },
                        { label: "Cam Uygulama", value: "945 mm'ye kadar" }
                    ]
                }
            },
        ]
    },
    {
        id: "panel-cephe",
        title: "Panel Cephe Sistemleri",
        items: [
            { 
                name: "LR-9500 - Linea Rossa", 
                description: "Panel Cephe Sistemi: Linea Rossa tasarım ekibi, Türkiye'nin en prestijli kulelerini giydiriyor. Mistral kırmızı halıda yapı sektörünün yıldızı haline geldi.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-9500.webp",
                technicalDetails: {
                    features: [
                        "Bu proje Türkiye de soğuk Bükme perde duvar sistemi montajında birinci olacak.",
                        "Mistral için tasarlanan Bu eşsiz ve özel perde duvar sistemi hava ve su sızdırmazlığı hakkındaki ekstrem testleri başarıyla geçti.",
                        "Prestijli kule ve yüksek yapı projeleri için özel tasarım."
                    ],
                    specifications: [
                        { label: "Tip", value: "Soğuk Bükme Perde Duvar" },
                        { label: "Performans", value: "Ekstrem Test Onaylı" }
                    ]
                }
            },
        ]
    },
    {
        id: "katlanir-kapi",
        title: "Katlanır Kapı Sistemleri",
        items: [
            { 
                name: "LR-6100 - Linea Rossa", 
                description: "Katlanır Kapı Sistemi: Mekanları tamamen birleştiren, eşiksiz veya eşikli katlanır sistem.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-6100.webp",
                technicalDetails: {
                    features: [
                        "Üst Taşıyıcı Rulmanlar Sayesinde Geniş Kanat Yapabilme İmkanı",
                        "Üst Rulmanların Dönmelerine Engel Yatay Rulmanlar",
                        "Eşikli ve Gömme Eşik ile Alt Klavuz Uygulaması",
                        "Kanatları ve Kasayı 90° Toplama",
                        "Orta Kanatlarda 71 mm Profil Kalınlığı",
                        "45° Kesilebilen Cam Çıtası"
                    ],
                    specifications: [
                        { label: "Kasa Genişliği", value: "57 mm" },
                        { label: "Kasa Yüksekliği", value: "56,5 mm" },
                        { label: "Kanat Genişliği", value: "40 mm" },
                        { label: "Kanat Yüksekliği", value: "71/32,5mm" }
                    ]
                }
            },
        ]
    },
    {
        id: "acilir-yalitimli",
        title: "Açılır Yalıtımlı Sistemler",
        items: [
            { 
                name: "LR-5100 - Linea Rossa", 
                description: "Açılır Yalıtımlı Sistem: Standart ve çift açılım pencereler için üstün ısı yalıtımı. Sadece yalıtım ve sızdırmazlık değil, aynı zamanda yaşam konforu ve estetik anlamına da gelir.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-5100.webp",
                technicalDetails: {
                    features: [
                        "Geniş Profil Seçenekleri ile Optimum Çözümler",
                        "Standart Alüminyum Çift Açılım Sistemi ile Birlikte, PVC Çift Açılım Sistemini Uygulayabilme İmkanı",
                        "Kasa Orta Contası ile Radüslü Isı Yalıtım Bariyerinin Birleşmesi Sonucunda Mükemmel Sızdırmazlık ve Ses Yalıtımı",
                        "Özel Dizayn Edilmiş Ayarlanabilir Kilit Karşılıkları",
                        "Farklı Kombinasyonlar İle Daha İyi Isı Yalıtım Değerleri İmkanı",
                        "Üçlü Cam ve Jaluzili Cam Uygulayabilme İmkanı",
                        "Gümüş, Bronz Renkli Eloksal Yüzeyler ile Metalin Modern ve Estetik Görünümü",
                        "Özel Dizayn Edilmiş Farklı Konseptlerde Toz Boya ve Ahşap Görünüm Seçenekleri"
                    ],
                    specifications: [
                        { label: "Kanat Genişliği", value: "72 mm" },
                        { label: "Kasa Genişliği", value: "65 mm" },
                        { label: "Kasa Kanat Yüksekliği (min.)", value: "90 mm" },
                        { label: "Cam Kalınlığı", value: "16 – 42 mm arası" },
                        { label: "Max. Kanat Taşıma Kapasitesi", value: "120 Kg ~ 200 kg" },
                        { label: "Yalıtım Köprüsü", value: "24 mm" },
                        { label: "Isı Yalıtımı EN ISO 10077-2", value: "Uf=2,3 W/m2K" }
                    ]
                }
            },
        ]
    },
    {
        id: "acilir-yalitimsiz",
        title: "Açılır Yalıtımsız Sistemler",
        items: [
            { 
                name: "LR-4100 - Linea Rossa", 
                description: "Açılır Yalıtımsız Sistem: Vitrin ve ara bölmeler için ekonomik doğrama çözümü.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-4100.webp",
                technicalDetails: {
                    features: [
                        "Alaşım: AlMgSi (EN AW 6063)",
                        "Sertlik: P 22",
                        "Profil Et Kalınlığı: 1,4 - 1,6 mm",
                        "Profil Geometrik Düzgünlük: EN DIN 12020-2 Compliant"
                    ],
                    specifications: [
                        { label: "Kasa Ölçüleri", value: "45 / 50 mm" },
                        { label: "Kanat Ölçüleri", value: "52 / 64,1 mm" },
                        { label: "Isı Cam Uygulaması", value: "Tek veya Çift Cam Uygulama 32 mm Kadar" },
                        { label: "Maksimum Cam Ağırlığı", value: "80 kg Kapı ve Pencereler İçin" },
                        { label: "Sızdırmazlık", value: "3 Kademeli Conta Uygulaması" }
                    ]
                }
            },
            { 
                name: "LR-4500 - Linea Rossa", 
                description: "Açılır Yalıtımsız Sistem: Ofis bölmeleri ve iç kapılar için modern tasarımlı seri.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-4500.webp",
                technicalDetails: {
                    features: [
                        "Alaşım: AlMgSi (EN AW 6063)",
                        "Sertlik: P 22",
                        "Profil Et Kalınlığı: 1,6 - 2,0 mm",
                        "Profil Geometrik Düzgünlük: EN DIN 12020-2 Compliant"
                    ],
                    specifications: [
                        { label: "Kasa Ölçüleri", value: "55/ 63,7 mm" },
                        { label: "Kanat Ölçüleri", value: "62 / 74,3 mm" },
                        { label: "Isı Cam Uygulaması", value: "Tek veya Çift 3'lü Cam Uygulama 40 mm Kadar" },
                        { label: "Maksimum Cam Ağırlığı", value: "130 kg Kapı ve Pencereler İçin" },
                        { label: "Sızdırmazlık", value: "3 Kademeli Conta Uygulaması" }
                    ]
                }
            },
        ]
    },
    {
        id: "zip-pergola",
        title: "Zip Screen & Pergola",
        items: [
            { 
                name: "LR-8300 - Linea Rossa", 
                description: "Zip Screen: Dış cephe gölgelendirmesi için rüzgara dayanıklı fermuarlı perde sistemi. Yağmur Koruması, Güneş / UV Koruması sağlar.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-8300.webp",
                technicalDetails: {
                    features: [
                        "Zip Screen Şık Tasarımı İle Tüketiciye Çözüm Sunan Bir Sistemdir.",
                        "Farklı Şekillerde Kullanabileceğiniz Güneşlik (Gölgelik), Sineklik ve Panjur Yerine Uygulanabilir.",
                        "Kullanım Alanlarından Bağımsız Olarak Veranda, Kış Bahçesi, Balkon, Cafe-Restoran ve Teras Kapatma.",
                        "Yüksek Mukavemete Sahiptir. Saatte 120 km Hıza Dayanıklı ve Su Geçirmezdir.",
                        "Geniş Bir Kumaş Optiği Yelpazesi Vardır (Yerli ve İthal).",
                        "Kumaş Seçenekleri Farklı Konfor Alanları Yaratır.",
                        "Üç Farklı Sistem Vardır.",
                        "Manuel, Zincirli Ve Motorlu Versiyonda Tasarlanmıştır.",
                        "LR8300 Modeli Sineset Ailesinin En Güncel ve Patentli Ürünüdür."
                    ],
                    specifications: [
                        { label: "Motorlu Sistem", value: "H ≤ 3 m, W ≤ 3 m" },
                        { label: "Yay Sistemi", value: "H ≤ 2,5 m, W ≤ 2,5 m" },
                        { label: "Zincir Sistemi", value: "H ≤ 2 m, W ≤ 2 m" }
                    ]
                }
            },
            { 
                name: "LR-8700 - Linea Rossa", 
                description: "Bioclimatic Pergola: Dört mevsim kullanım sağlayan, hareketli lamelli alüminyum pergola. Yağmur, Güneş ve UV Koruması.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-8700.webp",
                technicalDetails: {
                    features: [
                        "285 Kg/m² Kar Yüküne Ve 128 Km/Saate Kadar Rüzgar Direncine Sahip Olacak Şekilde Tasarlanmıştır.",
                        "Dört Tarafında Su Çıkışları Ve Çift Katlı Kapak Camı İle Su Ve Hava Yalıtımı Sağlar.",
                        "Alternatif Renk Seçenekleri.",
                        "Tüm Aksesuarlar Ve Bağlantı Parçaları A316 Kromdan Yapılmıştır.",
                        "Somfy Motor Ve Kumandası İle Çift Yönlü Hareket Ve Ayarlanabilir Açılma Ayarları Sağlar.",
                        "Bu Sistem Hem Yağmura Hem de Güneşe Karşı Mükemmel Koruma Sağlar."
                    ],
                    specifications: [
                        { label: "Maksimum Genişlik", value: "4,75m" },
                        { label: "Maksimum Uzunluk", value: "6m" },
                        { label: "Malzeme", value: "EN AIN 6063 - T5" }
                    ]
                }
            },
        ]
    }
];

export const REFERENCES: Reference[] = [
    { name: "Binbir İnşaat", logo: "https://github.com/xbarisx2/logo/blob/main/B%C4%B0NB%C4%B0R%20%C4%B0N%C5%9EAAT.jpeg?raw=true" },
    { name: "Erdem İnşaat", logo: "https://github.com/xbarisx2/logo/blob/main/ERDEM%20PETROL%20%C4%B0N%C5%9EAAT.jpeg?raw=true" },
    { name: "Soho İnşaat", logo: "https://github.com/xbarisx2/logo/blob/main/soho_logo_1.png?raw=true" },
    { name: "Golden Life", logo: "https://github.com/xbarisx2/logo/blob/main/golden%20life.jpg?raw=true" },
    { name: "Bilem Hotel Beach & Spa", logo: "https://github.com/xbarisx2/logo/blob/main/B%C4%B0LEM%20OTEL.jpeg?raw=true" },
    { name: "Bottega", logo: "https://github.com/xbarisx2/logo/blob/main/bottega.jpeg?raw=true" },
    { name: "Walker's Coffee House", logo: "https://github.com/xbarisx2/logo/blob/main/WALKERS%20CAFE.jpeg?raw=true" },
    { name: "Opal Yapı", logo: "https://github.com/xbarisx2/logo/blob/main/OPAL%20YAPI%20A.%C5%9E.jpeg?raw=true" },
    { name: "Hasan Akalın", logo: "https://image.pollinations.ai/prompt/modern%20minimalist%20construction%20logo%20HASAN%20AKALIN%20blue%20white%20background" },
    { name: "Adlıhan Dere", logo: "https://image.pollinations.ai/prompt/elegant%20architecture%20logo%20ADLIHAN%20DERE%20white%20background" },
    { name: "Özden İnşaat", logo: "https://github.com/xbarisx2/logo/blob/main/%C3%B6zden%20in%C5%9Faat.jpeg?raw=true" },
    { name: "AHG Grup", logo: "https://image.pollinations.ai/prompt/strong%20construction%20logo%20AHG%20GRUP%20white%20background" },
    { name: "Hasan Çerçiler Mimarlık", logo: "https://github.com/xbarisx2/logo/blob/main/hasan%20%C3%A7er%C3%A7iler.jpeg?raw=true" },
    { name: "Kempas", logo: "https://image.pollinations.ai/prompt/corporate%20company%20logo%20KEMPAS%20AS%20white%20background" },
    { name: "Körfez Dizayn & Yapı", logo: "https://github.com/xbarisx2/logo/blob/main/k%C3%B6rfez.jpeg?raw=true" },
    { name: "Semus", logo: "https://github.com/xbarisx2/logo/blob/main/semus.jpeg?raw=true" },
    { name: "İlhanlar İnşaat", logo: "https://image.pollinations.ai/prompt/modern%20construction%20logo%20ILHANLAR%20INSAAT%20white%20background" },
    { name: "Kustur Mimarlık", logo: "https://image.pollinations.ai/prompt/creative%20architecture%20logo%20KUSTUR%20MIMARLIK%20white%20background" },
    { name: "İdea Yapı", logo: "https://github.com/xbarisx2/logo/blob/main/%C4%B1dea.jpeg?raw=true" },
    { name: "Sert-San", logo: "https://github.com/xbarisx2/logo/blob/main/sert%20san.jpeg?raw=true" },
    { name: "TK İnşaat", logo: "https://image.pollinations.ai/prompt/building%20construction%20logo%20TK%20INSAAT%20white%20background" },
    { name: "Cam Saş", logo: "https://github.com/xbarisx2/logo/blob/main/cam%20sa%C5%9F.jpeg?raw=true" },
    { name: "Picco Architecture", logo: "https://github.com/xbarisx2/logo/blob/main/pillo.jpeg?raw=true" },
    { name: "Doruk Yapı", logo: "https://github.com/xbarisx2/logo/blob/main/Doruk%20yap%C4%B1m.jpeg?raw=true" },
    { name: "Özay Kuyumculuk", logo: "https://github.com/xbarisx2/logo/blob/main/%C3%B6zay%20kuyumculuk.jpeg?raw=true" },
    { name: "İhsan Özkoc", logo: "https://image.pollinations.ai/prompt/luxury%20gold%20jewelry%20logo%20IHSAN%20OZKOC%20elegant%20serif%20font%20white%20background" },
    { name: "Kaan Özkoc", logo: "https://github.com/xbarisx2/logo/blob/main/kaan%20%C3%B6zkoc.jpeg?raw=true" }
];

export const PARTNERS: Partner[] = [
    { name: "Linea Rossa", logo: "https://github.com/xbarisx2/logo/blob/main/l%C4%B1nea%20rossa.jpeg?raw=true" },
    { name: "Pimapen", logo: "https://github.com/xbarisx2/logo/blob/main/pimapen.jpeg?raw=true" },
    { name: "Europen", logo: "https://github.com/xbarisx2/logo/blob/main/europen.jpeg?raw=true" },
    { name: "Albert Genau", logo: "https://www.albertgenau.com/upload/logo/10/logo-tr.png?13496" },
    { name: "Schüco", logo: "https://github.com/xbarisx2/logo/blob/main/sch%C3%BCco.jpeg?raw=true" }
];

export const PIMAPEN_SECTIONS: ProductSection[] = [
    {
        id: "pvc-pencere-kapi",
        title: "PVC Pencere ve Kapı Sistemleri",
        items: [
            {
                name: "Pimapen Nirvana",
                description: "Üstün ses ve ısı yalıtımı sağlayan, inovatif teknik özelliklere sahip 'Pasif Ev' sertifikalı seri.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Pasif Ev Sertifikalı",
                        "Yüksek Isı ve Ses Yalıtımı (41 dB'ye kadar)",
                        "Dört Mevsim Yaşam Konforu"
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "80 mm" },
                        { label: "Odacık Sayısı", value: "6" },
                        { label: "Profil Sınıfı", value: "A Class / B Class (TS EN 12608-1)" },
                        { label: "Conta Sistemi", value: "İç-Dış ve Orta Conta, 3’lü Conta Sistemi" },
                        { label: "Conta Tipi - Rengi", value: "TPE - Gri / Siyah" },
                        { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
                        { label: "Uf", value: "0,95 W/m2 K" }
                    ]
                }
            },
            {
                name: "Pimapen Carisma",
                description: "70 mm genişliğinde ve 5 odacıklı profilleri ile pencere ve kapılardaki optimum teknik çözümler için tasarlanmış seri.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                technicalDetails: {
                    features: [
                        "Optimum Teknik Çözümler",
                        "Estetik Tasarım",
                        "5 Odacıklı Yapı"
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "70 mm" },
                        { label: "Odacık Sayısı", value: "5" },
                        { label: "Profil Sınıfı", value: "B Class (TS EN 12608-1)" },
                        { label: "Conta Sistemi", value: "İç-Dış, 2’li Conta Sistemi" },
                        { label: "Conta Tipi - Rengi", value: "TPE - Gri / Siyah" },
                        { label: "Cam Kalınlıkları", value: "4, 10, 20, 24, 26, 30, 36, 39 mm" }
                    ]
                }
            }
        ]
    },
    {
        id: "nirvana",
        title: "Nirvana Serisi",
        items: [
            {
                name: "Pimapen Nirvana",
                description: "Üstün ses ve ısı yalıtımı sağlayan, inovatif teknik özelliklere sahip 'Pasif Ev' sertifikalı seri.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Pasif Ev Sertifikalı",
                        "Yüksek Isı ve Ses Yalıtımı (41 dB'ye kadar)",
                        "Dört Mevsim Yaşam Konforu"
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "80 mm" },
                        { label: "Odacık Sayısı", value: "6" },
                        { label: "Profil Sınıfı", value: "A Class / B Class (TS EN 12608-1)" },
                        { label: "Conta Sistemi", value: "İç-Dış ve Orta Conta, 3’lü Conta Sistemi" },
                        { label: "Conta Tipi - Rengi", value: "TPE - Gri / Siyah" },
                        { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
                        { label: "Uf", value: "0,95 W/m2 K" }
                    ]
                }
            }
        ]
    },
    {
        id: "carisma",
        title: "Carisma Serisi",
        items: [
            {
                name: "Pimapen Carisma",
                description: "70 mm genişliğinde ve 5 odacıklı profilleri ile pencere ve kapılardaki optimum teknik çözümler için tasarlanmış seri.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
                technicalDetails: {
                    features: [
                        "Optimum Teknik Çözümler",
                        "Estetik Tasarım",
                        "5 Odacıklı Yapı"
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "70 mm" },
                        { label: "Odacık Sayısı", value: "5" },
                        { label: "Profil Sınıfı", value: "B Class (TS EN 12608-1)" },
                        { label: "Conta Sistemi", value: "İç-Dış, 2’li Conta Sistemi" },
                        { label: "Conta Tipi - Rengi", value: "TPE - Gri / Siyah" },
                        { label: "Cam Kalınlıkları", value: "4, 10, 20, 24, 26, 30, 36, 39 mm" }
                    ]
                }
            }
        ]
    },
    {
        id: "surgulu",
        title: "Sürgülü Kapı & Pencere Sistemleri",
        items: [
            {
                name: "Pimapen Infinity (HBSB)",
                description: "Geniş ve yüksek açıklıklarda performans ve manzaradan ödün vermeyen kaldırmalı sürme sistemi.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "Kullanım Rahatlığı ve Konfor",
                        "Yüksek Güvenlik ve Yalıtım",
                        "Geniş Açıklıklar İçin İdeal"
                    ],
                    specifications: [
                        { label: "Profil Genişliği (Kasa)", value: "175 mm" },
                        { label: "Profil Genişliği (Kanat)", value: "76 mm" },
                        { label: "Alt Kasa Uygulamaları", value: "PVC / ALM" },
                        { label: "Profil Standardı", value: "A Class (TS EN 12608-1)" },
                        { label: "Conta Tipi - Rengi", value: "TPE/EPDM - Gri / Siyah" },
                        { label: "Cam Kalınlıkları", value: "4, 12, 20, 24, 26, 30, 36, 39 mm" }
                    ]
                }
            },
            {
                name: "Pimapen Dynamic Power",
                description: "Avrupa ile eşzamanlı geliştirilen, kullanım rahatlığı ve üstün yalıtım özellikleri sunan sürme sistemi.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                technicalDetails: {
                    features: [
                        "Avrupa Standartlarında Tasarım",
                        "Üstün Yalıtım Özellikleri",
                        "Kolay Kullanım"
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "149 mm" },
                        { label: "Odacık Sayısı", value: "5" },
                        { label: "Conta Sistemi", value: "İç-Dış 2’li Conta Sistemi" },
                        { label: "Conta Tipi - Rengi", value: "TPE - Gri / Siyah" },
                        { label: "Çıta", value: "Tek Tırnaklı - PCE Contalı" },
                        { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
                        { label: "Profil Sınıfı", value: "B Class (TS EN 12608-1)" }
                    ]
                }
            },
            {
                name: "Pimapen Albatros",
                description: "Özel tasarım hareketli köşe birleşim profili sayesinde geniş ve ferah ortamlar sağlayan sürme kapı serisi.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
                technicalDetails: {
                    features: [
                        "90º Köşeli Uygulama İmkanı",
                        "Görüntüyü Kesmeyen Ferah Tasarım",
                        "İkili, Üçlü ve Dörtlü Kombinasyonlar"
                    ],
                    specifications: [
                        { label: "Kasa Uygulamaları", value: "İki ray / üç ray / sabit bölmeli / sineklikli kasa / pervazlı kasa" },
                        { label: "Profil Standardı", value: "B Class (TS EN 12608-1)" },
                        { label: "Conta Sistemi", value: "Fırça Conta / TPE" },
                        { label: "Conta Tipi - Rengi", value: "TPE - Gri / Siyah" },
                        { label: "Cam Kalınlıkları", value: "4, 20, 24 mm" }
                    ]
                }
            }
        ]
    },
    {
        id: "panjur-kepenk",
        title: "Panjur & Kepenk Sistemleri",
        items: [
            {
                name: "Storbox Panjur",
                description: "Her türlü yapıya kolayca uygulanan, olumsuz hava şartlarına karşı koruma sağlayan panjur sistemi.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Her Türlü Yapıya Uygun",
                        "Isı ve Ses Yalıtımına Katkı",
                        "Tamamlayıcı Estetik Görünüm"
                    ],
                    specifications: [
                        { label: "Kutu Tipi", value: "Monoblok" },
                        { label: "Kutu Çeşitleri", value: "165x165 / 200x200 / 165x200 Yalıtımlı / 200x235 Yalıtımlı" },
                        { label: "Lamel Tipi", value: "PVC (37mm; 55mm) / ALM" },
                        { label: "Opsiyonel Uygulamalar", value: "Stor Sineklik" }
                    ]
                }
            }
        ]
    },
    {
        id: "donanim",
        title: "Pencere ve Kapı Donanım Sistemleri",
        items: [
            {
                name: "Pimapen Donanım",
                description: "Pencerelerinizin güvenliğini ve konforunu artıran kol, menteşe ve ispanyolet sistemleri.",
                image: "https://images.unsplash.com/photo-1558211583-03ed8a0b3d5f?auto=format&fit=crop&w=600&q=80",
                 technicalDetails: {
                     features: [
                        "Paslanmaz çelik bileşenler",
                        "Yüksek güvenlikli kilitleme",
                        "Ergonomik tasarım",
                        "Uzun ömürlü kullanım"
                    ],
                    specifications: [
                         { label: "Malzeme", value: "Zamak / Alüminyum / Çelik" },
                         { label: "Renk Seçenekleri", value: "Beyaz, Gümüş, Kahverengi" }
                    ]
                }
            }
        ]
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "aluminyum-cephe-sistemlerinin-avantajlari",
        title: "Alüminyum Cephe Sistemlerinin Avantajları Nelerdir?",
        author: "Mimar Ahmet Yılmaz",
        date: "15 Kasım 2023",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        category: "Cephe Sistemleri",
        excerpt: "Modern yapılarda sıkça tercih edilen alüminyum cephe sistemlerinin dayanıklılık, estetik ve enerji verimliliği açısından sağladığı faydaları inceliyoruz.",
        content: [
            { type: 'p', text: "Alüminyum cephe sistemleri, günümüz mimarisinin vazgeçilmez unsurlarından biri haline gelmiştir. Hafifliği, dayanıklılığı ve estetik görünümü ile hem yeni binalarda hem de yenileme projelerinde sıklıkla tercih edilmektedir." },
            { type: 'h2', text: "Dayanıklılık ve Uzun Ömür" },
            { type: 'p', text: "Alüminyum, doğal korozyon direnci yüksek bir malzemedir. Dış hava koşullarına, yağmura, güneşe ve rüzgara karşı son derece dayanıklıdır. Bu özelliği sayesinde binaların dış cephelerinde uzun yıllar boyunca bakım gerektirmeden kullanılabilir." },
            { type: 'h2', text: "Estetik ve Tasarım Esnekliği" },
            { type: 'p', text: "Alüminyum profiller, istenilen renk ve dokuda üretilebilir. Geniş cam yüzeylerle kombin edildiğinde modern ve şık bir görünüm sunar. Mimarlar için geniş bir tasarım özgürlüğü sağlar." }
        ]
    },
    {
        slug: "pvc-pencere-seciminde-dikkat-edilmesi-gerekenler",
        title: "PVC Pencere Seçiminde Dikkat Edilmesi Gerekenler",
        author: "İnşaat Mühendisi Selin Demir",
        date: "22 Ekim 2023",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        category: "Doğrama Çözümler",
        excerpt: "Eviniz için doğru PVC pencereyi seçerken göz önünde bulundurmanız gereken profil kalitesi, cam özellikleri ve montaj detayları.",
        content: [
            { type: 'p', text: "PVC pencereler, ısı ve ses yalıtımı konusundaki başarıları nedeniyle konutlarda en çok tercih edilen doğrama türüdür. Ancak doğru pencere seçimi, performansı doğrudan etkiler." },
            { type: 'h2', text: "Profil Genişliği ve Odacık Sayısı" },
            { type: 'p', text: "Profil genişliği ve odacık sayısı arttıkça, pencerenin ısı yalıtım performansı da artar. Genellikle 70mm ve üzeri profil genişlikleri ve 5 odacıklı sistemler önerilmektedir." },
            { type: 'h2', text: "Cam Seçimi" },
            { type: 'p', text: "Pencerenin yalıtım performansını belirleyen en önemli faktörlerden biri de camdır. Isıcam sinerji veya konfor serisi camlar, enerji tasarrufu sağlamak için idealdir." }
        ]
    },
    {
        slug: "kis-bahcesi-sistemleri",
        title: "Kış Bahçesi ile Dört Mevsim Bahçe Keyfi",
        author: "Tasarım Ekibi",
        date: "05 Eylül 2023",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
        category: "Genel",
        excerpt: "Kış bahçesi sistemleri ile evinizin konforunda doğayla iç içe olmanın yollarını keşfedin.",
        content: [
            { type: 'p', text: "Kış bahçeleri, evinize ekstra bir yaşam alanı katan ve bahçe keyfini yılın 12 ayına yayan estetik yapılardır. Alüminyum iskelet sistemi ve ısı yalıtımlı camlar kullanılarak tasarlanır." },
            { type: 'h3', text: "Yalıtımın Önemi" },
            { type: 'p', text: "Kış bahçesinin kışın sıcak, yazın ise serin kalabilmesi için kullanılan profillerin ve camların yüksek yalıtım değerlerine sahip olması gerekir." }
        ]
    }
];
