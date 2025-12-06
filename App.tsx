
import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SocialSidebar from './components/SocialSidebar';
import type { Page } from './types';
import { useLanguage } from './LanguageContext';

// Lazy Load Pages for Performance Code Splitting
const HomePage = React.lazy(() => import('./pages/HomePage'));
const CorporatePage = React.lazy(() => import('./pages/CorporatePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const LineaRossaPage = React.lazy(() => import('./pages/LineaRossaPage'));
const PimapenPage = React.lazy(() => import('./pages/PimapenPage'));
const AluminumPage = React.lazy(() => import('./pages/AluminumPage'));
const PanjurPage = React.lazy(() => import('./pages/PanjurPage'));
const KepenkPage = React.lazy(() => import('./pages/KepenkPage'));
const PergolaPage = React.lazy(() => import('./pages/PergolaPage'));
const ZipPerdePage = React.lazy(() => import('./pages/ZipPerdePage'));
const ReferencesPage = React.lazy(() => import('./pages/ReferencesPage'));
const MediaPage = React.lazy(() => import('./pages/MediaPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPostDetailPage = React.lazy(() => import('./pages/BlogPostDetailPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const SolarPage = React.lazy(() => import('./pages/SolarPage'));
const FacadePage = React.lazy(() => import('./pages/FacadePage'));
const GuillotinePage = React.lazy(() => import('./pages/GuillotinePage'));
const CompositePage = React.lazy(() => import('./pages/CompositePage'));

// Loading Spinner Component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue-900"></div>
    </div>
);

// Helper to update meta description
const updateMetaDescription = (content: string) => {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
        meta.setAttribute('content', content);
    } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = content;
        document.head.appendChild(newMeta);
    }
};

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('Ana Sayfa');
    const [activePostSlug, setActivePostSlug] = useState<string | null>(null);
    const { data } = useLanguage();

    const handleSetCurrentPage = (page: Page) => {
        if (activePostSlug) {
            setActivePostSlug(null);
        }
        setCurrentPage(page);
    };
    
    // SEO: Update Title and Meta Description based on Page
    useEffect(() => {
        if (currentPage !== 'Blog') {
          setActivePostSlug(null);
        }
        window.scrollTo(0, 0);

        // Handle hash scrolling
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }

        // --- Dynamic SEO Logic ---
        let pageTitle = "İnter Akdeniz Alüminyum";
        let pageDescription = "";
        
        const suffix = " | İnter Akdeniz Antalya";

        if (currentPage === 'Blog' && activePostSlug) {
            const post = data.BLOG_POSTS.find(p => p.slug === activePostSlug);
            if (post) {
                pageTitle = `${post.title}${suffix}`;
                pageDescription = post.excerpt;
            } else {
                pageTitle = `Blog & Haberler${suffix}`;
                pageDescription = "Alüminyum doğrama, PVC sistemler, cam balkon ve cephe giydirme hakkında teknik bilgiler ve Antalya yapı sektörü haberleri.";
            }
        } else {
            // Main Pages SEO Mapping
            switch(currentPage) {
                case 'Ana Sayfa':
                    pageTitle = `İnter Akdeniz | Dünya Standartlarında Alüminyum Cephe & Doğrama Sistemleri`;
                    pageDescription = "Antalya'da Linea Rossa, Alüminyum Cephe, Cam Balkon, PVC Doğrama, Kış Bahçesi ve Otomasyon sistemlerinde uluslararası standartlarda üretim ve uygulama çözümleri.";
                    break;
                case 'Kurumsal':
                    pageTitle = `Kurumsal | 20 Yıllık Tecrübe ve Güven${suffix}`;
                    pageDescription = "İnter Akdeniz Alüminyum; sektördeki 20 yılı aşkın tecrübesi, uzman mühendis kadrosu ve yüksek teknoloji üretim parkuru ile Antalya'nın lider firmasıdır.";
                    break;
                case 'Ürünlerimiz':
                    pageTitle = `Ürünlerimiz | Mimari Alüminyum & PVC Sistemleri${suffix}`;
                    pageDescription = "Linea Rossa, Pimapen, Alüminyum Doğrama, Cephe Giydirme, Panjur, Kepenk, Pergola ve daha fazlası. Geniş ürün yelpazemizi inceleyin.";
                    break;
                case 'Linea Rossa':
                    pageTitle = `Linea Rossa Antalya Yetkili Üretici Bayii${suffix}`;
                    pageDescription = "İtalyan tasarımı Linea Rossa alüminyum sistemleri. Yüksek ısı yalıtımlı sürme ve kapı pencereler ile mekanlarınıza prestij katın. Antalya yetkili bayi.";
                    break;
                case 'Pimapen':
                    pageTitle = `Pimapen Antalya Yetkili Bayii | PVC Pencere${suffix}`;
                    pageDescription = "Antalya Pimapen PVC pencere ve kapı sistemleri. Nirvana ve Carisma serisi ile üstün ısı ve ses yalıtımı sağlayan PVC doğrama çözümleri.";
                    break;
                case 'Alüminyum':
                    pageTitle = `Alüminyum Doğrama & Mimari Sistemler${suffix}`;
                    pageDescription = "Antalya alüminyum doğrama imalatı. Isı yalıtımlı kapı, pencere ve sürme sistemleri ile modern mimari projelere değer katıyoruz.";
                    break;
                case 'Panjur':
                    pageTitle = `Otomatik Panjur Sistemleri | Güvenlik & Konfor${suffix}`;
                    pageDescription = "Antalya motorlu panjur sistemleri. Isı yalıtımlı lamel seçenekleri ve uzaktan kumandalı kullanım ile evinizde maksimum konfor sağlayın.";
                    break;
                case 'Kepenk':
                    pageTitle = `Otomatik Kepenk Sistemleri | İş Yeri Güvenliği${suffix}`;
                    pageDescription = "Antalya otomatik kepenk imalatı. Mağaza, garaj ve depolar için yüksek güvenlikli, dayanıklı ve estetik sarmal kepenk çözümleri.";
                    break;
                case 'Pergola':
                    pageTitle = `Pergola & Tente Sistemleri | Bioclimatic${suffix}`;
                    pageDescription = "Antalya pergola ve tente sistemleri. Işıklı, motorlu, açılır kapanır tavan sistemleri ile dış mekanlarınızı dört mevsim keyifle kullanın.";
                    break;
                case 'ZipPerde':
                    pageTitle = `Zip Perde Sistemleri | Dış Cephe Gölgelendirme${suffix}`;
                    pageDescription = "Rüzgara dayanıklı Zip Perde sistemleri. Antalya'nın güneşine karşı modern gölgelendirme ve sineklik çözümleri.";
                    break;
                case 'AkıllıÇatı':
                    pageTitle = `Akıllı Çatı Sistemleri | Hareketli Tavan${suffix}`;
                    pageDescription = "Antalya akıllı çatı ve bioclimatic sistemler. Teraslarınız için açılır kapanır panel teknolojisi ile konforlu yaşam alanları.";
                    break;
                case 'Cephe':
                    pageTitle = `Cephe Giydirme Sistemleri | Silikon & Kapaklı${suffix}`;
                    pageDescription = "Antalya alüminyum cephe giydirme. Silikon cephe, kapaklı cephe ve yarı kapaklı sistemler ile binalara modern ve estetik bir kimlik kazandırın.";
                    break;
                case 'Giyotin':
                    pageTitle = `Giyotin Cam Balkon Sistemleri | Motorlu Küpeşte${suffix}`;
                    pageDescription = "Antalya giyotin cam sistemleri. Dikey hareketli, uzaktan kumandalı cam balkon çözümleri ile kesintisiz manzara ve konfor.";
                    break;
                case 'Kompozit':
                    pageTitle = `Alüminyum Kompozit Panel Cephe Kaplama${suffix}`;
                    pageDescription = "Antalya alüminyum kompozit panel uygulama. Binalarınız için uzun ömürlü, modern, renkli ve estetik dış cephe kaplama çözümleri.";
                    break;
                case 'Referanslarımız':
                    pageTitle = `Referanslarımız | Tamamlanan Projeler${suffix}`;
                    pageDescription = "Antalya ve Türkiye genelinde tamamladığımız otel, konut ve ticari projeler. Kalitemizin kanıtı olan güçlü referanslarımızı inceleyin.";
                    break;
                case 'İş Ortaklarımız':
                    pageTitle = `İş Ortaklarımız & Çözüm Ortaklarımız${suffix}`;
                    pageDescription = "Linea Rossa, Pimapen, Schüco, Somfy gibi dünya markalarıyla güçlü iş birliklerimiz sayesinde projelerinize kalite katıyoruz.";
                    break;
                case 'Medya':
                    pageTitle = `Medya Galeri | Proje Görselleri${suffix}`;
                    pageDescription = "Antalya alüminyum doğrama, cam balkon, korkuluk ve cephe giydirme uygulama görselleri. Proje galerimizden ilham alın.";
                    break;
                case 'Blog':
                    pageTitle = `Blog & Sektörel Bilgiler${suffix}`;
                    pageDescription = "Alüminyum ve PVC sektöründeki yenilikler, teknik makaleler ve şirketimizden haberler.";
                    break;
                case 'İletişim':
                    pageTitle = `İletişim | Bize Ulaşın & Teklif Alın${suffix}`;
                    pageDescription = "Antalya alüminyum, cam balkon ve PVC doğrama ihtiyaçlarınız için bizimle iletişime geçin. Adres, telefon ve yol tarifi.";
                    break;
                default:
                    pageTitle = `${currentPage}${suffix}`;
                    pageDescription = "İnter Akdeniz Alüminyum - Antalya. Alüminyum doğrama, PVC, cephe sistemleri, cam balkon ve korkuluk çözümleri.";
            }
        }
        
        document.title = pageTitle;
        updateMetaDescription(pageDescription);

    }, [currentPage, activePostSlug, data.BLOG_POSTS]);

    const renderPage = () => {
        return (
            <Suspense fallback={<PageLoader />}>
                {(() => {
                    switch (currentPage) {
                        case 'Ana Sayfa':
                            return <HomePage setCurrentPage={handleSetCurrentPage} />;
                        case 'Kurumsal':
                            return <CorporatePage />;
                        case 'Ürünlerimiz':
                            return <ProductsPage setCurrentPage={handleSetCurrentPage} />;
                        case 'Linea Rossa':
                            return <LineaRossaPage />;
                        case 'Pimapen':
                            return <PimapenPage />;
                        case 'Alüminyum':
                            return <AluminumPage />;
                        case 'Panjur':
                            return <PanjurPage />;
                        case 'Kepenk':
                            return <KepenkPage />;
                        case 'Pergola':
                            return <PergolaPage />;
                        case 'ZipPerde':
                            return <ZipPerdePage />;
                        case 'AkıllıÇatı':
                            return <SolarPage />;
                        case 'Cephe':
                            return <FacadePage />;
                        case 'Giyotin':
                            return <GuillotinePage />;
                        case 'Kompozit':
                            return <CompositePage />;
                        case 'Referanslarımız':
                            return <ReferencesPage />;
                        case 'İş Ortaklarımız':
                             return <PartnersPage />;
                        case 'Medya':
                            return <MediaPage />;
                        case 'Blog':
                            return activePostSlug ? (
                                <BlogPostDetailPage 
                                    slug={activePostSlug} 
                                    onBack={() => {
                                        setActivePostSlug(null);
                                        window.scrollTo(0, 0);
                                    }} 
                                />
                            ) : (
                                <BlogPage onPostSelect={(slug) => setActivePostSlug(slug)} />
                            );
                        case 'İletişim':
                            return <ContactPage />;
                        default:
                            return <HomePage setCurrentPage={handleSetCurrentPage} />;
                    }
                })()}
            </Suspense>
        );
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            <Header currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer setCurrentPage={handleSetCurrentPage} />
            <WhatsAppButton />
            <SocialSidebar />
        </div>
    );
};

export default App;
