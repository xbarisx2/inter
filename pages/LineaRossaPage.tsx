import React from 'react';
import { LINEA_ROSSA_PRODUCTS } from '../constants';

const LineaRossaPage: React.FC = () => {
    return (
        <>
            {/* Changed background to brand-blue-900 for consistency, keeping red minimal */}
            <div className="bg-brand-blue-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Linea Rossa Milano</h1>
                    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto font-light">İtalyan tasarımı ve üstün teknolojinin buluştuğu nokta.</p>
                </div>
            </div>
            
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Milano'dan Dünyaya: Estetik ve Performans</h2>
                        <div className="w-20 h-1 bg-brand-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                           <strong>Linea Rossa Milano</strong>, alüminyum sistemlerde minimalist İtalyan estetiğini, maksimum performansla birleştiren global bir markadır. Geniş açıklıklara olanak tanıyan ince profil tasarımları, üstün ısı ve ses yalıtım değerleri ile modern mimarinin tüm gereksinimlerine cevap verir. Yaşam alanlarınıza İtalyan zarafetini katmak için Linea Rossa'nın yenilikçi dünyasını keşfedin.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {LINEA_ROSSA_PRODUCTS.map((product, index) => (
                            <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="h-72 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity"></div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                    <p className="text-gray-600 flex-grow leading-relaxed">{product.description}</p>
                                    <button className="mt-8 self-start border-2 border-brand-blue-900 text-brand-blue-900 font-bold py-3 px-8 hover:bg-brand-blue-900 hover:text-white transition-all duration-300 uppercase text-sm tracking-wide">
                                        Teklif Al
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LineaRossaPage;