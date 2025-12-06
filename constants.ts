
import type { NavLink, Product, Reference, BlogPost, Partner, ProductSection, MediaImage, ProductCategory } from './types';

// UI TRANSLATIONS & STATIC CONTENT
export const UI_LABELS = {
    TR: {
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
        productsPageTitle: 'Ürünlerimiz',
        productsPageSubtitle: 'Kalite, estetik ve dayanıklılığı bir araya getiren sistem çözümlerimiz.',
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
        techDetailsTitle: 'Teknik Detaylar',
        productDescTitle: 'Ürün Açıklaması',
        featuresTitle: 'Ürünün Kimliğini Yansıtan Karakteristik Özellikler',
        specsTitle: 'Sistemin Teknik Spesifikasyonları',
        closeButton: 'Kapat',
        detailInfoButton: 'Detaylı Bilgi',
        techDataPending: 'Bu ürün için detaylı teknik veri girişi hazırlanmaktadır.',
        contactForDetails: 'Detaylı bilgi ve teknik föyler için lütfen satış temsilcimiz ile iletişime geçiniz.',
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
        productsPageTitle: 'Our Products',
        productsPageSubtitle: 'System solutions combining quality, aesthetics, and durability.',
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
        techDetailsTitle: 'Technical Details',
        productDescTitle: 'Product Description',
        featuresTitle: 'Characteristic Features Reflecting Product Identity',
        specsTitle: 'Technical Specifications of the System',
        closeButton: 'Close',
        detailInfoButton: 'Detailed Info',
        techDataPending: 'Detailed technical data entry is being prepared for this product.',
        contactForDetails: 'Please contact our sales representative for detailed information and technical sheets.',
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

export const KEPENK_CONTENT = {
    TR: [
        {
            title: "Yüksek Güvenlik ve Caydırıcılık",
            text: "Kepenkler, sağlam ve dayanıklı yapılarıyla hırsızlık gibi dış müdahalelere karşı caydırıcı bir bariyer oluşturur. Kapalı konumdayken iç mekanı tamamen gizleyerek tam mahremiyet sağlar ve iş yeriniz veya garajınız için vazgeçilmez bir güvenlik katmanı ekler."
        },
        {
            title: "Dış Etkenlere Karşı Tam Koruma",
            text: "Kepenk sistemleri, sadece izinsiz girişleri değil, aynı zamanda olumsuz hava koşullarını da engeller. Yağmur, rüzgar ve toz gibi yıpratıcı etkenlere karşı tam koruma sağlar. Ayrıca güneşin zararlı UV ışınlarını bloke ederek araçlarınızı, ürünlerinizi ve diğer değerli eşyalarınızı solma ve hasar görme riskine karşı korur."
        },
        {
            title: "Sağlam Yapı ve Fonksiyonel Tasarım",
            text: "Sistemlerimizde kullanılan 77 mm ve 95 mm gibi geniş lamel seçenekleri, kepenklerin dayanıklılığını ve güvenlik seviyesini artırır. Bu sağlam yapı, uzun ömürlü ve sorunsuz bir kullanım sunar. Fonksiyonel tasarımı, ticari alanların ve garajların ihtiyaçlarına tam uyum sağlayarak hem estetik hem de pratik bir çözüm oluşturur."
        }
    ],
    EN: [
        {
            title: "High Security and Deterrence",
            text: "Shutters act as a deterrent barrier against external interventions such as theft with their robust and durable structures. They provide complete privacy by completely hiding the interior when closed and add an indispensable security layer for your workplace or garage."
        },
        {
            title: "Full Protection Against External Factors",
            text: "Shutter systems prevent not only unauthorized access but also adverse weather conditions. They provide full protection against abrasive factors such as rain, wind, and dust. They also block the sun's harmful UV rays, protecting your vehicles, products, and other valuable items against the risk of fading and damage."
        },
        {
            title: "Robust Structure and Functional Design",
            text: "Wide slat options such as 77 mm and 95 mm used in our systems increase the durability and security level of the shutters. This robust structure offers long-lasting and trouble-free use. Its functional design fits perfectly with the needs of commercial areas and garages, creating both an aesthetic and practical solution."
        }
    ]
};

export const PERGOLA_CONTENT = {
    TR: {
        description: " Pergola Sistemleri, dış mekanlarda estetik bir görsel sunarken, dayanıklılık ve fonksiyonellikten ödün vermez. Ürünlerimiz, yüksek mukavemetli alüminyum alaşımlı malzemelerden üretilmiş olup, elektrostatik toz boya ile kaplanarak uzun ömürlü ve dış etkenlere karşı dayanıklı hale getirilmiştir. Alüminyum ekstrüzyon profiller, inoks parçalar ve blockout kumaş kullanılarak tasarlanan pergola sistemleri, her türlü hava koşuluna karşı güçlü bir dayanıklılık sergiler.",
        features: [
            "Yüksek Koruma ve Dayanıklı Malzeme",
            "İleri Teknoloji ve Fonksiyonellik",
            "Estetik Tasarım ve Dört Mevsim Konfor"
        ]
    },
    EN: {
        description: " Pergola Systems offer an aesthetic visual in outdoor spaces without compromising durability and functionality. Our products are produced from high-strength aluminum alloy materials and are coated with electrostatic powder paint, making them long-lasting and resistant to external factors. Designed using aluminum extrusion profiles, inox parts, and blockout fabric, pergola systems exhibit strong durability against all weather conditions.",
        features: [
            "High Protection and Durable Material",
            "Advanced Technology and Functionality",
            "Aesthetic Design and Four Seasons Comfort"
        ]
    }
};

export const ZIP_PERDE_CONTENT = {
    TR: {
        description: " Zip Perde Sistemleri, 0,5 m ile 6 m aralığında genişlik ölçüleri sunarak, geniş bir uygulama yelpazesi ile kullanıcılara pratik çözümler sağlar. Estetik ve fonksiyonel özellikleri bir araya getiren bu sistemler, uzun ömürlü ve sağlıklı bir kullanım vaat eder.",
        features: [
            "Üstün Rüzgar Direnci ve Dayanıklılık",
            "Çevresel Etkenlere Karşı Tam Koruma",
            "Fonksiyonel Tasarım ile Artan Konfor"
        ]
    },
    EN: {
        description: " Zip Screen Systems provide practical solutions to users with a wide range of applications by offering width dimensions ranging from 0.5 m to 6 m. Combining aesthetic and functional features, these systems promise long-lasting and healthy use.",
        features: [
            "Superior Wind Resistance and Durability",
            "Full Protection Against Environmental Factors",
            "Increased Comfort with Functional Design"
        ]
    }
};

export const SMART_ROOF_CONTENT = {
    TR: {
        description: "Akıllı Çatı, dış mekanlarda açık hava deneyimini optimize etmek amacıyla tasarlanmış, açılır-kapanır tavan sistemidir. Kullanıcıların ihtiyaçlarına göre ayarlanabilen bu sistem, özellikle restoran, kafe, teras gibi alanlarda popüler olup, dış mekanlara fonksiyonellik ve estetik katar.",
        features: [
            "Işık ve Hava Kontrolü",
            "Yüksek Yalıtım ve Sızdırmazlık",
            "Modern ve Estetik Tasarım"
        ]
    },
    EN: {
        description: "Smart Roof is a retractable roof system designed to optimize the outdoor experience in outdoor spaces. Adjustable according to user needs, this system is especially popular in areas such as restaurants, cafes, and terraces, adding functionality and aesthetics to outdoor spaces.",
        features: [
            "Light and Air Control",
            "High Insulation and Sealing",
            "Modern and Aesthetic Design"
        ]
    }
};

export const FACADE_CONTENT = {
    TR: {
        description: "Cephe sistemlerimiz, modern mimarinin vazgeçilmez parçalarından biri olarak, iş merkezleri, rezidanslar, oteller, ofis binaları gibi çeşitli projelerde kullanılmaktadır. Cam cepheler, dış mekan ile iç mekan arasındaki bağlantıyı şık ve fonksiyonel bir şekilde kurarak, binaların estetik görünümünü artırır ve enerji verimliliği sağlar.",
        title: "Tasarım Esnekliği ve Modern Mimari Uyum",
        text: "Bu sistemler, modern mimarinin estetik ve fonksiyonel bir parçasıdır. Mimarların vizyonlarını hayata geçirmek için mükemmel bir araç olup, projeye özel alüminyum profil ve cam seçenekleri ile tamamen özelleştirilebilir. Bu sayede her binanın kimliğine uygun, şık ve çağdaş bir görünüm elde edilir.",
        image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true"
    },
    EN: {
        description: "Our facade systems, as one of the indispensable parts of modern architecture, are used in various projects such as business centers, residences, hotels, and office buildings. Glass facades establish the connection between the exterior and interior in a stylish and functional way, increasing the aesthetic appearance of buildings and providing energy efficiency.",
        title: "Design Flexibility and Modern Architectural Harmony",
        text: "These systems are an aesthetic and functional part of modern architecture. They are an excellent tool for realizing architects' visions and can be fully customized with project-specific aluminum profile and glass options. In this way, a stylish and contemporary look suitable for the identity of each building is obtained.",
        image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true"
    }
};

export const GUILLOTINE_CONTENT = {
    TR: {
        description: "Yaşam alanlarınızı modern bir dokunuşla dönüştürün. Rigel Giyotin Cam, yüksek dayanıklılığa sahip yapısı, 4.50 metreye varan kesintisiz manzarası ve zahmetsiz kullanımıyla öne çıkar. Güvenli zincir sistemi ve kolay temizlik sağlayan akıllı tasarımı ile konfor ve estetiği bir arada sunar.",
        features: [
            {
                title: "Yüksek Mukavemet ve Uzun Ömürlü Kullanım",
                text: " Giyotin Cam Sistemleri, korozyon ve yorulma direncine sahip yüksek kaliteli alüminyumdan, ekstrüzyon yöntemiyle üretilir. Bu özel üretim tekniği, sistemin zorlu hava koşullarına ve yılların getireceği yıpranmalara karşı ilk günkü sağlamlığını korumasını sağlar. Uzun ömürlü yapısı sayesinde mekanlarınıza yıllarca değer katar."
            },
            {
                title: "Panoramik Manzara ve Zahmetsiz Kullanım",
                text: "4.50 metreye varan genişlik seçenekleriyle kesintisiz bir panoramik manzara sunan Rigel, mekanlarınıza ferahlık ve modern bir dokunuş getirir. Geliştirilmiş tekerlek sistemi, sürtünmeyi en aza indirerek devasa cam panellerin bile zahmetsizce hareket etmesini sağlar. Bu sayede hem kullanım kolaylığı artar hem de sistemin yıpranma payı minimuma iner."
            },
            {
                title: "Üst Düzey Güvenlik ve Kolay Temizlik",
                text: "Güvenliğiniz bizim için önceliklidir.  Giyotin Cam Sistemleri, kopma ve sarkmalara karşı dayanıklı özel zincir sistemi ile tam koruma sağlar. Ayrıca, el sıkışmalarını önlemek için tasarlanmış özel trabzan profili ile aileniz için güvenli bir ortam oluşturur. \"Silinebilir Giyotin\" modelinde ise 18 dereceye kadar açılabilen vasistas kanatlar sayesinde, dış cepheye çıkma tehlikesi olmadan camlarınızı kolayca ve güvenle temizleyebilirsiniz."
            }
        ],
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/giyotin-cam-balkon-sistemleri.jpg?raw=true"
    },
    EN: {
        description: "Transform your living spaces with a modern touch. Rigel Guillotine Glass stands out with its high-durability structure, uninterrupted view up to 4.50 meters, and effortless use. It offers comfort and aesthetics together with its safe chain system and smart design that provides easy cleaning.",
        features: [
            {
                title: "High Strength and Long-Lasting Use",
                text: "Rigel Guillotine Glass Systems are produced from high-quality aluminum with corrosion and fatigue resistance by extrusion method. This special production technique ensures that the system maintains its robustness against harsh weather conditions and wear over the years. Thanks to its long-lasting structure, it adds value to your spaces for years."
            },
            {
                title: "Panoramic View and Effortless Use",
                text: "Offering an uninterrupted panoramic view with width options up to 4.50 meters, Rigel brings spaciousness and a modern touch to your spaces. The improved wheel system minimizes friction, allowing even huge glass panels to move effortlessly. This increases ease of use and minimizes wear and tear on the system."
            },
            {
                title: "Top Level Security and Easy Cleaning",
                text: "Your safety is our priority. Rigel Guillotine Glass Systems provide full protection with a special chain system resistant to breaking and sagging. In addition, it creates a safe environment for your family with a special handrail profile designed to prevent hand jamming. In the \"Wipeable Guillotine\" model, thanks to the transom sashes that can be opened up to 18 degrees, you can clean your glass easily and safely without the danger of going out to the exterior."
            }
        ],
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/giyotin-cam-balkon-sistemleri.jpg?raw=true"
    }
};

export const COMPOSITE_CONTENT = {
    TR: {
        description: "Kompozit Panel, ön işlem yapılmış boyalı iki alüminyum levha arasına düşük yoğunluklu polietilen çekirdeğin ileri teknoloji kullanılarak yapıştırılmasıyla üretilir. Bu özel üretim yöntemi, panelin dayanıklılığını artırırken aynı zamanda hafif olmasını sağlar. Rigel Kompozit Panel'ler, yüksek dayanım özellikleri ve estetik görünümleri ile pek çok yapı türünde tercih edilmektedir.",
        features: [
            {
                title: "Dayanıklılık ve Hafiflik",
                text: "Kompozit Panel, iki alüminyum levha arasına yerleştirilen polietilen çekirdek sayesinde hem çok sağlam bir yapıya sahiptir hem de oldukça hafiftir. Bu özelliği, binalara ekstra yük bindirmeden uzun ömürlü bir koruma sağlar. Hafifliği sayesinde montajı kolay ve hızlıdır, bu da projelerde iş gücünden ve zamandan tasarruf ettirir."
            },
            {
                title: "Estetik ve Esnek Tasarım",
                text: "Panellerin pürüzsüz ve üstün düzgünlüğe sahip yüzeyi, yapılara modern ve şık bir görünüm kazandırır. Farklı renk ve desen seçenekleri sunması, her türlü mimari tarza kolayca uyum sağlamasına olanak tanır. Bu sayede hem estetik açıdan zengin hem de bütünlüklü dış cepheler oluşturulabilir."
            },
            {
                title: "Çevre Dostu ve Sürdürülebilirlik",
                text: "Bu paneller, düşük bakım gereksinimleri ve kolay temizlenebilir yüzeyleri sayesinde uzun vadede işletme maliyetlerini azaltır. Aynı zamanda, üretiminde kullanılan alüminyum ve polietilen malzemelerin geri dönüştürülebilir olması, onu çevre dostu ve sürdürülebilir bir yapı malzemesi yapar."
            }
        ],
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/aluminyum-kompozit-sistemler.jpg?raw=true"
    },
    EN: {
        description: " Composite Panel is produced by bonding a low-density polyethylene core between two pre-painted aluminum sheets using advanced technology. This special production method increases the durability of the panel while also making it lightweight. Rigel Composite Panels are preferred in many building types with their high strength properties and aesthetic appearance.",
        features: [
            {
                title: "Durability and Lightness",
                text: "Composite Panel has a very robust structure and is quite light thanks to the polyethylene core placed between two aluminum sheets. This feature provides long-lasting protection without placing extra load on buildings. Thanks to its lightness, installation is easy and fast, which saves labor and time in projects."
            },
            {
                title: "Aesthetic and Flexible Design",
                text: "The smooth and superior flatness surface of the panels gives structures a modern and stylish look. Offering different color and pattern options allows it to easily adapt to any architectural style. In this way, both aesthetically rich and integrated exteriors can be created."
            },
            {
                title: "Eco-Friendly and Sustainability",
                text: "These panels reduce operating costs in the long run thanks to their low maintenance requirements and easy-to-clean surfaces. At the same time, the fact that the aluminum and polyethylene materials used in its production are recyclable makes it an environmentally friendly and sustainable building material."
            }
        ],
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/aluminyum-kompozit-sistemler.jpg?raw=true"
    }
};

export const SMART_ROOF_MODELS = [
    { 
        name: "Asteria", 
        subtitle: "Makaslı Akıllı Çatı", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_Mds0nGvQWnkB4y4qXjVe9T9Qqgqzym7JhhGDID2bN_G7Y7X" 
    },
    { 
        name: "Galene", 
        subtitle: "Tiltli Akıllı Çatı", 
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREi3kpFLFJxhN5RKzqDK75tva2GZBtjmIrcTaYeKGCZd_Cg38k" 
    }
];

export const PERGOLA_MODELS = [
    { 
        name: "Pergola", 
        subtitle: "Otomatik Tente Sistemi", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/athena-modeli.jpg",
        specs: [
            { label: "En", value: "6 m" },
            { label: "İleri Açılım", value: "5,5 m" },
            { label: "Raylar Arası Maks", value: "3,5 m" },
            { label: "Ray Tipi", value: "70 x 150" },
            { label: "Direk", value: "100x100" },
            { label: "Oluk", value: "15x15" }
        ]
    },
    { 
        name: "Askılı Pergola", 
        subtitle: "Askılı Tente Sistemi", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/demeter-modeli.jpg",
        specs: [
            { label: "En (Maks)", value: "9 m" },
            { label: "İleri Açılım", value: "5 m" },
            { label: "Raylar Arası Maks", value: "3,5 m" },
            { label: "Ray Tipi", value: "70 x 150" },
            { label: "Oluk", value: "15 x 15" }
        ]
    },
    { 
        name: "T Modül Pergola", 
        subtitle: "Bağımsız Pergola Sistemi", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/poseidon-modeli.jpg",
        specs: [
            { label: "En (Maks)", value: "6 m" },
            { label: "İleri Açılım", value: "5,5 m" },
            { label: "Raylar Arası Maks", value: "3,5 m" },
            { label: "Ray Tipi", value: "70 x 150" },
            { label: "Direk", value: "100x100" },
            { label: "Oluk", value: "15x15" }
        ]
    },
    { 
        name: "T Modül Askılı Pergola", 
        subtitle: "Çift Yönlü Askılı Sistem", 
        image: "https://rigelaluminyum.com/images/urun-gruplari/pergola-sistemleri/artemis-modeli.jpg",
        specs: [
            { label: "En", value: "6 m" },
            { label: "İleri Açılım", value: "5,5 m" },
            { label: "Raylar Arası Maks", value: "3,5 m" },
            { label: "Ray Tipi", value: "70 x 150" },
            { label: "Oluk", value: "15 x 15" }
        ]
    }
];

export const ZIP_PERDE_MODELS = [
    { name: "Selene", subtitle: "Zip Perde", image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/zip_05-1.jpg?raw=true" }
];

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

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    {
        id: "linea-rossa-cat",
        title: "LINEA ROSSA Sistemleri",
        image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3100.webp",
        description: "İtalyan tasarımı ve üstün teknolojinin buluştuğu nokta. Yüksek performanslı sürme ve cephe sistemleri.",
        page: "Linea Rossa"
    },
    {
        id: "pimapen-cat",
        title: "Pimapen Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
        description: "Pencerenin adı, kalitenin ve konforun adresi. Üstün ısı ve ses yalıtımı sağlayan PVC sistemler.",
        page: "Pimapen"
    },
    {
        id: "aluminyum-mimari",
        title: "Alüminyum Mimari Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/aluminyum-dograma-sistemleri.jpg?raw=true",
        description: "Modern yapılar için estetik, dayanıklı ve yüksek performanslı alüminyum doğrama çözümleri.",
        page: "Alüminyum"
    },
    {
        id: "panjur",
        title: "Panjur Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true",
        description: "Güneş kontrolü, güvenlik ve ısı yalıtımı sağlayan otomatik ve manuel panjur sistemleri.",
        page: "Panjur"
    },
    {
        id: "kepenk",
        title: "Kepenk Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/kepenk-sistemleri.jpg?raw=true",
        description: "İş yerleri ve konutlar için maksimum güvenlik sunan estetik sarmal kepenk çözümleri.",
        page: "Kepenk"
    },
    {
        id: "pergola",
        title: "Pergola ve Tente Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pergola-sistemler.jpg?raw=true",
        description: "Dört mevsim kullanılabilen, ışıklı ve motorlu biyoklimatik pergola sistemleri.",
        page: "Pergola"
    },
    {
        id: "zip-perde",
        title: "Zip Perde Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/zip_05-1.jpg?raw=true",
        description: "Rüzgara dayanıklı, modern dış cephe gölgelendirme ve sineklik çözümleri.",
        page: "ZipPerde"
    },
    {
        id: "akilli-cati",
        title: "Akıllı Çatı Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/Makas_Akilli_Cati-e1749810492326.jpg?raw=true",
        description: "Açılır kapanır hareketli panel teknolojisi ile mekanlarınızı gökyüzüyle buluşturun.",
        page: "AkıllıÇatı"
    },
    {
        id: "cephe",
        title: "Cephe Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true",
        description: "Silikon, kapaklı ve yarı kapaklı giydirme cephe sistemleri ile modern bina kabukları.",
        page: "Cephe"
    },
    {
        id: "cam-balkon",
        title: "Cam Balkon Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/cam-balkon-sistemleri.jpg?raw=true",
        description: "Katlanır ve sürme cam sistemleri ile balkonlarınızı dört mevsim yaşam alanına dönüştürün."
    },
    {
        id: "giyotin",
        title: "Giyotin Cam Balkon Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/giyotin-cam-balkon-sistemleri.jpg?raw=true",
        description: "Dikey hareket eden, kumandalı ve motorlu küpeşte cam sistemleri.",
        page: "Giyotin"
    },
    {
        id: "kompozit",
        title: "Alüminyum Kompozit Sistemler",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/aluminyum-kompozit-sistemler.jpg?raw=true",
        description: "Yapılarınıza modern bir görünüm kazandıran, uzun ömürlü cephe kaplama panelleri.",
        page: "Kompozit"
    },
    {
        id: "korkuluk",
        title: "Korkuluk Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-korkuluk.jpg?raw=true",
        description: "Merdiven, balkon ve teraslar için güvenli ve estetik alüminyum ve cam korkuluklar."
    },
    {
        id: "pvc",
        title: "PVC Kapı, Pencere Sistemleri",
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
        description: "Yüksek ısı ve ses yalıtımı sağlayan, enerji tasarruflu PVC doğrama çözümleri."
    },
];

export const REFERENCES: Reference[] = [
    { name: "Simit & Smile", logo: "https://github.com/xbarisx2/logo/blob/main/simit.jpg?raw=true" },
    { name: "YRS Global", logo: "https://github.com/xbarisx2/logo/blob/main/yrs%20global.jpg?raw=true" },
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
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/bottega.jpg?raw=true', alt: 'Proje Uygulaması 21' }
];

export const LINEA_ROSSA_SECTIONS: ProductSection[] = [
    {
        id: "yalitimli-surme",
        title: "Yalıtımlı Sürme Sistemleri",
        items: [
            {
                name: "LR-3100",
                description: "Yalıtımlı Sürme Sistemi: Yüksek ısı bariyerli, modern mimari için ideal sürme sistemi.",
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3100.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Daha İyi Su, Hava Yalıtımı ve Enerji Tasarrufu",
                        "Üretim ve Montaj Kolaylığı",
                        "%50 Azaltılmış Orta Kenet ile Minimal Mimari Çözüm",
                        "Sistem İçinde Çözülmüş Özel Sineklik Tasarımı",
                        "Projeye Uygun Özel tasarım ve Seçenekleri",
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
                        { label: "Isı Yalıtımı", value: "EN ISO 10077-2: Uf=3,8 W/m2K" }
                    ]
                }
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
                image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-2200.jpg?raw=true",
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
        title: "Nirvana Serisi",
        items: [
            {
                name: "Nirvana Premium",
                description: "Maksimum performans ve estetik arayanlar için geliştirilmiş üst segment PVC pencere sistemi. Üstün ısı ve ses yalıtımı sağlar.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "A Sınıfı et kalınlığı",
                        "44 mm cama kadar uygulanabilme",
                        "Üstün ses yalıtımı"
                    ],
                    specifications: [
                        { label: "Odacık Sayısı", value: "6" },
                        { label: "Conta", value: "EPDM / TPE" }
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
                description: "70 mm profil genişliği ve 5 odacıklı yapısı ile ideal ısı ve ses yalıtımı sağlayan ekonomik ve estetik seri.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "5 odacıklı tasarım",
                        "Dekoratif çıta seçenekleri",
                        "Yüksek su sızdırmazlığı"
                    ],
                    specifications: [
                        { label: "Profil Genişliği", value: "70 mm" },
                        { label: "Sınıf", value: "B Sınıfı (TS EN 12608)" }
                    ]
                }
            }
        ]
    },
    {
        id: "surgulu",
        title: "Sürme Kapı & Pencere Sistemleri",
        items: [
            {
                name: "Pimapen Infinity",
                description: "Geniş açıklıklar için tasarlanmış, kaldır-sür (Hebeschiebe) özellikli yüksek yalıtımlı PVC sürme sistemi.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "Kolay ve sessiz çalışma",
                        "Yüksek hava ve su yalıtımı",
                        "Geniş manzara açıklıkları"
                    ],
                    specifications: [
                        { label: "Kasa Genişliği", value: "170 mm" },
                        { label: "Kanat Genişliği", value: "70 mm" }
                    ]
                }
            },
            {
                name: "Dynamic Sürme",
                description: "Basit sürme mantığıyla çalışan, balkon ve teraslar için pratik ve ekonomik çözüm.",
                image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: [
                        "Çift raylı kasa",
                        "Özel kıl fitil sistemi",
                        "Sineklik entegrasyonu"
                    ],
                    specifications: [
                        { label: "Kasa Genişliği", value: "120 mm" },
                        { label: "Cam Kalınlığı", value: "4-20-24 mm" }
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
                name: "Pimapen Panjur",
                description: "Pencerelerinizle tam uyumlu, ısı ve ses yalıtımına katkı sağlayan, manuel veya motorlu panjur sistemleri.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "PVC ve Alüminyum lamel seçenekleri",
                        "Gizli kutu detayı",
                        "Uzaktan kumanda imkanı"
                    ],
                    specifications: [
                        { label: "Kutu Ölçüleri", value: "165x165 / 200x200 mm" },
                        { label: "Lamel", value: "37 mm / 55 mm" }
                    ]
                }
            }
        ]
    },
    {
        id: "donanim",
        title: "Pencere ve Kapı Donanımları",
        items: [
             {
                name: "Pimapen Donanım",
                description: "Pencere sistemlerinin performansını artıran, güvenli ve uzun ömürlü ispanyolet, kol ve menteşe grupları.",
                image: "https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0018.jpg?raw=true",
                technicalDetails: {
                    features: [
                        "Paslanmaya karşı direnç",
                        "Çocuk emniyet kilidi",
                        "Hırsızlığa karşı güvenlikli mantar başlıklar"
                    ],
                    specifications: [
                        { label: "Malzeme", value: "Paslanmaz Çelik / Zamak" },
                        { label: "Garanti", value: "2 Yıl" }
                    ]
                }
            }
        ]
    }
];

export const ALUMINUM_SECTIONS: ProductSection[] = [
    {
        id: "surme-sistemler-rg",
        title: "Sürme Sistemler (RG Serisi)",
        items: [
             {
                name: "RG 100 Sürme Sistem",
                description: "Ekonomik ve pratik yalıtımsız sürme sistemi.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/surme-sistemler/rg-100.jpg",
                technicalDetails: {
                    features: [
                        "En iyi su, hava yalıtımı ve enerji tasarrufu",
                        "Üretim ve montaj kolaylığı",
                        "Müşteri isteğine bağlı sineklik kasa profili",
                        "Paslanmaz çelik ray ve bu ray üzerinde hareket eden özel rulmanlarla yüksek dayanım ve kullanım konforu",
                        "Özel olarak tasarlanmış yüksek dayanımlı çok noktadan kilitleme sistemi",
                        "Yalıtımı minimalize etmek için kanat birleşimi sağlayan orta kenet tasarımı ve kıl fitiller",
                        "Farklı renk seçenekleri ile alüminyumun modern ve estetik görünümü"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "75 mm" },
                        { label: "Kanat Genişliği", value: "31,9 mm" },
                        { label: "Orta Kanat Genişliği", value: "38,5 mm" },
                        { label: "Kasa Yüksekliği", value: "44 mm" },
                        { label: "Cam Kalınlığı", value: "20 - 22 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120 kg" }
                    ]
                }
            },
            {
                name: "RG 200 Sürme Sistem",
                description: "Yalıtımsız, montaj kolaylığı sağlayan sürme sistemi.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/surme-sistemler/rg-200.jpg",
                technicalDetails: {
                    features: [
                        "Üretim ve montaj kolaylığı",
                        "Müşteri isteğine bağlı sineklik kasa profili",
                        "Paslanmaz çelik ray ve bu ray üzerinde hareket eden özel rulmanlarla yüksek dayanım ve kullanım konforu",
                        "Özel olarak tasarlanmış yüksek dayanımlı çok noktadan kilitleme sistemi",
                        "Yalıtımı minimalize etmek için kanat birleşimi sağlayan orta kenet tasarımı ve kıl fitiller",
                        "Farklı renk seçenekleri ile alüminyumun modern ve estetik görünümü"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "75 mm" },
                        { label: "Kanat Genişliği", value: "31,9 mm" },
                        { label: "Orta Kanat Genişliği", value: "38,5 mm" },
                        { label: "Kasa Yüksekliği", value: "44 mm" },
                        { label: "Cam Kalınlığı", value: "20 - 22 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120 kg" }
                    ]
                }
            },
            {
                name: "RG 300 Sürme Sistem",
                description: "Isı yalıtımlı, yüksek performanslı sürme doğrama.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/surme-sistemler/rg-300.jpg",
                technicalDetails: {
                    features: [
                        "En iyi su, hava yalıtımı ve enerji tasarrufu",
                        "Ağır yük taşımaya müsait rulmanlar",
                        "Rahat ve hızlı bir sürme için özel çelik ray ve rulman, sıfıra yakın sürtünme",
                        "Üretim ve montaj kolaylığı",
                        "Müşteri isteğine bağlı sineklik kasa profili",
                        "Paslanmaz çelik ray ve bu ray üzerinde hareket eden özel rulmanlarla yüksek dayanım ve kullanım konforu",
                        "Özel takozu sayesinde daha mukavemetli toplama olanağı",
                        "Yalıtımı minimalize etmek için kanat birleşimi sağlayan orta kenet tasarımı ve kıl fitiller",
                        "Farklı renk seçenekleri ile alüminyumun modern ve estetik görünümü"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "94,5 mm" },
                        { label: "Kanat Genişliği", value: "38 mm" },
                        { label: "Orta Kanat Genişliği", value: "51 mm" },
                        { label: "Kasa Yüksekliği", value: "42,9 mm" },
                        { label: "Isı Yalıtım Bariyeri", value: "24 mm" },
                        { label: "Cam Kalınlığı", value: "20 - 28 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120 kg" }
                    ]
                }
            },
            {
                name: "RG 400 Sürme Sistem",
                description: "Yüksek dayanımlı ve estetik sürme sistemi.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/surme-sistemler/rg-400.jpg",
                technicalDetails: {
                    features: [
                        "En iyi su, hava yalıtımı ve enerji tasarrufu",
                        "Ağır yük taşımaya müsait rulmanlar",
                        "Rahat ve hızlı bir sürme için özel çelik ray ve rulman, sıfıra yakın sürtünme",
                        "Üretim ve montaj kolaylığı",
                        "Müşteri isteğine bağlı sineklik kasa profili"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "94,5 mm" },
                        { label: "Kanat Genişliği", value: "38 mm" },
                        { label: "Orta Kanat Genişliği", value: "51 mm" },
                        { label: "Kasa Yüksekliği", value: "42,9 mm" },
                        { label: "Cam Kalınlığı", value: "20 - 28 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120 kg" }
                    ]
                }
            },
            {
                name: "RG 500 Sürme Sistem",
                description: "HBSB mekanizmalı, yüksek kapasiteli sürme sistemi.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/surme-sistemler/rg-500.jpg",
                technicalDetails: {
                    features: [
                        "Daha iyi su, hava yalıtımı ve enerji tasarrufu",
                        "Üretim ve montaj kolaylığı",
                        "HBSB mekanizma ile 250 kg. kanat taşıma kapasitesi",
                        "Paslanmaz çelik ray ve bu ray üzerinde hareket eden özel rulmanlarla yüksek dayanım ve kullanım konforu",
                        "Farklı renk seçenekleri ile alüminyumun modern ve estetik görünümü"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "94,5 mm" },
                        { label: "Kanat Genişliği", value: "38 mm" },
                        { label: "Orta Kanat Genişliği", value: "51 mm" },
                        { label: "Kasa Yüksekliği", value: "42,9 mm" },
                        { label: "Isı Yalıtım Bariyeri", value: "24 mm" },
                        { label: "Cam Kalınlığı", value: "20 - 28 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120 kg" }
                    ]
                }
            }
        ]
    },
    {
        id: "acilir-sistemler-rg",
        title: "Açılır Sistemler (RG Serisi)",
        items: [
            {
                name: "RG 600 Açılır Sistem",
                description: "Geniş profil seçenekli, yüksek performanslı açılır sistem.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/acilir-sistemler/rg-600.jpg",
                technicalDetails: {
                    features: [
                        "Geniş ve dar profil seçenekleri ile üstün seviyede performans çözümler",
                        "Kasaya montaj edilen conta ile ısı yalıtımlı bariyerinin birleşmesi sonucunda minimum sızdırmazlık ve ses yalıtımı",
                        "Özel olarak tasarlanmış ayarlanabilir kilit karşılıkları",
                        "Mükemmel dizayn ile en iyi ısı yalıtım değerleri imkanı",
                        "Üçlü cam ve jaluzili cam uygulayabilme imkanı",
                        "Farklı renk seçenekleri ile alüminyumun modern ve estetik görünümü"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "71,7 mm" },
                        { label: "Kasa Yüksekliği", value: "64,2 mm" },
                        { label: "Cam Kalınlığı", value: "16-48 mm" },
                        { label: "Isı Yalıtım Bariyeri", value: "24 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120-200 kg" }
                    ]
                }
            },
            {
                name: "RG 700 Açılır Sistem",
                description: "55 mm kasa genişliğine sahip ekonomik ve estetik açılır sistem.",
                image: "https://rigelaluminyum.com/images/urun-gruplari/acilir-sistemler/rg-700.jpg",
                technicalDetails: {
                    features: [
                        "Geniş ve dar profil seçenekleri",
                        "Ekonomik ve pratik çözüm",
                        "Üçlü cam uygulama imkanı"
                    ],
                    specifications: [
                        { label: "Kanat Yüksekliği", value: "71,7 mm" },
                        { label: "Kasa Yüksekliği", value: "64,2 mm" },
                        { label: "Kasa Genişliği", value: "55 mm" },
                        { label: "Cam Kalınlığı", value: "16-48 mm" },
                        { label: "Kanat Taşıma Kapasitesi", value: "120-200 kg" }
                    ]
                }
            }
        ]
    }
];

export const PANJUR_SECTIONS: ProductSection[] = [
    {
        id: "panjur-lameller",
        title: "Panjur Lamelleri",
        items: [
            { name: "39mm Lamel", description: "Standart panjur lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/39LAMEL.png" },
            { name: "55mm Lamel", description: "Geniş panjur lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/55LAMEL.png" },
            { name: "34mm Extrüzyon Lamel", description: "Güçlendirilmiş lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/34MMEXT.png" },
            { name: "45mm Extrüzyon Lamel", description: "Güçlendirilmiş lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/45MMEXT.png" },
            { name: "55mm Extrüzyon Lamel", description: "Güçlendirilmiş lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/55MMEXT.png" },
            { name: "55mm Gözlü Lamel", description: "Gözlü tasarım lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/55GOZLUYENI.png" },
            { name: "62mm Extrüzyon Lamel", description: "Güçlendirilmiş geniş lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/62MMEXT.png" },
            { name: "62mm Gözlü Lamel", description: "Gözlü tasarım geniş lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/62mm_gozlu-Black.png" }
        ]
    },
    {
        id: "panjur-kutulari",
        title: "Panjur Kutuları ve Yan Kapaklar",
        items: [
            { name: "Panjur Kutusu", description: "Panjur sarım kutusu", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/KUTU.png" },
            { name: "Yan Kapak", description: "Kutu yan kapağı", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/KAPAK.png" }
        ]
    },
    {
        id: "panjur-profilleri",
        title: "Dikme ve Alt Parçalar",
        items: [
            { name: "34mm Alt Parça", description: "Panjur alt bitiş profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/34_Alt_Parca.png" },
            { name: "39mm Alt Parça", description: "Panjur alt bitiş profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/39_Alt_Parca.png" },
            { name: "50mm Alt Parça", description: "Panjur alt bitiş profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/50_Alt_Parca.png" },
            { name: "54mm Dikme", description: "Panjur yan ray profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/54_Dikme.png" },
            { name: "60mm Dikme", description: "Panjur yan ray profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/60_Dikme.png" },
            { name: "100mm Orta Dikme", description: "Panjur orta birleşim profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/100_Ortadikme.png" }
        ]
    },
    {
        id: "panjur-motorlari",
        title: "Tambur Boruları",
        items: [
            { name: "Sekizgen Tambur Borusu", description: "Panjur sarım borusu", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/tambur.png" },
            { name: "Yuvarlak Tambur Borusu", description: "Panjur sarım borusu", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/yuvarlak-boru.png" }
        ]
    }
];

export const KEPENK_SECTIONS: ProductSection[] = [
    {
        id: "kepenk-lameller",
        title: "Kepenk Lamelleri",
        items: [
            { name: "77mm Lamel", description: "Standart kepenk lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/77LAMEL.png" },
            { name: "95mm Lamel", description: "Geniş kepenk lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/95LAMELYENI-1.png" },
            { name: "77mm Extrüzyon Lamel", description: "Güçlendirilmiş kepenk lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/77NORMALEKTRU.png" },
            { name: "77mm Gözlü Lamel", description: "Gözlü kepenk lamel", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/77mm_gozlu-Black.png" }
        ]
    },
    {
        id: "kepenk-kutulari",
        title: "Kepenk Kutuları ve Aksesuarlar",
        items: [
            { name: "Kepenk Kutusu", description: "Kepenk sarım kutusu", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/KUTU.png" },
            { name: "400'lük Kutu", description: "Büyük sarım kutusu", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/400Kutu.png" },
            { name: "Yan Kapak", description: "Kepenk kutu yan kapağı", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/KAPAK.png" }
        ]
    },
    {
        id: "kepenk-profilleri",
        title: "Dikme ve Alt Parçalar",
        items: [
            { name: "39mm Alt Parça", description: "Kepenk alt bitiş profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/39_Alt_Parca.png" },
            { name: "90mm Dikme", description: "Kepenk yan ray profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/90_Dikme.png" },
            { name: "150mm Dikme", description: "Geniş kepenk yan ray profili", image: "https://www.aksekiyapi.com/wp-content/uploads/2025/06/150_Dikme.png" }
        ]
    }
];

export const PRODUCTS: Product[] = [
    {
        name: "LR-3100",
        description: "Yalıtımlı Sürme Sistemi: Yüksek ısı bariyerli, modern mimari için ideal sürme sistemi.",
        image: "https://github.com/xbarisx2/logo/blob/main/linea/lr-3100.jpg?raw=true"
    },
    {
        name: "Pimapen Carisma",
        description: "Estetik ve performansı bir arada sunan, 70mm profil genişliğine sahip 5 odacıklı seri.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "RG 300 Sürme Sistem",
        description: "Isı yalıtımlı, yüksek performanslı sürme doğrama.",
        image: "https://rigelaluminyum.com/images/urun-gruplari/surme-sistemler/rg-300.jpg"
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
                    { name: "Yalıtımlı Açılır Sistemler", page: "Linea Rossa", id: "acilir-yalitimli" },
                    { name: "Yalıtımsız Açılır Sistemler", page: "Linea Rossa", id: "acilir-yalitimsiz" },
                    { name: "Zip Perde & Pergola", page: "Linea Rossa", id: "zip-pergola" }
                ]
            },
            {
                name: "Pimapen Sistemleri",
                page: "Pimapen",
                subLinks: [
                    { name: "Nirvana Serisi", page: "Pimapen", id: "nirvana" },
                    { name: "Carisma Serisi", page: "Pimapen", id: "carisma" },
                    { name: "Sürme Kapı & Pencere", page: "Pimapen", id: "surgulu" },
                    { name: "Panjur & Kepenk", page: "Pimapen", id: "panjur-kepenk" },
                    { name: "Donanım Sistemleri", page: "Pimapen", id: "donanim" }
                ]
            },
            { 
                name: "Alüminyum Mimari Sistemler", 
                page: "Alüminyum",
                subLinks: [
                    { name: "Sürme Sistemler (RG Serisi)", page: "Alüminyum", id: "surme-sistemler-rg" },
                    { name: "Açılır Sistemler (RG Serisi)", page: "Alüminyum", id: "acilir-sistemler-rg" }
                ]
            },
            { name: "Panjur Sistemleri", page: "Panjur" },
            { name: "Kepenk Sistemleri", page: "Kepenk" },
            { name: "Pergola Sistemleri", page: "Pergola" },
            { name: "Zip Perde Sistemleri", page: "ZipPerde" },
            { name: "Akıllı Çatı Sistemleri", page: "AkıllıÇatı" },
            { name: "Cephe Sistemleri", page: "Cephe" },
            { name: "Giyotin Cam Balkon Sistemleri", page: "Giyotin" },
            { name: "Alüminyum Kompozit Sistemler", page: "Kompozit" },
            { name: "Cam Balkon Sistemleri", page: "Ürünlerimiz" },
            { name: "Korkuluk Sistemleri", page: "Ürünlerimiz" },
            { name: "PVC Kapı & Pencere Sistemleri", page: "Ürünlerimiz" }
        ]
    },
    { name: 'İş Ortaklarımız', page: 'İş Ortaklarımız' },
    { name: 'Referanslarımız', page: 'Referanslarımız' },
    { name: 'Medya', page: 'Medya' },
    { name: 'Blog', page: 'Blog' },
    { name: 'İletişim', page: 'İletişim' },
];
