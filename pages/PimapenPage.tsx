
import React, { useState } from 'react';
import { PIMAPEN_SECTIONS, COMPANY_INFO } from '../constants';
import ProductModal from '../components/ProductModal';
import type { Product } from '../types';

const PimapenPage: React.FC = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Pimapen Sistemleri</h1>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto font-light">
                        Pencerenin adı, kalitenin ve konforun adresi.
                    </p>
                </div>
            </div>
            
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Türkiye'nin Penceresi Pimapen</h2>
                        <div className="w-20 h-1 bg-brand-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                           Pimapen, üstün ısı ve ses yalıtımı sağlayan PVC pencere ve kapı sistemleri ile yaşam alanlarınıza değer katar. 
                           Enerji tasarrufu, güvenlik ve estetiği bir araya getiren yenilikçi serilerimizle her türlü mimari ihtiyaca uygun çözümler sunuyoruz.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                    {PIMAPEN_SECTIONS.map((section) => (
                        <div key={section.id} id={section.id} className="scroll-mt-32">
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-900 mb-8 border-l-4 border-brand-blue-600 pl-4">{section.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                                {section.items.map((product, index) => {
                                    const whatsappUrl = `${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında teklif almak istiyorum.`)}`;
                                    return (
                                        <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                                            <div className="relative">
                                                <img src={product.image} alt={product.name} className="h-72 w-full object-cover transition-all duration-500" />
                                                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity"></div>
                                            </div>
                                            <div className="p-8 flex-grow flex flex-col">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                                <p className="text-gray-600 flex-grow leading-relaxed">{product.description}</p>
                                                
                                                <div className="mt-8 grid grid-cols-2 gap-4">
                                                    <button
                                                        onClick={() => openModal(product)}
                                                        className="border-2 border-gray-300 text-gray-700 font-bold py-3 px-4 hover:bg-gray-100 transition-all duration-300 uppercase text-xs tracking-wide text-center rounded-sm"
                                                    >
                                                        Teknik Detay
                                                    </button>
                                                    <a 
                                                        href={whatsappUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="border-2 border-brand-blue-900 bg-brand-blue-900 text-white font-bold py-3 px-4 hover:bg-brand-blue-800 transition-all duration-300 uppercase text-xs tracking-wide text-center rounded-sm"
                                                    >
                                                        Teklif Al
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

export default PimapenPage;
