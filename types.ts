
export type Page = 'Ana Sayfa' | 'Kurumsal' | 'Ürünlerimiz' | 'İş Ortaklarımız' | 'Referanslarımız' | 'Medya' | 'Blog' | 'İletişim' | 'Linea Rossa' | 'Pimapen' | 'Alüminyum' | 'Solar';

export interface SubLinkItem {
    name: string;
    id?: string; // For scrolling to an element
    page?: Page; // For navigating to a new page
    subLinks?: SubLinkItem[]; // Recursive nesting for multi-level menus
}

export interface NavLink {
    name: Page;
    subLinks?: SubLinkItem[];
}

export interface TechnicalDetails {
    features: string[]; // List of characteristic features (checkboxes)
    specifications: { label: string; value: string; }[]; // Key-value pairs for technical specs
}

export interface Product {
    name: string;
    description: string;
    image: string;
    technicalDetails?: TechnicalDetails; // Optional technical details
}

export interface ProductSection {
    id: string;
    title: string;
    items: Product[];
}

export interface Reference {
    name: string;
    logo: string;
}

export interface Partner {
    name: string;
    logo: string;
}

export type BlogCategory = 'Cephe Sistemleri' | 'Doğrama Çözümler' | 'Teknik Bilgiler' | 'Genel';

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    image: string;
    category: BlogCategory;
    excerpt: string;
    content: { type: 'p' | 'h2' | 'h3'; text: string; }[];
}

export interface Comment {
    id: string;
    postSlug: string;
    author: string;
    text: string;
    date: string;
}
