
import React, { useState, useEffect } from 'react';
import { PRODUCTS, REFERENCES, HERO_SLIDES } from '../constants';
import type { Page } from '../types';
import { ShieldCheckIcon, LightBulbIcon, HardHatIcon } from '../components/Icons';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    const featuredProducts = PRODUCTS.slice(0, 3); // Show fewer, bigger items
    const displayedReferences = REFERENCES.slice(0, 15);

    // Expanded Category Grid matching the user's request (12 items)
    const categoryGrid = [
        { 
            title: "Alüminyum Mimari Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/aluminyum-dograma-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Panjur Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/panjur-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Kepenk Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/kepenk-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Pergola Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pergola-sistemler.jpg?raw=true",
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Zip Perde Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/zip_05-1.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Akıllı Çatı Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/Makas_Akilli_Cati-e1749810492326.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Cephe Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-cephe-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Cam Balkon Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/cam-balkon-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Giyotin Cam Balkon Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/giyotin-cam-balkon-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Alüminyum Kompozit Sistemler", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/aluminyum-kompozit-sistemler.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "Korkuluk Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/aluminyum-korkuluk.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
        { 
            title: "PVC Kapı, Pencere Sistemleri", 
            image: "https://github.com/xbarisx2/logo/blob/main/anasayfa/pvc-dograma-sistemleri.jpg?raw=true", 
            page: 'Ürünlerimiz' as Page 
        },
    ];

    return (
        <>
            {/* HERO SECTION: Sharp, Boxy, Industrial with Slider */}
            <section className="relative h-screen bg-brand-blue-950 overflow-hidden">
                {HERO_SLIDES.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
                    >
                        <div 
                            className={`absolute inset-0 bg-cover bg-center transform transition-transform duration-[10s] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                            style={{backgroundImage: `url('${slide.image}')`}}
                        ></div>
                        {/* Overlay only for text readability at bottom/center, leaving top lighter for logo visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                ))}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-center pt-20">
                    <div className="max-w-4xl border-l-8 border-brand-blue-500 pl-8 md:pl-12 py-4 animate-fade-in-up">
                        <h2 className="text-white text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-4 text-brand-blue-400">
                            İNTER AKDENİZ ALÜMİNYUM
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none mb-6 uppercase tracking-tight">
                            {HERO_SLIDES[currentSlide].title}
                        </h1>
                        <p className="text-gray-200 text-lg md:text-2xl font-light max-w-2xl mb-10 border-b border-gray-500 pb-10">
                            {HERO_SLIDES[currentSlide].subtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-0">
                            <button onClick={() => setCurrentPage('Ürünlerimiz')} className="bg-brand-blue-600 text-white font-bold py-5 px-12 hover:bg-brand-blue-700 transition-all duration-300 uppercase tracking-widest text-sm rounded-none border-2 border-brand-blue-600">
                                Ürünleri İncele
                            </button>
                            <button onClick={() => setCurrentPage('İletişim')} className="bg-transparent text-white font-bold py-5 px-12 hover:bg-white hover:text-brand-blue-900 transition-all duration-300 uppercase tracking-widest text-sm rounded-none border-2 border-white">
                                İletişime Geç
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 z-20">
                    <span className="text-xs tracking-widest uppercase mb-2">Aşağı Kaydır</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
                </div>
            </section>

            {/* PROCESS STRIP: Corporate Process Flow */}
            <section className="bg-brand-blue-900 text-white py-0 relative z-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-800/50">
                        <div className="p-8 flex items-center justify-center md:justify-start group hover:bg-brand-blue-800 transition-colors cursor-pointer">
                            <LightBulbIcon className="w-10 h-10 mr-4 opacity-80" />
                            <div>
                                <h4 className="font-bold text-lg uppercase">Projelendirme</h4>
                                <p className="text-xs text-blue-200 opacity-70">Mimari teknik detay</p>
                            </div>
                        </div>
                        <div className="p-8 flex items-center justify-center md:justify-start group hover:bg-brand-blue-800 transition-colors cursor-pointer">
                            <HardHatIcon className="w-10 h-10 mr-4 opacity-80" />
                            <div>
                                <h4 className="font-bold text-lg uppercase">Üretim</h4>
                                <p className="text-xs text-blue-200 opacity-70">Yüksek teknoloji parkuru</p>
                            </div>
                        </div>
                        <div className="p-8 flex items-center justify-center md:justify-start group hover:bg-brand-blue-800 transition-colors cursor-pointer">
                            <ShieldCheckIcon className="w-10 h-10 mr-4 opacity-80" />
                            <div>
                                <h4 className="font-bold text-lg uppercase">Montaj</h4>
                                <p className="text-xs text-blue-200 opacity-70">Uzman ekip garantisi</p>
                            </div>
                        </div>
                        <div className="p-8 flex items-center justify-center md:justify-start group hover:bg-brand-blue-800 transition-colors cursor-pointer bg-brand-blue-950">
                             <div className="text-center md:text-left w-full">
                                <h4 className="font-black text-2xl uppercase tracking-tighter">İNTER AKDENİZ</h4>
                                <p className="text-xs text-blue-200 opacity-70 tracking-widest">ALÜMİNYUM SİSTEMLERİ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPANDED CATEGORY GRID */}
            <section className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {categoryGrid.map((cat, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setCurrentPage(cat.page)}
                            className="group relative h-[300px] cursor-pointer overflow-hidden border border-gray-100"
                        >
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{backgroundImage: `url('${cat.image}')`}}
                            ></div>
                            <div className="absolute inset-0 bg-brand-blue-900/40 group-hover:bg-brand-blue-900/70 transition-colors duration-300"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-6 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="h-1 w-8 bg-white mb-3 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-blue-400"></div>
                                <h3 className="text-lg md:text-xl font-bold text-white uppercase mb-1 leading-tight">
                                    {cat.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CORPORATE SECTION: Split Layout (Text Left / Image Right) */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="block text-sm font-bold text-brand-blue-600 tracking-widest uppercase mb-2">Kurumsal</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                ÇÖZÜM ODAKLI <br/> MİMARİ SİSTEMLER
                            </h2>
                            <div className="h-1 w-20 bg-brand-blue-600 mb-8"></div>
                            
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                                İnter Akdeniz Alüminyum, 20 yılı aşkın süredir sektörde edindiği tecrübeyi, <strong>Linea Rossa Milano</strong> kalitesiyle birleştirerek projelere değer katmaktadır.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                                Antalya merkezli firmamız, Türkiye'nin ve dünyanın dört bir yanına alüminyum cephe, doğrama ve özel tasarım mimari çözümler sunmaktadır.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="border-l-4 border-gray-200 pl-4">
                                    <span className="block text-3xl font-bold text-brand-blue-900">500+</span>
                                    <span className="text-gray-500 text-xs uppercase tracking-wide">Proje</span>
                                </div>
                                <div className="border-l-4 border-gray-200 pl-4">
                                    <span className="block text-3xl font-bold text-brand-blue-900">20+</span>
                                    <span className="text-gray-500 text-xs uppercase tracking-wide">Yıl Deneyim</span>
                                </div>
                            </div>
                            
                            <button onClick={() => setCurrentPage('Kurumsal')} className="bg-brand-blue-900 text-white font-bold py-4 px-10 hover:bg-brand-blue-800 transition-colors duration-300 uppercase tracking-wide text-sm rounded-none">
                                Hakkımızda Daha Fazla
                            </button>
                        </div>
                        <div className="relative h-[600px] bg-gray-200">
                             <img 
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                                alt="Kurumsal Bina" 
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-brand-blue-900 text-white p-8 hidden md:block shadow-xl">
                                <p className="text-2xl font-bold leading-none">
                                    GLOBAL <br/> VİZYON
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS: Masonry Grid Style */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">GALERİ</span>
                            <h2 className="text-4xl font-black text-gray-900 uppercase">ÖNE ÇIKAN SİSTEMLER</h2>
                            <div className="h-1 w-20 bg-brand-blue-600 mt-4"></div>
                        </div>
                        <button onClick={() => setCurrentPage('Ürünlerimiz')} className="hidden md:inline-block text-gray-900 font-bold border-b-2 border-gray-900 pb-1 hover:text-brand-blue-600 hover:border-brand-blue-600 transition-all">
                            TÜM ÜRÜNLERİ GÖR
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="group relative h-80 overflow-hidden cursor-pointer border border-gray-100">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue-900/20 group-hover:bg-brand-blue-900/80 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2 uppercase">{product.name}</h3>
                                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">{product.description}</p>
                                    <span className="border-2 border-white text-white px-6 py-2 font-bold uppercase text-xs hover:bg-white hover:text-brand-blue-900 transition-colors">
                                        İncele
                                    </span>
                                </div>
                            </div>
                        ))}
                         {/* Static Extra Item to fill grid if needed or make a pattern */}
                         <div className="group relative h-80 bg-brand-blue-950 flex items-center justify-center text-center cursor-pointer overflow-hidden">
                             <div className="absolute inset-0 border-8 border-brand-blue-900 transition-all duration-300 group-hover:border-brand-blue-500"></div>
                             <div className="p-8">
                                <h3 className="text-3xl font-black text-white mb-2">PROJELERİNİZ</h3>
                                <p className="text-gray-400 mb-6">Sizin için en uygun çözümü bulalım.</p>
                                <button onClick={() => setCurrentPage('İletişim')} className="text-white font-bold underline decoration-brand-blue-500 underline-offset-4 hover:text-brand-blue-400 transition-colors">
                                    TEKLİF AL
                                </button>
                             </div>
                         </div>
                    </div>
                </div>
            </section>

            {/* REFERENCES / BRANDS */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">GÜÇLÜ İŞ BİRLİĞİ</span>
                        <h2 className="text-3xl font-black text-gray-900 mt-2 uppercase">REFERANSLARIMIZ</h2>
                    </div>
                    <div className="relative group overflow-hidden">
                         <div className="flex animate-marquee group-hover:pause space-x-16 items-center">
                             {[...displayedReferences, ...displayedReferences].map((ref, index) => (
                                <div key={`${ref.name}-${index}`} className="flex-shrink-0 flex items-center justify-center transition-all duration-500 cursor-pointer">
                                    <img src={ref.logo} alt={ref.name} className="h-16 w-auto object-contain mix-blend-multiply" />
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
                `}</style>
            </section>
        </>
    );
};

export default HomePage;
