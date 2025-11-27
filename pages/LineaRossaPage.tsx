
import React from 'react';
import { LINEA_ROSSA_PRODUCTS } from '../constants';

const LineaRossaPage: React.FC = () => {
    return (
        <>
            {/* Changed to red background to match 'Rossa' */}
            <div className="bg-brand-red-700 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">Linea Rossa Milano</h1>
                    <p className="mt-4 text-lg text-brand-red-100 max-w-2xl mx-auto">İtalyan tasarımı ve üstün teknolojinin buluştuğu nokta.</p>
                </div>
            </div>
            
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Milano'dan Dünyaya: Estetik ve Performans</h2>
                        <div className="w-20 h-1 bg-brand-red-600 mx-auto mb-6"></div>
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
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-transparent hover:border-brand-red-600">
                                <div className="relative">
                                    <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-semibold text-brand-blue-900 mb-2 group-hover:text-brand-red-700 transition-colors">{product.name}</h3>
                                    <p className="text-gray-600 flex-grow">{product.description}</p>
                                    <button className="mt-6 self-start bg-brand-red-50 text-brand-red-700 font-semibold py-3 px-6 rounded-md hover:bg-brand-red-100 transition-colors">
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