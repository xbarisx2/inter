
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
            // Safety check for data.BLOG_POSTS
            const post = data.BLOG_POSTS ? data.BLOG_POSTS.find(p => p.slug === activePostSlug) : null;
            if (post) {
                pageTitle = `${post.title}${suffix}`;
                pageDescription = post.excerpt;
            } else {
                pageTitle = `Blog & Haberler${suffix}`;
                pageDescription = "Alüminyum doğrama, PVC sistemler, cam balkon ve cephe giydirme hakkında teknik bilgiler ve Antalya yapı sektörü haberleri.";
            }
        } else {
            // Main Pages SEO Mapping - Targeting specific keywords
            switch(currentPage) {
                case 'Ana Sayfa':
                    pageTitle = `İnter Akdeniz | Linea Rossa, Pimapen, Panjur & Cephe Sistemleri`;
                    pageDescription = "Antalya'da Linea Rossa, Pimapen, Alüminyum Mimari Sistemler, Panjur, Kepenk, Pergola, Zip Perde, Akıllı Çatı ve Cam Balkon çözümlerinde lider firma.";
                    break;
                case 'Kurumsal':
                    pageTitle = `Kurumsal | İnter Akdeniz Alüminyum Antalya`;
                    pageDescription = "20 yılı aşkın tecrübe ile Antalya'da alüminyum ve PVC sektöründe öncü çözüm ortağınız. Kalite ve güvenin adresi.";
                    break;
                case 'Ürünlerimiz':
                    pageTitle = `Alüminyum Mimari Sistemleri & PVC Ürünler${suffix}`;
                    pageDescription = "Linea Rossa, Pimapen, Cephe, Panjur, Kepenk, Pergola, Tente ve daha fazlası. Tüm mimari sistem ürünlerimizi inceleyin.";
                    break;
                case 'Linea Rossa':
                    pageTitle = `Linea Rossa Antalya | Alüminyum Mimari Sistemleri Yetkili Bayii`;
                    pageDescription = "Antalya Linea Rossa yetkili üretici bayii. Yalıtımlı sürme, kaldırsür ve kapı pencere sistemlerinde İtalyan tasarımı ve üstün performans.";
                    break;
                case 'Pimapen':
                    pageTitle = `Pimapen Antalya | PVC Kapı ve Pencere Sistemleri`;
                    pageDescription = "Antalya Pimapen yetkili bayii. Nirvana ve Carisma serisi PVC pencere, kapı ve sürme sistemleri ile evinizde üstün ısı yalıtımı sağlayın.";
                    break;
                case 'Alüminyum':
                    pageTitle = `Alüminyum Mimari Sistemleri | Doğrama & Cephe`;
                    pageDescription = "Modern yapılar için alüminyum mimari sistemler. Yalıtımlı alüminyum doğrama, kapı, pencere ve sürme sistemleri imalatı.";
                    break;
                case 'Panjur':
                    pageTitle = `Panjur Sistemleri Antalya | Otomatik & Motorlu Panjur`;
                    pageDescription = "Antalya panjur sistemleri. Ev ve iş yerleriniz için güvenlik, yalıtım ve konfor sağlayan otomatik ve motorlu panjur çözümleri.";
                    break;
                case 'Kepenk':
                    pageTitle = `Kepenk Sistemleri Antalya | Otomatik Mağaza & Garaj Kepengi`;
                    pageDescription = "Antalya kepenk sistemleri. İş yerleri, mağazalar ve garajlar için yüksek güvenlikli, dayanıklı çelik ve alüminyum otomatik kepenkler.";
                    break;
                case 'Pergola':
                    pageTitle = `Pergola ve Tente Sistemleri Antalya | Bioklimatik`;
                    pageDescription = "Antalya pergola ve tente sistemleri. Motorlu, ışıklı, açılır kapanır tavan ve bioklimatik pergola ile dış mekan keyfini dört mevsim yaşayın.";
                    break;
                case 'ZipPerde':
                    pageTitle = `Zip Perde Sistemleri Antalya | Dış Cephe Gölgelendirme`;
                    pageDescription = "Antalya zip perde sistemleri. Rüzgara dayanıklı, fermuarlı dış cephe perdeleri ile güneş kontrolü ve sineklik çözümü.";
                    break;
                case 'AkıllıÇatı':
                    pageTitle = `Akıllı Çatı Sistemleri Antalya | Hareketli Tavan`;
                    pageDescription = "Antalya akıllı çatı sistemleri. Teras ve kış bahçeleri için uzaktan kumandalı, açılır kapanır panel tavan teknolojileri.";
                    break;
                case 'Cephe':
                    pageTitle = `Cephe Sistemleri Antalya | Silikon & Kapaklı Giydirme`;
                    pageDescription = "Antalya cephe sistemleri. Silikon cephe, kapaklı cephe ve yarı kapaklı alüminyum giydirme cephe sistemleri ile modern binalar.";
                    break;
                case 'Giyotin':
                    pageTitle = `Giyotin Cam Balkon Sistemleri Antalya | Motorlu Küpeşte`;
                    pageDescription = "Antalya giyotin cam sistemleri. Dikey hareketli, motorlu ve kumandalı cam balkon (küpeşte) sistemleri ile kesintisiz manzara.";
                    break;
                case 'Kompozit':
                    pageTitle = `Alüminyum Kompozit Sistemler Antalya | Cephe Kaplama`;
                    pageDescription = "Antalya alüminyum kompozit panel kaplama. Binalarınız için estetik, renkli ve dayanıklı dış cephe kompozit sistemleri.";
                    break;
                case 'Referanslarımız':
                    pageTitle = `Referanslarımız | Tamamlanan Alüminyum & PVC Projeleri`;
                    pageDescription = "İnter Akdeniz güvencesiyle tamamlanan otel, konut ve ticari projeler. Antalya ve çevresindeki güçlü referanslarımız.";
                    break;
                case 'İş Ortaklarımız':
                    pageTitle = `İş Ortaklarımız | Linea Rossa, Pimapen, Somfy`;
                    pageDescription = "Sektörün lider markaları Linea Rossa, Pimapen, Schüco ve Somfy ile güçlü iş birliklerimiz sayesinde projelerinize kalite katıyoruz.";
                    break;
                case 'Medya':
                    pageTitle = `Medya Galeri | Proje Görselleri ve Uygulamalar`;
                    pageDescription = "Uygulamasını yaptığımız alüminyum doğrama, cephe, panjur ve cam balkon projelerinden görseller.";
                    break;
                case 'Blog':
                    pageTitle = `Blog | Sektörel Bilgiler & Haberler`;
                    pageDescription = "Alüminyum ve PVC sistemleri hakkında teknik bilgiler, avantajlar ve sektörden güncel haberler.";
                    break;
                case 'İletişim':
                    pageTitle = `İletişim | İnter Akdeniz Antalya - Teklif Alın`;
                    pageDescription = "Antalya alüminyum ve PVC sistemleri için bizimle iletişime geçin. Ücretsiz keşif ve fiyat teklifi için arayın.";
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
