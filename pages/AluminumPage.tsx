
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import ProductModal from '../components/ProductModal';
import type { Product } from '../types';

const AluminumPage: React.FC = () => {
    const { data, t } = useLanguage();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <ProductModal 
                product={selectedProduct} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
            
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Alüminyum Mimari Sistemleri
                    </h1>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto font-light">
                        Modern yapılar için yenilikçi, dayanıklı ve estetik çözümler.
                    </p>
                </div>
            </div>
            
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16 max-w-4xl mx-auto">
                        <p className="text-gray-600 leading-relaxed text-lg">
                           İnter Akdeniz Alüminyum, her koşula uygun yüksek kaliteli kapı ve pencere sistemleri ile müşterilerine estetik, dayanıklılık ve enerji verimliliği sağlar. Geniş ürün yelpazemiz ile projelerinizin her detayına en uygun çözümü sunuyoruz. Sistemlerimizde sürme, açılır ve hebeschiebe serileri yer almakta olup, talebe göre ısı yalıtımlı ve ısı yalıtımsız opsiyonlarımız mevcuttur.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {data.ALUMINUM_SECTIONS?.map((section) => (
                        <div key={section.id} id={section.id} className="scroll-mt-32">
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 text-center border-b-4 border-brand-blue-600 w-fit mx-auto pb-2 px-4">{section.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items?.map((product, index) => {
                                    const whatsappUrl = `${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında teklif almak istiyorum.`)}`;
                                    return (
                                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                            <div className="relative h-64 overflow-hidden">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                                    <span className="text-white font-bold text-lg">{t('examine')}</span>
                                                </div>
                                            </div>
                                            <div className="p-6 flex-grow flex flex-col text-center">
                                                <h3 className="text-2xl font-black text-white drop-shadow-md absolute top-48 left-0 right-0">{product.name}</h3>
                                                {/* Text Overlay Style Fix */}
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                                
                                                <p className="text-gray-600 flex-grow text-sm mb-6">{product.description}</p>
                                                
                                                <div className="grid grid-cols-2 gap-3">
                                                    <button
                                                        onClick={() => openModal(product)}
                                                        className="border border-brand-blue-900 text-brand-blue-900 font-bold py-2 px-4 hover:bg-brand-blue-50 transition-colors rounded text-sm"
                                                    >
                                                        {t('examine')}
                                                    </button>
                                                    <a 
                                                        href={whatsappUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-brand-blue-900 text-white font-bold py-2 px-4 hover:bg-brand-blue-800 transition-colors rounded text-sm"
                                                    >
                                                        {t('offer')}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AluminumPage;
