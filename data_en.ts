
import type { NavLink, Product, Reference, BlogPost, Partner, ProductSection, MediaImage } from './types';
import { COMPANY_INFO as BASE_INFO, REFERENCES as BASE_REFERENCES, PARTNERS as BASE_PARTNERS, PRODUCTS as BASE_PRODUCTS } from './constants';

// Re-export common data that doesn't need translation or has its own logic
export const COMPANY_INFO = BASE_INFO;
export const REFERENCES = BASE_REFERENCES;
export const PARTNERS = BASE_PARTNERS;

export const CORPORATE_CONTENT = {
    header: {
        title: "Corporate Identity",
        subtitle: "Meet our innovative vision and unwavering values."
    },
    about: {
        title: "About Us",
        content: [
            "INTER AKDENIZ ALUMINUM has been operating as one of the leading companies serving global standards in the aluminum and PVC systems sector with over 20 years of industry experience. Since the day we were founded, we have adopted the principle of offering solutions that combine aesthetics, functionality, and durability in architectural projects.",
            "With our expert engineer and assembly staff, we produce a wide range of products such as aluminum joinery, facade cladding, glass balconies, pergolas, and automation systems in our machine park equipped with the latest technology. We manage every project with a quality understanding that exceeds our customers' expectations and the principle of delivering on time and completely."
        ]
    },
    vision: {
        title: "Our Vision",
        content: [
            "To be one of the first brands that come to mind when aluminum systems are mentioned in Turkey and the international market by closely following innovations in the sector and aiming for continuous development.",
            "While aiming to leave more livable structures to future generations by adopting sustainable and environmentally friendly production techniques, our most basic vision is to offer pioneering and innovative solutions that inspire architecture by combining technology and design. We want to be known not only as a supplier but also as a reliable solution partner for our customers and business partners."
        ]
    },
    mission: {
        title: "Our Mission",
        content: [
            "To produce and apply aesthetic, safe, and long-lasting aluminum systems tailored to our customers' needs using the highest quality raw materials and the most advanced technology.",
            "In this process, we undertake to fulfill our responsibilities towards society and the environment completely by investing in the development of our employees, strictly complying with occupational health and safety standards, and establishing transparent and honest communication with all our stakeholders. Keeping customer satisfaction at the highest level at all times, adding value to their projects, and leaving permanent works is our reason for existence."
        ]
    }
};

export const HERO_SLIDES = [
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa4.jpg?raw=true",
        title: "PVC Door & Window Systems",
        subtitle: "Superior Insulation and Durability"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa1.png?raw=true",
        title: "Shutter & Roller Systems",
        subtitle: "Aesthetic State of Security and Comfort"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa2.webp?raw=true",
        title: "Aluminum Architectural Systems",
        subtitle: "Innovative Solutions for Modern Structures"
    },
    {
        image: "https://github.com/xbarisx2/logo/blob/main/anasayfa5.jpg?raw=true",
        title: "Glass Balcony Systems",
        subtitle: "Experience Your View Without Interruption"
    }
];

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
                    { name: "PVC Window & Door Systems", page: "Pimapen", id: "pvc-pencere-kapi" },
                    { name: "Nirvana", page: "Pimapen", id: "nirvana" },
                    { name: "Carisma", page: "Pimapen", id: "carisma" },
                    { name: "Sliding Door & Window", page: "Pimapen", id: "surgulu" },
                    { name: "Shutter & Roller", page: "Pimapen", id: "panjur-kepenk" },
                    { name: "Hardware Systems", page: "Pimapen", id: "donanim" }
                ]
            },
            {
                name: "Aluminum Profiles",
                page: "Alüminyum",
                subLinks: [
                    { name: "Aldoks Series", page: "Alüminyum", id: "aldoks" },
                    { name: "C60 Insulated Series", page: "Alüminyum", id: "c60" },
                    { name: "Facade Systems", page: "Alüminyum", id: "cephe" },
                    { name: "Office Partition Systems", page: "Alüminyum", id: "ofis" }
                ]
            },
            {
                name: "Solar Mounting Systems",
                page: "Solar",
                subLinks: [
                    { name: "Solar Construction", page: "Solar", id: "konstruksiyon" },
                    { name: "Roof Fasteners", page: "Solar", id: "baglanti" }
                ]
            }
        ]
    },
    { name: 'Partners', page: 'İş Ortaklarımız' },
    { name: 'References', page: 'Referanslarımız' },
    { name: 'Media', page: 'Medya' },
    { name: 'Blog', page: 'Blog' },
    { name: 'Contact', page: 'İletişim' },
];

export const PRODUCTS: Product[] = [
    { name: "Aldoks Series", description: "Economical, lightweight, non-insulated joinery system ideal for showcases and doors.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" },
    { name: "C60 Insulated Series", description: "Polyamide barrier door and window system designed for energy-efficient buildings providing high heat and sound insulation.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" },
    { name: "System Series (Skylight)", description: "Profile system designed for roof skylights and winter garden ceilings, with water drainage channels and sealing guarantee.", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Sliding Series", description: "Sliding joinery profiles developed for balconies, terraces, and wide openings providing maximum use in narrow spaces.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { name: "Facade Systems", description: "High-strength aluminum profile solutions for silicone, capped, and semi-capped curtain wall applications.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true" },
    { name: "Railing & Handrail", description: "Aesthetic and safe aluminum railing systems in square and round forms for stairs, balconies, and gallery voids.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-korkuluk.jpg?raw=true" },
    { name: "Glass Balcony Profiles", description: "Special rail and frame profiles designed for folding and sliding glass balcony systems, providing air and water tightness.", image: "https://github.com/xbarisx2/logo/blob/main/cam-balkon.jpg?raw=true" },
    { name: "Office Partition Systems", description: "Transparent, modular, and sound-insulated glass partition wall profiles and accessories for modern offices.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { name: "Sun Breakers", description: "Aesthetic fixed or movable aluminum sun breaker profiles providing solar control on building facades.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { name: "Shutter & Roller", description: "Aluminum shutter and roller profiles suitable for motorized and manual use for security and sun control.", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
    { name: "Composite Panel", description: "Fireproof (B1/A2), long-lasting, and wide color option aluminum composite panels used in exterior cladding.", image: "https://images.unsplash.com/photo-1460317442991-0ec2aa247f7b?auto=format&fit=crop&w=600&q=80" },
    { name: "Fly Screen Profiles", description: "Aluminum profiles for pleated, hinged, and fixed fly screen systems integrated into window and door systems.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" },
    { name: "Awning & Pergola", description: "Motorized and illuminated bioclimatic pergola system profiles transforming open spaces into living areas.", image: "https://images.unsplash.com/photo-1632920235889-7080927c3d79?auto=format&fit=crop&w=600&q=80" },
    { name: "Furniture Profiles", description: "Decorative frame and handle profiles for kitchen, bathroom, and wardrobe doors.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" },
    { name: "Ventilation Profiles", description: "Fixed blade aluminum ventilation profiles used for ventilation gaps and bathroom doors.", image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" },
];

export const ALUMINUM_SECTIONS: ProductSection[] = [
    {
        id: "aldoks",
        title: "Aldoks Series",
        items: [
            { name: "Aldoks Joinery", description: "Economical, lightweight, non-insulated joinery system ideal for showcases and doors.", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    {
        id: "c60",
        title: "C60 Insulated Series",
        items: [
            { name: "C60 Door & Window", description: "Polyamide barrier door and window system designed for energy-efficient buildings providing high heat and sound insulation.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    {
        id: "cephe",
        title: "Facade Systems",
        items: [
            { name: "Curtain Wall", description: "High-strength aluminum profile solutions for silicone, capped, and semi-capped curtain wall applications.", image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true" }
        ]
    },
    {
        id: "ofis",
        title: "Office Partition Systems",
        items: [
             { name: "Glass Partition", description: "Transparent, modular, and sound-insulated glass partition wall profiles and accessories for modern offices.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" }
        ]
    }
];

export const SOLAR_SECTIONS: ProductSection[] = [
    {
        id: "konstruksiyon",
        title: "Solar Construction",
        items: [
            { name: "Ground Mount", description: "Durable and fast-assembly ground type construction systems for solar power plants.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80" },
            { name: "Roof Mount", description: "Solar mounting profiles designed for pitched and flat roofs, guaranteed sealing.", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80" }
        ]
    },
    {
        id: "baglanti",
        title: "Roof Fasteners",
        items: [
            { name: "Hooks and Clips", description: "Stainless steel connection hooks and panel holder clips suitable for different tile and roof types.", image: "https://images.unsplash.com/photo-1621905252507-b355f6a38029?auto=format&fit=crop&w=600&q=80" }
        ]
    }
];

export const LINEA_ROSSA_SECTIONS: ProductSection[] = [
    {
        id: "yalitimli-surme",
        title: "Insulated Sliding Systems",
        items: [
            { 
                name: "LR-3100 - Linea Rossa", 
                description: "Insulated Sliding System: High thermal barrier, ideal for modern architecture.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3100.webp",
                 technicalDetails: {
                    features: [
                        "Better Water, Air Insulation and Energy Saving",
                        "Ease of Production and Assembly",
                        "Minimal Architectural Solution with 50% Reduced Central Interlock",
                        "Special Fly Screen Design Resolved within the System",
                        "High Durability with Stainless Steel Rails and Rollers",
                        "Specially Designed Multi-Point Locking System",
                        "Gapless Central Interlock Detail with Polyamide Profiles",
                        "Modern and Aesthetic Appearance of Metal with Anodized Surfaces"
                    ],
                    specifications: [
                        { label: "Sash Width", value: "32 mm" },
                        { label: "Sash Height", value: "75 mm" },
                        { label: "Frame Height", value: "44 mm" },
                        { label: "Interlock Width", value: "34 – 78,5 mm" },
                        { label: "Glass Thickness", value: "20 – 22 mm" },
                        { label: "Max. Sash Carrying Capacity", value: "120 kg" },
                        { label: "Thermal Insulation EN ISO 10077-2", value: "Uf=3,8 W/m2K" }
                    ]
                }
            },
            { 
                name: "LR-3200 - Linea Rossa", 
                description: "Insulated Lift & Slide System: High performance lift and slide series designed for wide openings.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3200.webp",
                technicalDetails: {
                    features: ["High load carrying capacity", "Excellent sealing", "Easy operation"],
                    specifications: [{ label: "Frame Depth", value: "120 mm" }, { label: "Sash Depth", value: "50 mm" }]
                }
            },
            {
                name: "LR-3300 - Linea Rossa", 
                description: "Minimal Sliding System: Thin section and high insulation sliding system providing panoramic view.",
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3300.webp",
                technicalDetails: {
                    features: ["Invisible frame design", "Maximum glass area", "High thermal insulation"],
                    specifications: [{ label: "Visible Interlock", value: "20 mm" }, { label: "Glass Thickness", value: "32 mm" }]
                }
            },
            { 
                name: "LR-3400 - Linea Rossa", 
                description: "Insulated Sliding System: Excellent air and water tightness. A spirit that wants to fight challenging climate conditions.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3400.webp",
                technicalDetails: {
                    features: [
                        "Lift & Slide and Normal Sliding Capability",
                        "300 kg Carrying Capacity",
                        "Multi-Point Locking",
                        "Excellent Air and Water Tightness"
                    ],
                    specifications: [
                        { label: "Frame Width", value: "106 mm" },
                        { label: "Sash Width", value: "45 mm" }
                    ]
                }
            },
            { 
                name: "LR-3500 - Linea Rossa", 
                description: "Insulated Sliding System: A legend. Always claiming high in the Lift & Slide System.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3500.webp",
                technicalDetails: {
                    features: ["High Thermal Insulation", "Ease of Production", "HBSB Mechanism"],
                    specifications: [{ label: "Sash Width", value: "57 mm" }, { label: "Max Capacity", value: "250 kg" }]
                }
            },
            { 
                name: "LR-3700 - Linea Rossa", 
                description: "Insulated Sliding System: Designed without fear of developing technology in Minimal Sliding Systems.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3700.webp",
                technicalDetails: {
                    features: ["Hidden Frame", "High Security", "800kg Capacity"],
                    specifications: [{ label: "Frame Width", value: "129 mm" }, { label: "Sash Width", value: "42 mm" }]
                }
            },
        ]
    },
    {
        id: "yalitimsiz-surme",
        title: "Non-Insulated Sliding Systems",
        items: [
            {
                name: "LR-2100 - Linea Rossa",
                description: "Non-insulated sliding system offering economical and practical solutions, ideal for interior partitions and mild climates.",
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3100.webp",
                 technicalDetails: {
                    features: ["Economical solution", "Light and elegant design", "Easy assembly"],
                    specifications: [{ label: "Frame Width", value: "85 mm" }, { label: "Sash Width", value: "28 mm" }]
                }
            },
            {
                name: "LR-2200 - Linea Rossa",
                description: "Non-insulated sliding system: Practical use and easy assembly sliding series.",
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-2200.webp",
                technicalDetails: {
                    features: ["Easy Assembly", "Zero Friction Rollers", "Multi Point Locking"],
                    specifications: [{ label: "Sash Width", value: "38 mm" }, { label: "Max Capacity", value: "120 kg" }]
                }
            }
        ]
    },
    {
        id: "stick-cephe",
        title: "Stick Facade Systems",
        items: [
            {
                name: "LR-F50 - Linea Rossa",
                description: "Facade system with high static values suitable for traditional capped and silicone facade applications.",
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-f50.webp",
                technicalDetails: {
                    features: ["Silicone and capped application possibility", "High water drainage performance", "Ability to span wide openings"],
                    specifications: [{ label: "Visible Width", value: "50 mm" }, { label: "Depth", value: "40-180 mm" }]
                }
            },
            { 
                name: "LR-9200 - Linea Rossa", 
                description: "Stick Facade System: Versatile profile system for silicone and capped facade applications.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-9200.webp",
                technicalDetails: {
                    features: ["50 mm Profile Width", "Stick and Capped Application"],
                    specifications: [{ label: "Profile Width", value: "50 mm" }, { label: "Application", value: "Stick & Capped" }]
                }
            },
            { 
                name: "LR-9300 - Linea Rossa", 
                description: "Stick Facade System: Reinforced facade resistant to wind load in high-rise buildings.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-9300.webp",
                technicalDetails: {
                    features: ["60 mm Profile Width", "High Wind Load Resistance"],
                    specifications: [{ label: "Profile Width", value: "60 mm" }, { label: "Glass", value: "Up to 945 mm" }]
                }
            }
        ]
    },
    {
        id: "panel-cephe",
        title: "Panel Facade Systems",
        items: [
            {
                name: "LR-P60 - Linea Rossa",
                description: "Unit panel facade system produced modularly in the factory environment and providing fast assembly at the construction site.",
                image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: ["Fast assembly", "High quality standards", "Earthquake resistance"],
                    specifications: [{ label: "Module Width", value: "1500 mm (max)" }, { label: "Insulation", value: "EPDM Gasket" }]
                }
            },
            { 
                name: "LR-9500 - Linea Rossa", 
                description: "Panel Facade System: Dressing Turkey's most prestigious towers.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-9500.webp",
                technicalDetails: {
                    features: ["Cold Bending", "Extreme Weather Test Passed"],
                    specifications: [{ label: "Type", value: "Cold Bending Curtain Wall" }]
                }
            }
        ]
    },
    {
        id: "katlanir-kapi",
        title: "Folding Door Systems",
        items: [
            {
                name: "LR-3500 Fold - Linea Rossa",
                description: "Insulated folding door system that completely merges spaces, offering thresholdless or threshold use.",
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3500.webp",
                technicalDetails: {
                    features: ["Ability to fully open wide openings", "Folding inward and outward", "High insulation"],
                    specifications: [{ label: "Sash Weight", value: "100 kg" }, { label: "Sash Width", value: "1000 mm (max)" }]
                }
            },
            { 
                name: "LR-6100 - Linea Rossa", 
                description: "Folding Door System: Folding system that completely unites spaces, with or without threshold.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-6100.webp",
                technicalDetails: {
                    features: ["Top Carrier Rollers", "90 Degree Stacking"],
                    specifications: [{ label: "Frame Width", value: "57 mm" }, { label: "Sash Width", value: "40 mm" }]
                }
            }
        ]
    },
    {
        id: "acilir-yalitimli",
        title: "Insulated Opening Systems",
        items: [
            {
                name: "LR-4100 - Linea Rossa",
                description: "Modern door and window system providing high heat and sound insulation, offering tilt and turn opening possibility.",
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-4100.webp",
                 technicalDetails: {
                    features: ["Eurogroove channel", "Concealed hinge option", "High energy saving"],
                    specifications: [{ label: "Frame Depth", value: "65 mm" }, { label: "Thermal Barrier", value: "24 mm" }]
                }
            },
            { 
                name: "LR-5100 - Linea Rossa", 
                description: "Insulated Opening System: Superior heat insulation for standard and tilt-turn windows.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-5100.webp",
                technicalDetails: {
                    features: ["Excellent Sound Insulation", "Adjustable Lock Strikers"],
                    specifications: [{ label: "Sash Width", value: "72 mm" }, { label: "Thermal Insulation", value: "Uf=2,3 W/m2K" }]
                }
            }
        ]
    },
    {
        id: "acilir-yalitimsiz",
        title: "Non-Insulated Opening Systems",
        items: [
            {
                name: "LR-1100 - Linea Rossa",
                description: "Aesthetic and economical non-insulated joinery system designed for interior doors and office partitions.",
                image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["Thin section", "Light structure", "Wide accessory compatibility"],
                    specifications: [{ label: "Frame Depth", value: "45 mm" }, { label: "Glass", value: "4-24 mm" }]
                }
            },
            { 
                name: "LR-4100 - Linea Rossa", 
                description: "Non-Insulated Opening System: Economical joinery solution for showcases and partitions.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-4100.webp",
                technicalDetails: {
                    features: ["Hardness P 22", "Geometric Accuracy EN DIN 12020-2"],
                    specifications: [{ label: "Frame", value: "45/50 mm" }, { label: "Max Weight", value: "80 kg" }]
                }
            },
            { 
                name: "LR-4500 - Linea Rossa", 
                description: "Non-Insulated Opening System: Modern design series for office partitions and interior doors.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-4500.webp",
                technicalDetails: {
                    features: ["Hardness P 22", "Geometric Accuracy EN DIN 12020-2"],
                    specifications: [{ label: "Frame", value: "55/63.7 mm" }, { label: "Max Weight", value: "130 kg" }]
                }
            }
        ]
    },
    {
        id: "zip-pergola",
        title: "Zip Screen & Pergola",
        items: [
            {
                name: "LR-Pergola",
                description: "Modern shading system consisting of motorized aluminum panels with bioclimatic features.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pergola-sistemler.jpg?raw=true",
                technicalDetails: {
                    features: ["Fully automatic control", "LED lighting integration", "Snow load resistance"],
                    specifications: [{ label: "Panel Width", value: "250 mm" }, { label: "Max Opening", value: "7000 mm" }]
                }
            },
            { 
                name: "LR-8300 - Linea Rossa", 
                description: "Zip Screen: Wind resistant zippered curtain system for exterior shading.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-8300.webp",
                technicalDetails: {
                    features: ["Wind Resistance up to 120 km/h", "Waterproof", "Various Fabric Options"],
                    specifications: [{ label: "Motorized System", value: "H<=3m" }]
                }
            },
            { 
                name: "LR-8700 - Linea Rossa", 
                description: "Bioclimatic Pergola: Aluminum pergola with movable louvers providing four seasons use.", 
                image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-8700.webp",
                technicalDetails: {
                    features: ["Snow Load 285 kg/m2", "Wind Resistance 128 km/h", "Somfy Motor"],
                    specifications: [{ label: "Max Width", value: "4.75m" }, { label: "Max Length", value: "6m" }]
                }
            }
        ]
    }
];

export const PIMAPEN_SECTIONS: ProductSection[] = [
    {
        id: "pvc-pencere-kapi",
        title: "PVC Window and Door Systems",
        items: [
            {
                name: "Pimapen Nirvana",
                description: "Passive House certified series with innovative technical features providing superior sound and heat insulation.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                 technicalDetails: {
                    features: ["6-chamber profile structure", "3-gasket sealing system", "High wind resistance"],
                    specifications: [{ label: "Profile Width", value: "80 mm" }, { label: "Uf Value", value: "0.95 W/m2K" }]
                }
            }
        ]
    },
    {
        id: "nirvana",
        title: "Nirvana Series",
        items: [
             {
                name: "Nirvana Premium",
                description: "Upper segment PVC window system developed for those seeking maximum performance and aesthetics.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: ["Class A wall thickness", "Ability to apply glass up to 44 mm", "Superior sound insulation"],
                    specifications: [{ label: "Odacık Sayısı", value: "6" }, { label: "Conta", value: "EPDM / TPE" }]
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
                description: "Economical series providing ideal heat and sound insulation with 70 mm profile width and 5-chamber structure.",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["5-chamber design", "Decorative glazing bead options", "High water tightness"],
                    specifications: [{ label: "Profile Width", value: "70 mm" }, { label: "Class", value: "Class B (TS EN 12608)" }]
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
                description: "High insulation PVC sliding system with lift-slide feature designed for wide openings.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
                 technicalDetails: {
                    features: ["Easy and silent operation", "High air and water insulation", "Wide view openings"],
                    specifications: [{ label: "Frame Width", value: "170 mm" }, { label: "Sash Width", value: "70 mm" }]
                }
            },
            {
                name: "Dynamic Sliding",
                description: "Practical and economical solution for balconies and terraces working with simple sliding logic.",
                image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["Double rail frame", "Special brush gasket system", "Fly screen integration"],
                    specifications: [{ label: "Frame Width", value: "120 mm" }, { label: "Glass Thickness", value: "4-20-24 mm" }]
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
                description: "Manual or motorized shutter systems compatible with your windows contributing to heat and sound insulation.",
                image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true",
                technicalDetails: {
                    features: ["PVC and Aluminum slat options", "Concealed box detail", "Remote control possibility"],
                    specifications: [{ label: "Box Dimensions", value: "165x165 / 200x200 mm" }, { label: "Slat", value: "37 mm / 55 mm" }]
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
                description: "Secure and long-lasting espagnolette, handle and hinge groups that increase the performance of Pimapen systems.",
                image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
                technicalDetails: {
                    features: ["Resistance to corrosion", "Child safety lock", "Anti-theft mushroom head pins"],
                    specifications: [{ label: "Material", value: "Stainless Steel / Zamak" }, { label: "Warranty", value: "2 Years" }]
                }
            }
        ]
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "aluminyum-cephe-sistemlerinin-avantajlari",
        title: "Advantages of Aluminum Facade Systems",
        author: "Architect Ahmet Yilmaz",
        date: "Nov 15, 2023",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        category: "Cephe Sistemleri",
        excerpt: "We examine the benefits of aluminum facade systems, which are frequently preferred in modern buildings, in terms of durability, aesthetics and energy efficiency.",
        content: [
            { type: 'p', text: "Aluminum facade systems have become one of the indispensable elements of today's architecture. It is frequently preferred in both new buildings and renovation projects with its lightness, durability and aesthetic appearance." },
            { type: 'h2', text: "Why Aluminum Facade?" },
            { type: 'p', text: "Aluminum offers a long-lasting solution without increasing the building load thanks to its high corrosion resistance and light structure. In addition, being recyclable is a reason for preference in sustainable architectural projects." }
        ]
    },
    {
        slug: "kis-bahcesi-ile-dort-mevsim-konfor",
        title: "Four Seasons Comfort with Winter Garden",
        author: "Inter Akdeniz Team",
        date: "Dec 10, 2023",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
        category: "Doğrama Çözümler",
        excerpt: "Would you like to use your home's garden or terrace in winter too? Expand your living space and be in touch with nature with winter garden systems.",
        content: [
             { type: 'p', text: "Winter gardens are heat-insulated special living spaces created with the perfect harmony of glass and aluminum profiles. You bring the pleasure of the outdoors indoors without rain, snow or wind." },
             { type: 'h2', text: "Importance of Heat Insulated Systems" },
             { type: 'p', text: "The most important issue to consider when having a winter garden built is the heat insulation values of the profiles and glasses used. As Inter Akdeniz, we save energy by using highly insulated aluminum systems." }
        ]
    },
    {
        slug: "pvc-ve-aluminyum-dograma-farklari",
        title: "Differences Between PVC and Aluminum Joinery",
        author: "Technical Expert Mehmet Demir",
        date: "Jan 22, 2024",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        category: "Teknik Bilgiler",
        excerpt: "Should you choose PVC or aluminum when choosing windows and doors? We compared the advantages and disadvantages of the two materials for you.",
        content: [
             { type: 'p', text: "The two most used joinery materials in the construction sector are PVC and aluminum. Both have their own advantages and selection should be made according to project requirements." },
             { type: 'h3', text: "Aluminum Joinery" },
             { type: 'p', text: "Aluminum is a material capable of spanning wider openings, having thinner profile sections, and is much longer lasting. It does not fade and offers an aesthetic appearance in modern architecture." },
             { type: 'h3', text: "PVC Joinery" },
             { type: 'p', text: "PVC generally offers a more economical solution and has high heat insulation values. However, it is not as rigid as aluminum in large openings." }
        ]
    },
    {
        slug: "linea-rossa-neden-tercih-edilmeli",
        title: "Why Choose Linea Rossa?",
        author: "Architect Ayse Yilmaz",
        date: "Feb 05, 2024",
        image: "https://esaaluminyum.com.tr/aluminyum/linea-rossa/index/lr-3100.webp",
        category: "Doğrama Çözümler",
        excerpt: "How do Linea Rossa systems, a combination of Italian design and superior engineering, add value to your projects? We examine their features and advantages.",
        content: [
             { type: 'p', text: "Linea Rossa is not just an aluminum profile, it is a lifestyle. It is indispensable for luxury housing projects with its minimalist design, high carrying capacity and excellent insulation values." },
             { type: 'p', text: "Especially the comfort and aesthetics it offers in sliding systems increase the value of your spaces. The sashes moving silently on stainless steel rails take the user experience to the top level." }
        ]
    }
];

export const MEDIA_IMAGES: MediaImage[] = [
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0003.jpg?raw=true', alt: 'Project Application 1' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0004.jpg?raw=true', alt: 'Project Application 2' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0005.jpg?raw=true', alt: 'Project Application 3' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0006.jpg?raw=true', alt: 'Project Application 4' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0007.jpg?raw=true', alt: 'Project Application 5' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0008.jpg?raw=true', alt: 'Project Application 6' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0009.jpg?raw=true', alt: 'Project Application 7' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0010.jpg?raw=true', alt: 'Project Application 8' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0011.jpg?raw=true', alt: 'Project Application 9' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0012.jpg?raw=true', alt: 'Project Application 10' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0013.jpg?raw=true', alt: 'Project Application 11' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0014.jpg?raw=true', alt: 'Project Application 12' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0015.jpg?raw=true', alt: 'Project Application 13' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0016.jpg?raw=true', alt: 'Project Application 14' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0017.jpg?raw=true', alt: 'Project Application 15' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0018.jpg?raw=true', alt: 'Project Application 16' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0019.jpg?raw=true', alt: 'Project Application 17' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0020.jpg?raw=true', alt: 'Project Application 18' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0021.jpg?raw=true', alt: 'Project Application 19' },
    { src: 'https://github.com/xbarisx2/logo/blob/main/blog/IMG-20251127-WA0022.jpg?raw=true', alt: 'Project Application 20' },
];
