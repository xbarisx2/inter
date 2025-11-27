
import React from 'react';
import { PRODUCTS, REFERENCES } from '../constants';
import type { Page } from '../types';
import { ChevronRightIcon, ShieldCheckIcon, LightBulbIcon, StarIcon } from '../components/Icons';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const featuredProducts = PRODUCTS.slice(0, 6); // Display more products in a denser grid
    const displayedReferences = REFERENCES.slice(0, 15);

    const productCategories = [
        { name: "Linea Rossa", icon: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=100&q=80", page: 'Linea Rossa' as Page },
        { name: "Cephe Sistemleri", icon: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true", page: 'Ürünlerimiz' as Page },
        { name: "Sürme Sistemler", icon: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=100&q=80", page: 'Ürünlerimiz' as Page },
        { name: "Yalıtımlı Doğrama", icon: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=100&q=80", page: 'Ürünlerimiz' as Page },
        { name: "Korkuluk", icon: "https://github.com/xbarisx2/logo/blob/main/aluminyum-korkuluk.jpg?raw=true", page: 'Ürünlerimiz' as Page },
        { name: "Güneş Kırıcılar", icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&q=80", page: 'Ürünlerimiz' as Page },
    ];

    return (
        <>
            {/* Full Screen Hero Section */}
            <section className="relative h-[85vh] bg-brand-blue-900 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[20s] hover:scale-105" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')"}}
                ></div>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-brand-blue-950/70"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
                    <div className="max-w-4xl animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded bg-brand-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                            LİNEA ROSSA
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                            Sınırları Aşan <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Prestijli Projeler</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
                            Uluslararası kalite standartlarında, yenilikçi tasarımlar ve üstün mühendislik ile geleceği inşa ediyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setCurrentPage('Ürünlerimiz')} className="bg-brand-red-600 text-white font-bold py-4 px-10 rounded hover:bg-brand-red-700 transition-all duration-300 shadow-lg hover:shadow-brand-red-500/30">
                                Ürünlerimizi İnceleyin
                            </button>
                            <button onClick={() => setCurrentPage('İletişim')} className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded hover:bg-white hover:text-brand-blue-900 transition-all duration-300">
                                Bize Ulaşın
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Info Cards - Beymetal Style */}
            <section className="relative z-20 -mt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-8 shadow-xl rounded-sm border-b-4 border-brand-red-600 group hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-brand-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red-600 transition-colors duration-300">
                                <ShieldCheckIcon className="w-8 h-8 text-brand-blue-900 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue-900 mb-3">Global Kalite</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Uluslararası sertifikasyonlara sahip malzeme ve üretim kalitesiyle, dünyanın her yerinde geçerli standartlar.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-brand-blue-900 p-8 shadow-xl rounded-sm border-b-4 border-white group hover:-translate-y-2 transition-transform duration-300 text-white">
                            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-brand-blue-900 transition-all duration-300">
                                <LightBulbIcon className="w-8 h-8 text-white group-hover:text-brand-blue-900 transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">İnovatif Çözümler</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Linea Rossa Milano işbirliğiyle, modern mimarinin gereksinimlerini karşılayan estetik ve fonksiyonel sistemler.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-8 shadow-xl rounded-sm border-b-4 border-brand-red-600 group hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-brand-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red-600 transition-colors duration-300">
                                <StarIcon className="w-8 h-8 text-brand-blue-900 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue-900 mb-3">Profesyonel Uygulama</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Alanında uzman teknik kadromuzla, projelendirmeden montaja kadar kusursuz ve zamanında teslimat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* New Product Category Bar */}
            <section className="bg-gray-100 border-t border-gray-200 py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-6">
                        {productCategories.map((cat, idx) => (
                             <button 
                                key={idx}
                                onClick={() => setCurrentPage(cat.page)}
                                className="group flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-brand-blue-50 transition-all duration-300 w-36 sm:w-44 text-center border border-gray-200"
                            >
                                <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-brand-blue-100 group-hover:border-brand-red-500 transition-colors">
                                    <img src={cat.icon} alt={cat.name} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-sm font-bold text-gray-700 group-hover:text-brand-red-600 uppercase transition-colors">
                                    {cat.name}
                                </span>
                             </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Section with Stats */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand-red-600 -mt-4 -ml-4"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                                alt="İnter Akdeniz Alüminyum Kurumsal" 
                                className="w-full h-auto shadow-2xl rounded-sm"
                            />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-brand-blue-900 -mb-4 -mr-4"></div>
                        </div>
                        <div>
                            <h4 className="text-brand-red-600 font-bold uppercase tracking-wider mb-2">Hakkımızda</h4>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue-950 mb-6">
                                20 Yıllık Tecrübe ile <br/> Dünyaya Açılan Kapı
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                İnter Akdeniz Alüminyum olarak, sektördeki köklü geçmişimiz ve yenilikçi vizyonumuzla Türkiye ve dünya genelinde sayısız prestijli projeye imza attık. <strong>Linea Rossa Milano</strong>, Pimapen ve Albert Genau gibi dünya devlerinin stratejik çözüm ortağıyız.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-gray-100 pt-8">
                                <div>
                                    <span className="block text-4xl font-bold text-brand-blue-900">500+</span>
                                    <span className="text-gray-500 text-sm uppercase tracking-wide">Tamamlanan Proje</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-brand-blue-900">20+</span>
                                    <span className="text-gray-500 text-sm uppercase tracking-wide">Yıllık Tecrübe</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-brand-blue-900">%100</span>
                                    <span className="text-gray-500 text-sm uppercase tracking-wide">Müşteri Memnuniyeti</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-bold text-brand-blue-900">Global</span>
                                    <span className="text-gray-500 text-sm uppercase tracking-wide">Hizmet Ağı</span>
                                </div>
                            </div>
                            
                            <button onClick={() => setCurrentPage('Kurumsal')} className="mt-8 flex items-center text-brand-red-600 font-bold hover:text-brand-red-800 transition-colors">
                                Kurumsal Kimliğimiz <ChevronRightIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalog Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <h4 className="text-brand-red-600 font-bold uppercase tracking-wider mb-2">Ürünlerimiz</h4>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue-950">
                                Mimaride Modern Dokunuşlar
                            </h2>
                        </div>
                        <button onClick={() => setCurrentPage('Ürünlerimiz')} className="hidden md:flex items-center text-brand-blue-900 font-bold hover:text-brand-red-600 transition-colors">
                            Tüm Ürünleri Gör <ChevronRightIcon className="w-5 h-5 ml-2" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.name} className="group bg-white rounded-sm shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-blue-900/0 group-hover:bg-brand-blue-900/60 transition-colors duration-300 flex items-center justify-center">
                                        <span className="text-white border-2 border-white py-2 px-6 rounded opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold">
                                            İncele
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 border-b-4 border-transparent group-hover:border-brand-red-600 transition-colors duration-300">
                                    <h3 className="text-xl font-bold text-brand-blue-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                                    <span className="text-brand-red-600 text-sm font-bold flex items-center">
                                        Detaylı Bilgi &rarr;
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 text-center md:hidden">
                        <button onClick={() => setCurrentPage('Ürünlerimiz')} className="bg-brand-blue-900 text-white font-bold py-3 px-8 rounded hover:bg-brand-blue-800 transition-colors w-full">
                            Tüm Ürünleri Gör
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="py-16 bg-brand-red-700 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Projeniz İçin En İyi Fiyat Teklifini Alın
                    </h2>
                    <p className="text-brand-red-100 text-lg mb-8 max-w-2xl mx-auto">
                        Uzman ekibimizle iletişime geçerek ihtiyaçlarınıza en uygun çözümleri ve fiyatlandırmayı öğrenin.
                    </p>
                    <button onClick={() => setCurrentPage('İletişim')} className="bg-white text-brand-red-700 font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        Hemen Teklif İste
                    </button>
                 </div>
            </section>
            
            {/* References Carousel */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-900">Referanslarımız</h2>
                        <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4"></div>
                    </div>
                    <div className="relative group overflow-hidden">
                         <div className="flex animate-marquee group-hover:pause space-x-12 items-center">
                             {[...displayedReferences, ...displayedReferences].map((ref, index) => (
                                <div key={`${ref.name}-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                    <img src={ref.logo} alt={ref.name} className="max-h-16 max-w-full object-contain" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                 <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 40s linear infinite;
                    }
                    .group:hover .animate-marquee {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>
        </>
    );
};

export default HomePage;
