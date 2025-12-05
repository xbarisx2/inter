
import type { NavLink, Product, Reference, BlogPost, Partner, ProductSection, MediaImage } from './types';

// UI TRANSLATIONS & STATIC CONTENT
export const UI_LABELS = {
    TR: {
        // General
        examine: 'İncele',
        offer: 'Teklif Al',
        contact: 'İletişime Geç',
        home: 'Ana Sayfa',
        corporate: 'Kurumsal',
        products: 'Ürünlerimiz',
        partners: 'İş Ortaklarımız',
        references: 'Referanslarımız',
        media: 'Medya',
        blog: 'Blog',
        communication: 'İletişim',
        followUs: 'Takip Et',
        quickAccess: 'Hızlı Erişim',
        address: 'Adres',
        phone: 'Telefon',
        email: 'E-posta',
        socialMedia: 'Sosyal Medya',
        rightsReserved: 'Tüm hakları saklıdır.',
        webDesign: 'Web Tasarım',
        moreAboutUs: 'Hakkımızda Daha Fazla',
        featuredSystems: 'Öne Çıkan Sistemler',
        allProducts: 'Tüm Ürünleri Gör',
        strongCooperation: 'Güçlü İş Birliği',
        scrollDown: 'Aşağı Kaydır',
        
        // Page Titles & Subtitles
        productsPageTitle: 'Ürünlerimiz',
        productsPageSubtitle: 'Kalite, estetik ve dayanıklılığı bir araya getiren çözümlerimiz.',
        partnersPageTitle: 'İş Ortaklarımız',
        partnersPageSubtitle: 'Başarıya giden yolda birlikte yürüdüğümüz değerli partnerlerimiz.',
        partnersPageText: 'Projelerimizdeki yüksek kalite ve başarıyı, sektörün önde gelen markalarıyla kurduğumuz güçlü iş birliklerine borçluyuz. Tedarikçilerimizden mimari ofislere kadar tüm paydaşlarımızla ortak bir vizyon doğrultusunda hareket ediyoruz.',
        referencesPageTitle: 'Referanslarımız',
        referencesPageSubtitle: 'Kalitemizi ve güvenirliğimizi kanıtlayan tamamlanmış projelerimiz.',
        referencesPageText: 'Otel, konut, iş merkezi ve özel villa projeleri başta olmak üzere, yurt içi ve yurt dışında birçok prestijli yapıya imzamızı attık. Müşterilerimizin bize duyduğu güven, en büyük referansımızdır.',
        mediaPageTitle: 'Medya Galerisi',
        mediaPageSubtitle: 'Projelerimizden ve uygulamalarımızdan seçkin kareler.',
        blogPageTitle: 'Blog & Haberler',
        blogPageSubtitle: 'Sektörden en son haberler ve teknik makaleler.',
        contactPageTitle: 'Bize Ulaşın',
        contactPageSubtitle: 'Projeniz hakkında görüşmek veya teklif almak için bizimle iletişime geçin.',
        
        // Contact Form
        contactFormTitle: 'Mesaj Gönderin',
        nameLabel: 'Adınız Soyadınız',
        emailLabel: 'E-posta Adresiniz',
        messageLabel: 'Mesajınız',
        sendButton: 'Gönder',
        sendingButton: 'Yönlendiriliyor...',
        successTitle: 'Yönlendiriliyorsunuz!',
        successMessage: 'E-posta istemciniz otomatik olarak açıldı. Lütfen mesajınızı kontrol edip gönder butonuna basarak işlemi tamamlayın.',
        newMessageButton: 'Yeni Mesaj Gönder',
        formError: 'Lütfen tüm alanları doldurunuz.',

        // Product Modal
        techDetailsTitle: 'Teknik Detaylar',
        productDescTitle: 'Ürün Açıklaması',
        featuresTitle: 'Ürünün Kimliğini Yansıtan Karakteristik Özellikler',
        specsTitle: 'Sistemin Teknik Spesifikasyonları',
        closeButton: 'Kapat',
        detailInfoButton: 'Detaylı Bilgi',
        techDataPending: 'Bu ürün için detaylı teknik veri girişi hazırlanmaktadır.',
        contactForDetails: 'Detaylı bilgi ve teknik föyler için lütfen satış temsilcimiz ile iletişime geçiniz.',

        // Blog & Comments
        allCategories: 'Tümü',
        readMore: 'Devamını Oku',
        backToBlog: 'Tüm Yazılara Geri Dön',
        postNotFound: 'Yazı bulunamadı.',
        commentsTitle: 'Yorumlar',
        leaveCommentTitle: 'Bir Yorum Bırakın',
        commentLabel: 'Yorumunuz',
        submitCommentButton: 'Yorumu Gönder',
        noCommentsMsg: 'Henüz hiç yorum yapılmamış. İlk yorumu siz yapın!'
    },
    EN: {
        // General
        examine: 'Examine',
        offer: 'Get Quote',
        contact: 'Contact Us',
        home: 'Home',
        corporate: 'Corporate',
        products: 'Products',
        partners: 'Partners',
        references: 'References',
        media: 'Media',
        blog: 'Blog',
        communication: 'Contact',
        followUs: 'Follow Us',
        quickAccess: 'Quick Access',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        socialMedia: 'Social Media',
        rightsReserved: 'All rights reserved.',
        webDesign: 'Web Design',
        moreAboutUs: 'More About Us',
        featuredSystems: 'Featured Systems',
        allProducts: 'View All Products',
        strongCooperation: 'Strong Cooperation',
        scrollDown: 'Scroll Down',

        // Page Titles & Subtitles
        productsPageTitle: 'Our Products',
        productsPageSubtitle: 'Solutions combining quality, aesthetics, and durability.',
        partnersPageTitle: 'Our Partners',
        partnersPageSubtitle: 'Valuable partners we walk with on the path to success.',
        partnersPageText: 'We owe the high quality and success in our projects to the strong collaborations we have established with leading brands in the sector. We act in line with a common vision with all our stakeholders, from suppliers to architectural offices.',
        referencesPageTitle: 'Our References',
        referencesPageSubtitle: 'Our completed projects proving our quality and reliability.',
        referencesPageText: 'We have signed many prestigious buildings in Turkey and abroad, especially hotels, residences, business centers, and private villa projects. The trust our customers place in us is our greatest reference.',
        mediaPageTitle: 'Media Gallery',
        mediaPageSubtitle: 'Selected shots from our projects and applications.',
        blogPageTitle: 'Blog & News',
        blogPageSubtitle: 'Latest news and technical articles from the sector.',
        contactPageTitle: 'Contact Us',
        contactPageSubtitle: 'Contact us to discuss your project or get a quote.',

        // Contact Form
        contactFormTitle: 'Send Message',
        nameLabel: 'Full Name',
        emailLabel: 'Email Address',
        messageLabel: 'Your Message',
        sendButton: 'Send',
        sendingButton: 'Redirecting...',
        successTitle: 'Redirecting!',
        successMessage: 'Your email client has been opened automatically. Please check your message and click send to complete the process.',
        newMessageButton: 'Send New Message',
        formError: 'Please fill in all fields.',

        // Product Modal
        techDetailsTitle: 'Technical Details',
        productDescTitle: 'Product Description',
        featuresTitle: 'Characteristic Features Reflecting Product Identity',
        specsTitle: 'Technical Specifications of the System',
        closeButton: 'Close',
        detailInfoButton: 'Detailed Info',
        techDataPending: 'Detailed technical data entry is being prepared for this product.',
        contactForDetails: 'Please contact our sales representative for detailed information and technical sheets.',

        // Blog & Comments
        allCategories: 'All',
        readMore: 'Read More',
        backToBlog: 'Back to All Posts',
        postNotFound: 'Post not found.',
        commentsTitle: 'Comments',
        leaveCommentTitle: 'Leave a Comment',
        commentLabel: 'Your Comment',
        submitCommentButton: 'Submit Comment',
        noCommentsMsg: 'No comments yet. Be the first to comment!'
    }
};

export const CORPORATE_CONTENT = {
    header: {
        title: "Kurumsal Kimliğimiz",
        subtitle: "Yenilikçi vizyonumuz ve sarsılmaz değerlerimizle tanışın."
    },
    about: {
        title: "Hakkımızda",
        content: [
            "İNTER AKDENİZ ALÜMİNYUM, 20 yılı aşkın sektör tecrübesiyle alüminyum ve PVC sistemleri alanında sektörün global standartlarda hizmet veren öncü firmalarından biri olarak faaliyet göstermektedir. Kurulduğumuz günden bu yana, mimari projelerde estetik, fonksiyonellik ve dayanıklılığı bir araya getiren çözümler sunmayı ilke edindik.",
            "Uzman mühendis ve montaj kadromuzla, en son teknolojiye sahip makine parkurumuzda, alüminyum doğrama, cephe giydirme, cam balkon, pergola ve otomasyon sistemleri gibi geniş bir yelpazede üretim yapıyoruz. Her projeyi, müşterilerimizin beklentilerini aşan bir kalite anlayışıyla, zamanında ve eksiksiz teslim etme prensibiyle yönetiyoruz."
        ]
    },
    vision: {
        title: "Vizyonumuz",
        content: [
            "Sektördeki yenilikleri yakından takip ederek ve sürekli gelişimi hedefleyerek, Türkiye'de ve uluslararası pazarda alüminyum sistemleri denildiğinde akla gelen ilk markalardan biri olmaktır.",
            "Sürdürülebilir ve çevre dostu üretim tekniklerini benimseyerek, gelecek nesillere daha yaşanabilir yapılar bırakmayı hedeflerken, teknoloji ve tasarımı birleştirerek mimariye ilham veren, öncü ve yenilikçi çözümler sunmak en temel vizyonumuzdur. Müşterilerimiz ve iş ortaklarımız için sadece bir tedarikçi değil, aynı zamanda güvenilir bir çözüm ortağı olarak anılmak istiyoruz."
        ]
    },
    mission: {
        title: "Misyonumuz",
        content: [
            "En yüksek kalitede hammadde ve en ileri teknolojiyi kullanarak, müşterilerimizin ihtiyaçlarına özel, estetik, güvenli ve uzun ömürlü alüminyum sistemleri üretmek ve uygulamaktır.",
            "Bu süreçte, çalışanlarımızın gelişimine yatırım yaparak, iş sağlığı ve güvenliği standartlarına tavizsiz uyarak ve tüm paydaşlarımızla şeffaf ve dürüst bir iletişim kurarak, topluma ve çevreye karşı sorumluluklarımızı eksiksiz yerine getirmeyi taahhüt ederiz. Müşteri memnuniyetini her zaman en üst seviyede tutarak, projelerine değer katmak ve kalıcı eserler bırakmak varlık sebebimizdir."
        ]
    }
};

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
    { name: 'Ana Sayfa', page: 'Ana Sayfa' },
    { 
        name: 'Kurumsal', 
        page: 'Kurumsal',
        subLinks: [
            {name: 'Hakkımızda', id: 'hakkimizda', page: 'Kurumsal'}, 
            {name: 'Vizyonumuz', id: 'vizyonumuz', page: 'Kurumsal'}, 
            {name: 'Misyonumuz', id: 'misyonumuz', page: 'Kurumsal'}
        ] 
    },
    { 
        name: 'Ürünlerimiz',
        page: 'Ürünlerimiz',
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
    { name: 'İş Ortaklarımız', page: 'İş Ortaklarımız' },
    { name: 'Referanslarımız', page: 'Referanslarımız' },
    { name: 'Medya', page: 'Medya' },
    { name: 'Blog', page: 'Blog' },
    { name: 'İletişim', page: 'İletişim' },
];

export const PRODUCTS: Product[] = [
    { name: "Aldoks Serisi", description: "Ekonomik, hafif ve geniş kullanım alanına sahip, vitrin ve kapı uygulamaları için ideal yalıtımsız doğrama sistemi.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" },
    { name: "C60 Yalıtımlı Seri", description: "Yüksek ısı ve ses yalıtımı sağlayan, enerji tasarruflu binalar için tasarlanmış polyamid bariyerli kapı ve pencere sistemi.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
    { name: "Sistem Serisi (Işıklık)", description: "Çatı ışıklıkları ve kış bahçesi tavanları için özel tasarlanmış, su tahliye kanallı ve sızdırmazlık garantili profil sistemi.", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Sürme (Sliding) Serisi", description: "Dar alanlarda maksimum kullanım sağlayan, balkon ve teras ve geniş açıklıklar için geliştirilmiş sürme doğrama profilleri.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
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
                    features: ["6 odacıklı profil yapısı", "3 contalı sızdırmazlık sistemi", "Yüksek rüzgar direnci"],
                    specifications: [{ label: "Profil Genişliği", value: "80 mm" }, { label: "Uf Değeri", value: "0.95 W/m2K" }]
                }
            }
        ]
    },
    {
        id: "nirvana",
        title: "Nirvana Serisi",
        items: [
             {
                name: "Nirvana Premium",
                description: "Maksimum performans ve estetik arayanlar için geliştirilmiş, üst segment PVC pencere sistemi.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: ["A Sınıfı et kalınlığı", "44 mm'ye kadar cam uygulanabilme", "Üstün ses yalıtımı"],
                    specifications: [{ label: "Odacık Sayısı", value: "6" }, { label: "Conta", value: "EPDM / TPE" }]
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
                description: "70 mm profil genişliği ve 5 odacıklı yapısıyla ideal ısı ve ses yalıtımı sağlayan ekonomik seri.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["5 odacıklı tasarım", "Dekoratif cam çıtası seçenekleri", "Yüksek su sızdırmazlığı"],
                    specifications: [{ label: "Profil Genişliği", value: "70 mm" }, { label: "Sınıf", value: "B Sınıfı (TS EN 12608)" }]
                }
            }
        ]
    },
    {
        id: "surgulu",
        title: "Sürgülü Kapı & Pencere Sistemleri",
        items: [
            {
                name: "Pimapen Infinity",
                description: "Geniş açıklıklar için tasarlanmış, kaldır-sür (Hebeşbeş) özellikli yüksek yalıtımlı PVC sürme sistemi.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
                 technicalDetails: {
                    features: ["Kolay ve sessiz çalışma", "Yüksek hava ve su yalıtımı", "Geniş manzaralı açıklıklar"],
                    specifications: [{ label: "Kasa Genişliği", value: "170 mm" }, { label: "Kanat Genişliği", value: "70 mm" }]
                }
            },
            {
                name: "Dynamic Sürme",
                description: "Basit sürme mantığıyla çalışan, balkon ve teraslar için pratik ve ekonomik çözüm.",
                image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["Çift raylı kasa", "Özel fırça conta sistemi", "Sineklik entegrasyonu"],
                    specifications: [{ label: "Kasa Genişliği", value: "120 mm" }, { label: "Cam Kalınlığı", value: "4-20-24 mm" }]
                }
            }
        ]
    },
    {
        id: "panjur-kepenk",
        title: "Panjur & Kepenk Sistemleri",
        items: [
            {
                name: "Pimapen Panjur",
                description: "Pencerelerinizle tam uyumlu, ısı ve ses yalıtımı na katkı sağlayan, manuel veya motorlu panjur sistemleri.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: ["PVC ve Alüminyum lamel seçenekleri", "Gizli kutu detayı", "Uzaktan kumanda imkanı"],
                    specifications: [{ label: "Kutu Boyutları", value: "165x165 / 200x200 mm" }, { label: "Lamel", value: "37 mm / 55 mm" }]
                }
            }
        ]
    },
    {
        id: "donanim",
        title: "Pencere ve Kapı Donanım Sistemleri",
        items: [
             {
                name: "Pimapen Donanımları",
                description: "Pimapen sistemlerinin performansını artıran, güvenlikli ve uzun ömürlü ispanyolet, kol ve menteşe grupları.",
                image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["Paslanmaya karşı direnç", "Çocuk emniyet kilidi", "Hırsızlığa karşı güvenlikli mantar başlı pimler"],
                    specifications: [{ label: "Malzeme", value: "Paslanmaz Çelik / Zamak" }, { label: "Garanti", value: "2 Yıl" }]
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
             { type: 'h2', text: "Neden Alüminyum Cephe?" },
             { type: 'p', text: "Alüminyum, yüksek korozyon direnci ve hafif yapısı sayesinde bina yükünü artırmadan uzun ömürlü bir çözüm sunar. Ayrıca geri dönüştürülebilir olması, sürdürülebilir mimari projelerde tercih sebebidir." }
        ]
    },
    {
        slug: "kis-bahcesi-ile-dort-mevsim-konfor",
        title: "Kış Bahçesi ile Dört Mevsim Konfor",
        author: "İnter Akdeniz Ekibi",
        date: "10 Aralık 2023",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
        category: "Doğrama Çözümler",
        excerpt: "Evinizin bahçesini veya terasını kışın da kullanmak ister misiniz? Kış bahçesi sistemleri ile yaşam alanınızı genişletin ve doğayla iç içe olun.",
        content: [
            { type: 'p', text: "Kış bahçeleri, cam ve alüminyum profillerin mükemmel uyumuyla oluşturulan, ısı yalıtımlı özel yaşam alanlarıdır. Yağmur, kar veya rüzgar demeden dış mekan keyfini iç mekana taşırsınız." },
            { type: 'h2', text: "Isı Yalıtımlı Sistemlerin Önemi" },
            { type: 'p', text: "Kış bahçesi yaptırırken dikkat edilmesi gereken en önemli husus, kullanılan profillerin ve camların ısı yalıtım değerleridir. İnter Akdeniz olarak, yüksek yalıtımlı alüminyum sistemler kullanarak enerji tasarrufu sağlıyoruz." }
        ]
    },
    {
        slug: "pvc-ve-aluminyum-dograma-farklari",
        title: "PVC ve Alüminyum Doğrama Arasındaki Farklar",
        author: "Teknik Uzman Mehmet Demir",
        date: "22 Ocak 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        category: "Teknik Bilgiler",
        excerpt: "Pencere ve kapı seçimi yaparken PVC mi yoksa alüminyum mu tercih etmelisiniz? İki malzemenin avantajlarını ve dezavantajlarını sizin için karşılaştırdık.",
        content: [
            { type: 'p', text: "İnşaat sektöründe en çok kullanılan iki doğrama malzemesi PVC ve alüminyumdur. Her ikisinin de kendine özgü avantajları vardır ve proje gereksinimlerine göre seçim yapılmalıdır." },
            { type: 'h3', text: "Alüminyum Doğrama" },
            { type: 'p', text: "Alüminyum, daha geniş açıklıkları geçebilen, daha ince profil kesitlerine sahip ve çok daha uzun ömürlü bir malzemedir. Renk solması yapmaz ve modern mimaride estetik bir görünüm sunar." },
            { type: 'h3', text: "PVC Doğrama" },
            { type: 'p', text: "PVC ise genellikle daha ekonomik bir çözüm sunar ve yüksek ısı yalıtım değerlerine sahiptir. Ancak büyük açıklıklarda alüminyum kadar rijit değildir." }
        ]
    },
    {
        slug: "linea-rossa-neden-tercih-edilmeli",
        title: "Linea Rossa: Neden Tercih Edilmeli?",
        author: "Mimar Ayşe Yılmaz",
        date: "05 Şubat 2024",
        image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3100.webp",
        category: "Doğrama Çözümler",
        excerpt: "İtalyan tasarımı ve üstün mühendisliğin birleşimi Linea Rossa sistemleri, projelerinize nasıl değer katar? Özellikleri ve avantajlarını inceliyoruz.",
        content: [
            { type: 'p', text: "Linea Rossa, sadece bir alüminyum profil değil, bir yaşam tarzıdır. Minimalist tasarımı, yüksek taşıma kapasitesi ve mükemmel yalıtım değerleri ile lüks konut projelerinin vazgeçilmezidir." },
            { type: 'p', text: "Özellikle sürme sistemlerde sunduğu konfor ve estetik, mekanlarınızın değerini artırır. Paslanmaz çelik raylar üzerinde sessizce hareket eden kanatlar, kullanıcı deneyimini üst seviyeye taşır." }
        ]
    }
];

export const MEDIA_IMAGES: MediaImage[] = [
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0003.jpg?raw=true', alt: 'Proje Uygulaması 1' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0004.jpg?raw=true', alt: 'Proje Uygulaması 2' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0005.jpg?raw=true', alt: 'Proje Uygulaması 3' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0006.jpg?raw=true', alt: 'Proje Uygulaması 4' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0007.jpg?raw=true', alt: 'Proje Uygulaması 5' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0008.jpg?raw=true', alt: 'Proje Uygulaması 6' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0009.jpg?raw=true', alt: 'Proje Uygulaması 7' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0010.jpg?raw=true', alt: 'Proje Uygulaması 8' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0011.jpg?raw=true', alt: 'Proje Uygulaması 9' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0012.jpg?raw=true', alt: 'Proje Uygulaması 10' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0013.jpg?raw=true', alt: 'Proje Uygulaması 11' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0014.jpg?raw=true', alt: 'Proje Uygulaması 12' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0015.jpg?raw=true', alt: 'Proje Uygulaması 13' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0016.jpg?raw=true', alt: 'Proje Uygulaması 14' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0017.jpg?raw=true', alt: 'Proje Uygulaması 15' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0018.jpg?raw=true', alt: 'Proje Uygulaması 16' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0019.jpg?raw=true', alt: 'Proje Uygulaması 17' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0020.jpg?raw=true', alt: 'Proje Uygulaması 18' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0021.jpg?raw=true', alt: 'Proje Uygulaması 19' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0022.jpg?raw=true', alt: 'Proje Uygulaması 20' },
];
