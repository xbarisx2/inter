
import type { NavLink, Product, Reference, BlogPost, Partner, ProductSection, MediaImage, ProductCategory } from './types';
import { 
    COMPANY_INFO as BASE_INFO, 
    REFERENCES as BASE_REFERENCES, 
    PARTNERS as BASE_PARTNERS, 
    PRODUCTS as BASE_PRODUCTS,
    UI_LABELS as BASE_UI_LABELS,
    LINEA_ROSSA_SECTIONS as BASE_LINEA,
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
    BLOG_POSTS as BASE_BLOG_POSTS
} from './constants';

export const COMPANY_INFO = BASE_INFO;
export const REFERENCES = BASE_REFERENCES;
export const PARTNERS = BASE_PARTNERS;
export const PRODUCTS = BASE_PRODUCTS;
export const UI_LABELS = BASE_UI_LABELS;
export const HERO_SLIDES = BASE_HERO_SLIDES;
export const PRODUCT_CATEGORIES = BASE_PRODUCT_CATEGORIES;
export const CORPORATE_CONTENT = BASE_CORPORATE_CONTENT;
export const KEPENK_CONTENT = BASE_KEPENK_CONTENT;
export const PERGOLA_CONTENT = BASE_PERGOLA_CONTENT;
export const ZIP_PERDE_CONTENT = BASE_ZIP_PERDE_CONTENT;
export const PERGOLA_MODELS = BASE_PERGOLA_MODELS;
export const ZIP_PERDE_MODELS = BASE_ZIP_PERDE_MODELS;
export const ALUMINUM_SECTIONS = BASE_ALUMINUM_SECTIONS;
export const PANJUR_SECTIONS = BASE_PANJUR_SECTIONS;
export const KEPENK_SECTIONS = BASE_KEPENK_SECTIONS;
export const MEDIA_IMAGES = BASE_MEDIA_IMAGES;
export const BLOG_POSTS = BASE_BLOG_POSTS;
export const LINEA_ROSSA_SECTIONS = BASE_LINEA;

export const PIMAPEN_SECTIONS = BASE_PIMAPEN;

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
                name: "Aluminum Architectural Systems", 
                page: "Alüminyum",
                subLinks: [
                    { name: "Insulated Sliding Series", page: "Alüminyum", id: "yalitimli-surme-rg" },
                    { name: "Non-Insulated Sliding Series", page: "Alüminyum", id: "yalitimsiz-surme-rg" },
                    { name: "Opening Series", page: "Alüminyum", id: "acilir-seri-rg" }
                ]
            },
            { name: "Shutter Systems", page: "Panjur" },
            { name: "Roller Shutter Systems", page: "Kepenk" },
            { name: "Pergola Systems", page: "Pergola" },
            { name: "Zip Screen Systems", page: "ZipPerde" },
            { name: "Smart Roof Systems", page: "Ürünlerimiz" },
            { name: "Facade Systems", page: "Ürünlerimiz" },
            { name: "Glass Balcony Systems", page: "Ürünlerimiz" },
            { name: "Guillotine Glass Systems", page: "Ürünlerimiz" },
            { name: "Aluminum Composite Systems", page: "Ürünlerimiz" },
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
