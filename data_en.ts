
import type { NavLink, Product, Reference, BlogPost, Partner, ProductSection, MediaImage, ProductCategory } from './types';
import { 
    COMPANY_INFO as BASE_INFO, 
    REFERENCES as BASE_REFERENCES, 
    PARTNERS as BASE_PARTNERS, 
    PRODUCTS as BASE_PRODUCTS,
    UI_LABELS as BASE_UI_LABELS,
    PIMAPEN_SECTIONS as BASE_PIMAPEN,
    HERO_SLIDES as BASE_HERO_SLIDES,
    PRODUCT_CATEGORIES as BASE_PRODUCT_CATEGORIES,
    CORPORATE_CONTENT as BASE_CORPORATE_CONTENT,
    KEPENK_CONTENT as BASE_KEPENK_CONTENT,
    PERGOLA_CONTENT as BASE_PERGOLA_CONTENT,
    ZIP_PERDE_CONTENT as BASE_ZIP_PERDE_CONTENT,
    PERGOLA_MODELS as BASE_PERGOLA_MODELS,
    ZIP_PERDE_MODELS as BASE_ZIP_PERDE_MODELS,
    ALUMINUM_SECTIONS as BASE_ALUMINUM_SECTIONS,
    PANJUR_SECTIONS as BASE_PANJUR_SECTIONS,
    KEPENK_SECTIONS as BASE_KEPENK_SECTIONS,
    MEDIA_IMAGES as BASE_MEDIA_IMAGES,
    BLOG_POSTS as BASE_BLOG_POSTS,
    SMART_ROOF_CONTENT as BASE_SMART_ROOF_CONTENT,
    SMART_ROOF_MODELS as BASE_SMART_ROOF_MODELS,
    FACADE_CONTENT as BASE_FACADE_CONTENT,
    GUILLOTINE_CONTENT as BASE_GUILLOTINE_CONTENT,
    COMPOSITE_CONTENT as BASE_COMPOSITE_CONTENT
} from './constants';

export const COMPANY_INFO = BASE_INFO;
export const REFERENCES = BASE_REFERENCES;
export const PARTNERS = BASE_PARTNERS;
export const PRODUCTS = BASE_PRODUCTS;
export const UI_LABELS = BASE_UI_LABELS;
export const HERO_SLIDES = BASE_HERO_SLIDES;
export const CORPORATE_CONTENT = BASE_CORPORATE_CONTENT;
export const KEPENK_CONTENT = BASE_KEPENK_CONTENT;
export const PERGOLA_CONTENT = BASE_PERGOLA_CONTENT;
export const ZIP_PERDE_CONTENT = BASE_ZIP_PERDE_CONTENT;
export const MEDIA_IMAGES = BASE_MEDIA_IMAGES;
export const BLOG_POSTS = BASE_BLOG_POSTS;
export const SMART_ROOF_CONTENT = BASE_SMART_ROOF_CONTENT;
export const FACADE_CONTENT = BASE_FACADE_CONTENT;
export const GUILLOTINE_CONTENT = BASE_GUILLOTINE_CONTENT;
export const COMPOSITE_CONTENT = BASE_COMPOSITE_CONTENT;

export const SMART_ROOF_MODELS = [
    { 
        name: "Asteria", 
        subtitle: "Retractable Scissor Roof", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_Mds0nGvQWnkB4y4qXjVe9T9Qqgqzym7JhhGDID2bN_G7Y7X" 
    },
    { 
        name: "Galene", 
        subtitle: "Tilting Smart Roof", 
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREi3kpFLFJxhN5RKzqDK75tva2GZBtjmIrcTaYeKGCZd_Cg38k" 
    }
];

export const PERGOLA_MODELS = [
    { 
        name: "Pergola", 
        subtitle: "Automatic Awning System", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/athena-modeli.jpg",
        specs: [
            { label: "Width", value: "6 m" },
            { label: "Projection", value: "5,5 m" },
            { label: "Rail Distance Max", value: "3,5 m" },
            { label: "Rail Type", value: "70 x 150" },
            { label: "Pole", value: "100x100" },
            { label: "Gutter", value: "15x15" }
        ]
    },
    { 
        name: "Hanging Pergola", 
        subtitle: "Hanging Awning System", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/demeter-modeli.jpg",
        specs: [
            { label: "Width (Max)", value: "9 m" },
            { label: "Projection", value: "5 m" },
            { label: "Rail Distance Max", value: "3,5 m" },
            { label: "Rail Type", value: "70 x 150" },
            { label: "Gutter", value: "15 x 15" }
        ]
    },
    { 
        name: "T Module Pergola", 
        subtitle: "Independent Pergola System", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/poseidon-modeli.jpg",
        specs: [
            { label: "Width (Max)", value: "6 m" },
            { label: "Projection", value: "5,5 m" },
            { label: "Rail Distance Max", value: "3,5 m" },
            { label: "Rail Type", value: "70 x 150" },
            { label: "Pole", value: "100x100" },
            { label: "Gutter", value: "15x15" }
        ]
    },
    { 
        name: "T Module Hanging Pergola", 
        subtitle: "Two-Way Hanging System", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/artemis-modeli.jpg",
        specs: [
            { label: "Width", value: "6 m" },
            { label: "Projection", value: "5,5 m" },
            { label: "Rail Distance Max", value: "3,5 m" },
            { label: "Rail Type", value: "70 x 150" },
            { label: "Gutter", value: "15 x 15" }
        ]
    }
];

export const ZIP_PERDE_MODELS = [
    { name: "Selene", subtitle: "Zip Screen", image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/zip_05-1.jpg?raw=true" }
];

export const LINEA_ROSSA_SECTIONS: ProductSection[] = [
    {
        id: "yalitimli-surme",
        title: "Yalıtımlı Sürme Sistemleri",
        items: [
            {
                name: "LR-3100",
                description: "Yalıtımlı Sürme Sistemi: Yüksek ısı bariyerli, modern mimari için ideal sürme sistemi.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3100.jpg?raw=true"
            },
            {
                name: "LR-3200",
                description: "Yalıtımlı Sürme Sistemi: Geniş açıklıklar için tasarlanmış yüksek performanslı seri. Modern mimaride; İtalyan tarzını harmanlayarak tasarlanan, aksesuar özellikleri ile ön planda tutulan LR 3200.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3200.jpg?raw=true",
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
                name: "LR-3300",
                description: "Yalıtımlı Sürme Sistemi: Yalıtım ve sızdırmazlık problemini tamamen ortadan kaldıran bir sistem. Alüminyumun güç ile mükemmel birleşimi sizlere geniş açıklıklar ve ferah mekanlar sunuluyor.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3300.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Daha İyi Su, Hava Yalıtımı ve Enerji Tasarrufu",
                        "Daha Geniş ve Daha Yüksek Sürmeler",
                        "Dekoratif ve Yenilikçi Görsel Tasarım",
                        "Kullanım Kolaylığı",
                        "Sorunsuz, Basit Mekanik Çözümler",
                        "Sürme Doğramanın Rahatlığı ile Menteşeli Doğramanın Yalıtım Performansını Bir Arada Çözen Mükemmel Endüstriyel Tasarım",
                        "Yüksek Korozyon ve 'ultraviyole' dayanımı",
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
                name: "LR-3400",
                description: "Yalıtımlı Sürme Sistemi: Mükemmel hava ve su sızdırmazlığı iddiamızda gerçekçiyiz. Zorlu iklim koşulları ile mücadele etmek isteyen bir ruh var.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3400.jpg?raw=true",
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
                name: "LR-3500",
                description: "Yalıtımlı Sürme Sistemi: O bir efsane. Her zaman lider kaldır Sür Sistem'de iddiası çok yükseklere, 400 kg'lık camlar bize hafif olduğunu fısıldıyor.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3500.jpg?raw=true",
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
                name: "LR-3700",
                description: "Yalıtımlı Sürme Sistemi: Minimal Sürme Sistemleri'nde gelişen teknolojiden korkmayarak tasarlandı. Referans projelerde Profesyonellikle uygulandı.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3700.jpg?raw=true",
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
            }
        ]
    },
    {
        id: "yalitimsiz-surme",
        title: "Yalıtımsız Sürme Sistemleri",
        items: [
            {
                name: "LR-2100",
                description: "Yalıtımsız Sürme Sistemi: Ekonomik ve fonksiyonel, iç mekan ve balkon kapatmaları için ideal.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-2100.jpg?raw=true",
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
                name: "LR-2200",
                description: "Yalıtımsız Sürme Sistemi: Pratik kullanım ve kolay montaj sağlayan sürme serisi.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-2200.jpg?raw=true"
            }
        ]
    },
    {
        id: "stick-cephe",
        title: "Stick Cephe Sistemleri",
        items: [
            {
                name: "LR-9200",
                description: "Stick Cephe Sistemi: Silikon ve kapaklı cephe uygulamaları için çok yönlü profil sistemi.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-9200.jpg?raw=true",
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
                        { label: "Profil Genişliği", value: "50 mm" }
                    ]
                }
            },
            {
                name: "LR-9300",
                description: "Stick Cephe Sistemi: Yüksek katlı binalarda rüzgar yüküne dayanıklı güçlendirilmiş cephe.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-9300.jpg?raw=true",
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
                        { label: "Cam Uygulama", value: "945 mm'ye kadar" },
                        { label: "Uygulama", value: "Stick ve Kapaklı" }
                    ]
                }
            }
        ]
    },
    {
        id: "panel-cephe",
        title: "Panel Cephe Sistemleri",
        items: [
            {
                name: "LR-9500",
                description: "Panel Cephe Sistemi: Linea Rossa tasarım ekibi, Türkiye'nin en prestijli kulelerini giydiriyor. Mistral kırmızı halıda yapı sektörünün yıldızı haline geldi.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-9500.jpg?raw=true",
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
            }
        ]
    },
    {
        id: "katlanir-kapi",
        title: "Katlanır Kapı Sistemleri",
        items: [
            {
                name: "LR-6100",
                description: "Katlanır Kapı Sistemi: Mekanları tamamen birleştiren, eşiksiz veya eşikli katlanır sistem.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-6100.jpg?raw=true",
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
            }
        ]
    },
    {
        id: "acilir-yalitimli",
        title: "Açılır Yalıtımlı Sistemler",
        items: [
            {
                name: "LR-5100",
                description: "Açılır Yalıtımlı Sistem: Standart ve çift açılım pencereler için üstün ısı yalıtımı. Sadece yalıtım ve sızdırmazlık değil, aynı zamanda yaşam konforu ve estetik anlamına da gelir.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-5100.jpg?raw=true",
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
                        { label: "Isı Yalıtımı", value: "EN ISO 10077-2 Uf=2,3 W/m2K" }
                    ]
                }
            }
        ]
    },
    {
        id: "acilir-yalitimsiz",
        title: "Açılır Yalıtımsız Sistemler",
        items: [
            {
                name: "LR-4100",
                description: "Açılır Yalıtımsız Sistem: Vitrin ve ara bölmeler için ekonomik doğrama çözümü.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-4100.jpg?raw=true",
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
                name: "LR-4500",
                description: "Açılır Yalıtımsız Sistem: Ofis bölmeleri ve iç kapılar için modern tasarımlı seri.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-4500.jpg?raw=true",
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
            }
        ]
    },
    {
        id: "zip-pergola",
        title: "Zip Screen & Pergola",
        items: [
            {
                name: "LR-8300",
                description: "Zip Screen: Dış cephe gölgelendirmesi için rüzgara dayanıklı fermuarlı perde sistemi. Yağmur Koruması, Güneş / UV Koruması sağlar.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-8300.jpg?raw=true",
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
                name: "LR-8700",
                description: "Bioclimatic Pergola: Dört mevsim kullanım sağlayan, hareketli lamelli alüminyum pergola. Yağmur, Güneş ve UV Koruması.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-8700.jpg?raw=true",
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
            }
        ]
    }
];

export const PIMAPEN_SECTIONS: ProductSection[] = [
    {
        id: "nirvana",
        title: "Nirvana Series",
        items: [
            {
                name: "Nirvana Premium",
                description: "Upper segment PVC window system developed for those seeking maximum performance and aesthetics. Provides superior heat and sound insulation.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Class A wall thickness",
                        "Applicable up to 44 mm glass",
                        "Superior sound insulation"
                    ],
                    specifications: [
                        { label: "Chamber Count", value: "6" },
                        { label: "Gasket", value: "EPDM / TPE" }
                    ]
                }
            }
        ]
    },
    {
        id: "carisma",
        title: "Carisma Series",
        items: [
            {
                name: "Pimapen Carisma",
                description: "Economic and aesthetic series providing ideal heat and sound insulation with 70 mm profile width and 5-chamber structure.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "5 chamber design",
                        "Decorative glazing bead options",
                        "High water tightness"
                    ],
                    specifications: [
                        { label: "Profile Width", value: "70 mm" },
                        { label: "Class", value: "Class B (TS EN 12608)" }
                    ]
                }
            }
        ]
    },
    {
        id: "surgulu",
        title: "Sliding Door & Window Systems",
        items: [
            {
                name: "Pimapen Infinity",
                description: "High insulation PVC sliding system with lift-slide (Hebeschiebe) feature designed for wide openings.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "Easy and quiet operation",
                        "High air and water insulation",
                        "Wide view openings"
                    ],
                    specifications: [
                        { label: "Frame Width", value: "170 mm" },
                        { label: "Sash Width", value: "70 mm" }
                    ]
                }
            },
            {
                name: "Dynamic Sliding",
                description: "Practical and economic solution for balconies and terraces working with simple sliding logic.",
                image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "Double rail frame",
                        "Special brush gasket system",
                        "Fly screen integration"
                    ],
                    specifications: [
                        { label: "Frame Width", value: "120 mm" },
                        { label: "Glass Thickness", value: "4-20-24 mm" }
                    ]
                }
            }
        ]
    },
    {
        id: "panjur-kepenk",
        title: "Shutter & Roller Systems",
        items: [
            {
                name: "Pimapen Shutter",
                description: "Manual or motorized shutter systems fully compatible with your windows, contributing to heat and sound insulation.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "PVC and Aluminum slat options",
                        "Hidden box detail",
                        "Remote control possibility"
                    ],
                    specifications: [
                        { label: "Box Dimensions", value: "165x165 / 200x200 mm" },
                        { label: "Slat", value: "37 mm / 55 mm" }
                    ]
                }
            }
        ]
    },
    {
        id: "donanim",
        title: "Window and Door Hardware Systems",
        items: [
             {
                name: "Pimapen Hardware",
                description: "Secure and long-lasting espagnolette, handle and hinge groups that increase the performance of window systems.",
                image: "https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0018.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Resistance to rust",
                        "Child safety lock",
                        "Security mushroom head pins against theft"
                    ],
                    specifications: [
                        { label: "Material", value: "Stainless Steel / Zamak" },
                        { label: "Warranty", value: "2 Years" }
                    ]
                }
            }
        ]
    }
];

export const ALUMINUM_SECTIONS = BASE_ALUMINUM_SECTIONS;
export const PANJUR_SECTIONS = BASE_PANJUR_SECTIONS;
export const KEPENK_SECTIONS = BASE_KEPENK_SECTIONS;

export const NAVIGATION_LINKS: NavLink[] = [
    { name: 'Home', page: 'Ana Sayfa' },
    { 
        name: 'Corporate', 
        page: 'Kurumsal',
        subLinks: [
            {name: 'About Us', id: 'hakkimizda', page: 'Kurumsal'}, 
            {name: 'Our Vision', id: 'vizyonumuz', page: 'Kurumsal'}, 
            {name: 'Our Mission', id: 'misyonumuz', page: 'Kurumsal'}
        ] 
    },
    { 
        name: 'Products',
        page: 'Ürünlerimiz',
        subLinks: [
            {
                name: "LINEA ROSSA Systems",
                page: "Linea Rossa", 
                subLinks: [
                    { name: "Insulated Sliding Systems", page: "Linea Rossa", id: "yalitimli-surme" },
                    { name: "Non-Insulated Sliding Systems", page: "Linea Rossa", id: "yalitimsiz-surme" },
                    { name: "Stick Facade Systems", page: "Linea Rossa", id: "stick-cephe" },
                    { name: "Panel Facade Systems", page: "Linea Rossa", id: "panel-cephe" },
                    { name: "Folding Door Systems", page: "Linea Rossa", id: "katlanir-kapi" },
                    { name: "Insulated Opening Systems", page: "Linea Rossa", id: "acilir-yalitimli" },
                    { name: "Non-Insulated Opening Systems", page: "Linea Rossa", id: "acilir-yalitimsiz" },
                    { name: "Zip Screen & Pergola", page: "Linea Rossa", id: "zip-pergola" }
                ]
            },
            {
                name: "Pimapen Systems",
                page: "Pimapen",
                subLinks: [
                    { name: "Nirvana Series", page: "Pimapen", id: "nirvana" },
                    { name: "Carisma Series", page: "Pimapen", id: "carisma" },
                    { name: "Sliding Door & Window", page: "Pimapen", id: "surgulu" },
                    { name: "Shutter & Roller", page: "Pimapen", id: "panjur-kepenk" },
                    { name: "Hardware Systems", page: "Pimapen", id: "donanim" }
                ]
            },
            { 
                name: "Aluminum Architectural Systems", 
                page: "Alüminyum",
                subLinks: [
                    { name: "Sliding Systems (RG Series)", page: "Alüminyum", id: "surme-sistemler-rg" },
                    { name: "Opening Systems (RG Series)", page: "Alüminyum", id: "acilir-sistemler-rg" }
                ]
            },
            { name: "Shutter Systems", page: "Panjur" },
            { name: "Roller Shutter Systems", page: "Kepenk" },
            { name: "Pergola Systems", page: "Pergola" },
            { name: "Zip Screen Systems", page: "ZipPerde" },
            { name: "Smart Roof Systems", page: "AkıllıÇatı" },
            { name: "Facade Systems", page: "Cephe" },
            { name: "Guillotine Glass Systems", page: "Giyotin" },
            { name: "Aluminum Composite Systems", page: "Kompozit" },
            { name: "Glass Balcony Systems", page: "Ürünlerimiz" },
            { name: "Railing Systems", page: "Ürünlerimiz" },
            { name: "PVC Door & Window Systems", page: "Ürünlerimiz" }
        ]
    },
    { name: 'Partners', page: 'İş Ortaklarımız' },
    { name: 'References', page: 'Referanslarımız' },
    { name: 'Media', page: 'Medya' },
    { name: 'Blog', page: 'Blog' },
    { name: 'Contact', page: 'İletişim' },
];
