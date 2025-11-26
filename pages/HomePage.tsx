import React from 'react';
import { PRODUCTS, REFERENCES } from '../constants';
import type { Page } from '../types';
import { ChevronRightIcon } from '../components/Icons';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const featuredProducts = PRODUCTS.slice(0, 4);
    const displayedReferences = REFERENCES.slice(0, 12);

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-blue-900 text-white min-h-[65vh] md:h-[85vh] flex items-center">
                <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{backgroundImage: "url('https://picsum.photos/seed/architecture/1920/1080')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950 via-brand-blue-900/80 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-0">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate-fade-in-down">
                            Antalya'da Yapılarınıza Değer Katan <span className="text-brand-red-500 block md:inline mt-1 md:mt-0">Modern Çözümler</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 animate-fade-in-up leading-relaxed max-w-2xl">
                            İnter Akdeniz Alüminyum olarak; Alüminyum doğrama, PVC pencere, cam balkon ve cephe sistemlerinde estetik ve kaliteyi birleştiriyoruz.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
                            <button onClick={() => setCurrentPage('Ürünlerimiz')} className="w-full sm:w-auto bg-brand-red-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg hover:bg-brand-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                                Ürünlerimizi Keşfedin
                            </button>
                            <button onClick={() => setCurrentPage('İletişim')} className="w-full sm:w-auto border-2 border-white text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white hover:text-brand-blue-900 transition-all duration-300 transform hover:scale-105 active:scale-95">
                                Teklif Alın
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Summary */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="relative order-2 md:order-1">
                             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red-100 rounded-full -z-10 hidden md:block"></div>
                            <img src="https://picsum.photos/seed/meeting/800/600" alt="İnter Akdeniz Alüminyum Ofis Antalya" className="rounded-lg shadow-xl relative z-10 w-full h-auto"/>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue-100 rounded-full -z-10 hidden md:block"></div>
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-brand-red-600 font-bold tracking-wider text-sm uppercase block mb-2">Kurumsal</span>
                            <h2 className="text-2xl md:text-4xl font-bold text-brand-blue-900 mb-4">Mimaride Yenilikçi Dokunuş</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                                Antalya merkezli İnter Akdeniz Alüminyum olarak, sektördeki tecrübemizle Akdeniz bölgesinde sayısız projeye imza attık. Müşteri memnuniyetini merkeze alan yaklaşımımız, kaliteli malzeme seçimimiz (Linea Rossa, Pimapen vb.) ve uzman ekibimizle, her projede estetik ve fonksiyonelliği en üst düzeyde buluşturuyoruz.
                            </p>
                            <button onClick={() => setCurrentPage('Kurumsal')} className="inline-flex items-center text-brand-red-600 font-bold hover:text-brand-red-800 transition-colors p-2 -ml-2 rounded-lg hover:bg-brand-red-50">
                                Hakkımızda Daha Fazla Bilgi <ChevronRightIcon className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-brand-blue-900">Öne Çıkan Ürünlerimiz</h2>
                        <div className="w-20 md:w-24 h-1 bg-brand-red-500 mx-auto mt-4 rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">Projeleriniz için en modern ve dayanıklı çözümlerimizle tanışın.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-b-4 border-transparent hover:border-brand-red-500">
                                <div className="overflow-hidden h-56 sm:h-48 relative">
                                    <img src={product.image} alt={`${product.name} Antalya`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="p-5 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 group-hover:text-brand-red-600 transition-colors">{product.name}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-10 md:mt-12">
                        <button onClick={() => setCurrentPage('Ürünlerimiz')} className="bg-brand-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                            Tüm Ürünleri İncele
                        </button>
                    </div>
                </div>
            </section>
            
            {/* References Marquee */}
            <section className="py-16 md:py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-brand-blue-900">Güvenin Adı: Referanslarımız</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">Tamamladığımız projeler, kalitemizin en büyük kanıtıdır.</p>
                    </div>
                    <div className="relative group">
                         {/* Marquee Container */}
                         <div className="flex animate-marquee group-hover:pause space-x-6 md:space-x-8 w-max">
                             {/* Duplicate list 3 times to ensure smooth infinite scroll on wide screens */}
                             {[...displayedReferences, ...displayedReferences, ...displayedReferences].map((ref, index) => (
                                <div key={`${ref.name}-${index}`} className="flex-shrink-0 bg-white p-4 rounded-lg flex items-center justify-center w-40 h-24 md:w-64 md:h-32 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-brand-red-200">
                                    <img src={ref.logo} alt={ref.name} className="max-h-12 md:max-h-16 max-w-full object-contain" loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="text-center mt-10 md:mt-12">
                        <button onClick={() => setCurrentPage('Referanslarımız')} className="inline-flex items-center text-brand-red-600 font-semibold hover:text-brand-red-800 transition-colors p-2">
                            Tüm Referanslarımız <ChevronRightIcon className="w-5 h-5 ml-1" />
                        </button>
                    </div>
                </div>
                 {/* FIX: Removed 'jsx' prop from <style> tag to resolve TypeScript type error. */}
                 <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 40s linear infinite;
                    }
                    /* Faster on mobile for better feel */
                    @media (max-width: 768px) {
                        .animate-marquee {
                            animation: marquee 30s linear infinite;
                        }
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