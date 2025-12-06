
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
                pageTitle = `Blog${suffix}`;
                pageDescription = "Alüminyum doğrama, PVC sistemler, cam balkon ve cephe giydirme hakkında teknik bilgiler ve Antalya yapı sektörü haberleri.";
            }
        } else {
            // Main Pages SEO Mapping
            switch(currentPage) {
                case 'Ana Sayfa':
                    pageTitle = `İnter Akdeniz | Antalya Alüminyum, PVC, Cam Balkon & Cephe`;
                    pageDescription = "Antalya'nın lider firması İnter Akdeniz; alüminyum doğrama, PVC doğrama, cam balkon, korkuluk, cephe giydirme ve tente sistemleri ile profesyonel çözümler sunar.";
                    break;
                case 'Kurumsal':
                    pageTitle = `Hakkımızda${suffix}`;
                    pageDescription = "İnter Akdeniz Alüminyum; Antalya'da 20 yılı aşkın tecrübesiyle alüminyum doğrama, cephe sistemleri ve PVC doğrama alanında hizmet vermektedir.";
                    break;
                case 'Ürünlerimiz':
                    pageTitle = `Ürünlerimiz - Alüminyum & PVC Sistemleri${suffix}`;
                    pageDescription = "Antalya'da alüminyum doğrama, PVC doğrama, cam balkon, korkuluk, cephe giydirme, panjur ve tente sistemleri. Geniş ürün yelpazemizi inceleyin.";
                    break;
                case 'Linea Rossa':
                    pageTitle = `Linea Rossa Antalya Yetkili Bayii${suffix}`;
                    pageDescription = "Antalya Linea Rossa alüminyum sistemleri. Yüksek performanslı, ısı yalıtımlı sürme ve kapı sistemleri ile modern mimari çözümler.";
                    break;
                case 'Pimapen':
                    pageTitle = `Pimapen Antalya Bayii${suffix}`;
                    pageDescription = "Antalya Pimapen PVC pencere ve kapı sistemleri. Nirvana ve Carisma serisi ile üstün ısı ve ses yalıtımı sağlayan PVC doğrama çözümleri.";
                    break;
                case 'Alüminyum':
                    pageTitle = `Alüminyum Doğrama Sistemleri${suffix}`;
                    pageDescription = "Antalya alüminyum doğrama imalatı ve montajı. Isı yalıtımlı ve yalıtımsız kapı, pencere ve sürme sistemleri.";
                    break;
                case 'Panjur':
                    pageTitle = `Otomatik Panjur Sistemleri${suffix}`;
                    pageDescription = "Antalya otomatik panjur sistemleri. Güvenlik, ısı yalıtımı ve konfor sağlayan alüminyum panjur çözümleri.";
                    break;
                case 'Kepenk':
                    pageTitle = `Otomatik Kepenk Sistemleri${suffix}`;
                    pageDescription = "Antalya otomatik kepenk imalatı. İş yerleri ve garajlar için güvenli, estetik ve dayanıklı kepenk sistemleri.";
                    break;
                case 'Pergola':
                    pageTitle = `Pergola ve Tente Sistemleri${suffix}`;
                    pageDescription = "Antalya pergola ve tente sistemleri. Işıklı, motorlu, açılır kapanır pergola ile dış mekanlarınızı dört mevsim kullanın.";
                    break;
                case 'ZipPerde':
                    pageTitle = `Zip Perde Sistemleri${suffix}`;
                    pageDescription = "Antalya zip perde uygulamaları. Dış cephe için rüzgara dayanıklı, modern gölgelendirme ve sineklik çözümleri.";
                    break;
                case 'AkıllıÇatı':
                    pageTitle = `Akıllı Çatı Sistemleri${suffix}`;
                    pageDescription = "Antalya akıllı çatı ve bioclimatic sistemler. Teraslarınız için açılır kapanır panel teknolojisi.";
                    break;
                case 'Cephe':
                    pageTitle = `Cephe Giydirme Sistemleri${suffix}`;
                    pageDescription = "Antalya cephe giydirme firması. Silikon cephe, kapaklı cephe ve kompozit panel uygulamaları ile modern bina tasarımları.";
                    break;
                case 'Giyotin':
                    pageTitle = `Giyotin Cam Balkon${suffix}`;
                    pageDescription = "Antalya giyotin cam sistemleri. Dikey hareketli, motorlu küpeşte ve cam balkon çözümleri.";
                    break;
                case 'Kompozit':
                    pageTitle = `Alüminyum Kompozit Panel${suffix}`;
                    pageDescription = "Antalya alüminyum kompozit cephe kaplama. Modern, dayanıklı ve estetik dış cephe çözümleri.";
                    break;
                case 'Referanslarımız':
                    pageTitle = `Referanslarımız${suffix}`;
                    pageDescription = "Antalya'da tamamladığımız alüminyum doğrama, cephe giydirme, cam balkon ve korkuluk projelerimiz. Otel, konut ve ticari referanslarımız.";
                    break;
                case 'İş Ortaklarımız':
                    pageTitle = `İş Ortaklarımız${suffix}`;
                    pageDescription = "Antalya alüminyum sektöründe Linea Rossa, Pimapen, Schüco gibi dünya markalarıyla güçlü iş birliklerimiz ve çözüm ortaklıklarımız.";
                    break;
                case 'Medya':
                    pageTitle = `Medya Galeri${suffix}`;
                    pageDescription = "Antalya alüminyum doğrama, cam balkon, korkuluk ve cephe giydirme uygulama görselleri. Proje galerimiz ve video arşivimiz.";
                    break;
                case 'Blog':
                    pageTitle = `Blog & Sektörel Haberler${suffix}`;
                    pageDescription = "Alüminyum doğrama, PVC sistemler, cam balkon ve cephe giydirme hakkında teknik bilgiler, Antalya yapı sektörü haberleri.";
                    break;
                case 'İletişim':
                    pageTitle = `İletişim - Bize Ulaşın${suffix}`;
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
