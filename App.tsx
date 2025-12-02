
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CorporatePage from './pages/CorporatePage';
import ProductsPage from './pages/ProductsPage';
import LineaRossaPage from './pages/LineaRossaPage';
import ReferencesPage from './pages/ReferencesPage';
import MediaPage from './pages/MediaPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetailPage from './pages/BlogPostDetailPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import PartnersPage from './pages/PartnersPage';
import SocialSidebar from './components/SocialSidebar';
import type { Page } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('Ana Sayfa');
    const [activePostSlug, setActivePostSlug] = useState<string | null>(null);

    const handleSetCurrentPage = (page: Page) => {
        if (activePostSlug) {
            setActivePostSlug(null);
        }
        setCurrentPage(page);
    };
    
    useEffect(() => {
        if (currentPage !== 'Blog') {
          setActivePostSlug(null);
        }
        window.scrollTo(0, 0);

        // Handle hash scrolling after page render
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
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'Ana Sayfa':
                return <HomePage setCurrentPage={handleSetCurrentPage} />;
            case 'Kurumsal':
                return <CorporatePage />;
            case 'Ürünlerimiz':
                return <ProductsPage />;
            case 'Linea Rossa':
                return <LineaRossaPage />;
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
                            // Ensure we scroll to top when going back to list
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
    };

    return (
        <div className="bg-gray-50 text-gray-800 font-sans pt-36 md:pt-0">
            <Header currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />
            <main className={currentPage === 'Ana Sayfa' ? '' : ''}>
                {renderPage()}
            </main>
            <Footer setCurrentPage={handleSetCurrentPage} />
            <WhatsAppButton />
            <SocialSidebar />
        </div>
    );
};

export default App;