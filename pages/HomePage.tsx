
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
            <section className="relative bg-brand-blue-800 text-white h-[60vh] md:h-[80vh] flex items-center">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://picsum.photos/seed/architecture/1920/1080')"}}></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                        Yaşam Alanlarınıza Değer Katan <span className="text-brand-blue-300">Modern Çözümler</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-blue-100 mb-8 animate-fade-in-up">
                        Antalya'da alüminyum doğrama, cephe sistemleri ve PVC çözümlerinde kalite, estetik ve yeniliği bir araya getiriyoruz.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                        <button onClick={() => setCurrentPage('Ürünlerimiz')} className="bg-white text-brand-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-blue-100 transition-all duration-300 transform hover:scale-105">
                            Ürünlerimizi Keşfedin
                        </button>
                        <button onClick={() => setCurrentPage('İletişim')} className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-brand-blue-700 transition-all duration-300 transform hover:scale-105">
                            Teklif Alın
                        </button>
                    </div>
                </div>
            </section>

            {/* About Us Summary */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/meeting/800/600" alt="İnter Akdeniz Alüminyum Ofis" className="rounded-lg shadow-2xl"/>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">Mimaride Yenilikçi Dokunuş</h2>
                            <p className="text-gray-600 mb-6">
                                İnter Akdeniz Alüminyum olarak, sektördeki tecrübemizle Antalya ve çevresinde sayısız projeye imza attık. Müşteri memnuniyetini merkeze alan yaklaşımımız, kaliteli malzeme seçimimiz ve uzman ekibimizle, her projede estetik ve fonksiyonelliği en üst düzeyde buluşturuyoruz.
                            </p>
                            <button onClick={() => setCurrentPage('Kurumsal')} className="inline-flex items-center text-brand-blue-600 font-semibold hover:text-brand-blue-800 transition-colors">
                                Hakkımızda Daha Fazla Bilgi <ChevronRightIcon className="w-5 h-5 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">Öne Çıkan Ürünlerimiz</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Projeleriniz için en modern ve dayanıklı çözümlerimizle tanışın.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={product.image} alt={product.name} className="h-48 w-full object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <button onClick={() => setCurrentPage('Ürünlerimiz')} className="bg-brand-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-blue-700 transition-all duration-300 transform hover:scale-105">
                            Tüm Ürünler
                        </button>
                    </div>
                </div>
            </section>
            
            {/* References Marquee */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900">Güvenin Adı: Referanslarımız</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Tamamladığımız projeler, kalitemizin en büyük kanıtıdır.</p>
                    </div>
                    <div className="relative overflow-hidden group">
                         <div className="flex animate-marquee group-hover:pause space-x-8">
                             {displayedReferences.concat(displayedReferences).map((ref, index) => (
                                <div key={index} className="flex-shrink-0 bg-gray-50 p-4 rounded-lg flex items-center justify-center w-64 h-32 border border-gray-200">
                                    <img src={ref.logo} alt={ref.name} className="max-h-16 max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="text-center mt-12">
                        <button onClick={() => setCurrentPage('Referanslarımız')} className="inline-flex items-center text-brand-blue-600 font-semibold hover:text-brand-blue-800 transition-colors">
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
                        animation: marquee 60s linear infinite;
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
